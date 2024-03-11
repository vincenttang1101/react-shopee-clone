import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { Omit, omit } from 'lodash'
import { Google, Facebook } from '@/assets/icons'
import { IAuthSchema, authSchema } from '@/utils'
import { Button, InputField } from '@/components'
import { authApi } from '@/apis'
import { isAxiosUnprocessableEntityError } from '@/utils'
import { ErrorResponse } from '@/types'
import { AppContext } from '@/contexts'

export default function Register() {
  const { setIsAuthenticated } = useContext(AppContext)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<IAuthSchema>({
    resolver: yupResolver(authSchema)
  })

  const registerMutation = useMutation({
    mutationFn: (body: Omit<IAuthSchema, 'confirm_password'>) => authApi.register(body)
  })

  const onSubmit: SubmitHandler<IAuthSchema> = (data) => {
    const body = omit(data, ['confirm_password'])
    registerMutation.mutate(body, {
      onSuccess: () => {
        setIsAuthenticated(true)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<IAuthSchema, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data

          if (formError) {
            Object.keys(formError).forEach((field) => {
              setError(field as keyof Omit<IAuthSchema, 'confirm_password'>, {
                type: 'server',
                message: formError[field as keyof Omit<IAuthSchema, 'confirm_password'>]
              })
            })
          }
        }
      }
    })
  }

  return (
    <div className='bg-primaryColor'>
      {/* Container */}
      <div className='container'>
        <div className='flex h-screen w-full items-center justify-center bg-contain bg-center bg-no-repeat lg:bg-hero'>
          {/* Register form */}
          <div className='ml-[50%] h-full xs:hidden lg:block'></div>
          <form
            className='flex w-[400px] flex-col rounded-[4px] bg-[#fff] px-12 py-10 shadow-md'
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <p className='text-[2rem]'>Đăng ký</p>
            {/* Input form */}
            <div className='mt-8'>
              <div className='mt-4'>
                <InputField
                  name='email'
                  errorMessage={errors.email?.message}
                  register={register}
                  type='email'
                  placeholder='Email'
                />
              </div>

              <div className='mt-4'>
                <InputField
                  name='password'
                  errorMessage={errors.password?.message}
                  register={register}
                  type='password'
                  placeholder='Mật khẩu'
                />
              </div>

              <div className='mt-4'>
                <InputField
                  name='confirm_password'
                  errorMessage={errors.confirm_password?.message}
                  register={register}
                  type='password'
                  placeholder='Xác nhận mật khẩu'
                />
              </div>
            </div>

            <Button
              className='mt-4 flex items-center justify-center rounded-[2px] bg-primaryColor py-[11px] text-[1.4rem] uppercase text-[#fff] hover:opacity-90'
              type='submit'
            >
              Đăng ký
            </Button>
            <div
              className='mt-10 flex items-center justify-between gap-[15px] text-[1.3rem] uppercase text-[#ccc]
                        before:inline-block before:h-[1px] before:w-full before:bg-[#dbdbdb] before:content-[""]
                        after:inline-block after:h-[1px] after:w-full after:bg-[#dbdbdb] after:content-[""]'
            >
              Hoặc
            </div>

            {/* OAuth list */}
            <div className='mt-6 flex gap-4'>
              {/* OAuth item 01 */}
              <Link to='#!' className='flex-1 hover:bg-[#00000005]'>
                <div className='flex items-center gap-2 border border-solid border-[rgba(0,0,0,.26)] px-14 py-3'>
                  <img className='h-[24px] w-[24px]' src={Facebook} alt='Facebook' />
                  <span className='text-[1.4rem]'>Facebook</span>
                </div>
              </Link>

              {/* OAuth item 02 */}
              <Link to='#!' className='flex-1 hover:bg-[#00000005]'>
                <div className='flex items-center gap-2 border border-solid border-[rgba(0,0,0,.26)] px-14 py-3'>
                  <img className='h-[24px] w-[24px]' src={Google} alt='Google' />
                  <span className='text-[1.4rem]'>Google</span>
                </div>
              </Link>
            </div>

            {/* Legal */}
            <div className='mx-auto mt-8 max-w-[283px] text-center text-[1.2rem]'>
              Bằng việc đăng kí, bạn đã đồng ý với Shopee về{' '}
              <span className='text-primaryColor'>Điều khoản dịch vụ</span> &{' '}
              <span className='text-primaryColor'>Chính sách và bảo mật</span>
            </div>

            {/* Account link */}
            <div className='mt-8 text-center text-[1.4rem] text-[rgba(0,0,0,.26)]'>
              Bạn đã có tài khoản?{' '}
              <Link to='/login' className='text-primaryColor'>
                Đăng nhập
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
