import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
// import { Google, Facebook } from '@/assets/icons'
import { IAuthSchema, authSchema } from '@/utils/rules.util'
import { Button, InputField } from '@/components'
import { authApi } from '@/apis'
import { isAxiosUnprocessableEntityError } from '@/utils/axiosError.util'
import { ErrorResponse } from '@/types/response.type'
import { AppContext } from '@/contexts'
import { PATHS } from '@/constants/path.constant'

type ILoginSchema = Omit<IAuthSchema, 'confirm_password'>
const loginSchema = authSchema.omit(['confirm_password'])

export default function Login() {
  const { setIsAuthenticated } = useContext(AppContext)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<ILoginSchema>({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: ILoginSchema) => authApi.login(body)
  })

  const onSubmit: SubmitHandler<ILoginSchema> = (data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        setIsAuthenticated(true)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<ILoginSchema>>(error)) {
          const formError = error.response?.data.data

          if (formError) {
            Object.keys(formError).forEach((field) => {
              setError(field as keyof ILoginSchema, {
                type: 'server',
                message: formError[field as keyof ILoginSchema]
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
        <div className='flex h-screen w-full items-center justify-end bg-contain bg-center bg-no-repeat pr-10 lg:bg-hero'>
          {/* Login Form */}
          <form
            className='flex w-[400px] flex-col rounded-[4px] bg-[#fff] px-12 py-10 shadow-md'
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <p className='text-2xl'>Đăng nhập</p>
            <div className='mt-7 flex flex-col gap-y-7'>
              <InputField
                name='email'
                errorMessage={errors.email?.message}
                register={register}
                type='email'
                placeholder='Email'
              />
              <InputField
                name='password'
                errorMessage={errors.password?.message}
                register={register}
                type='password'
                placeholder='Mật khẩu'
              />
            </div>
            <Button
              className='mt-6 rounded-sm bg-primaryColor py-2 text-center uppercase text-white hover:opacity-90'
              type='submit'
              isLoading={loginMutation.isPending}
            >
              Đăng nhập
            </Button>
            {/* <div
              className='mt-10 flex items-center justify-between gap-[15px] text-[1.3rem] uppercase text-[#ccc]
                        before:inline-block before:h-[1px] before:w-full before:bg-[#dbdbdb] before:content-[""]
                        after:inline-block after:h-[1px] after:w-full after:bg-[#dbdbdb] after:content-[""]'
            >
              Hoặc
            </div> */}

            {/* OAuth list */}
            {/* <div className='flex gap-4 mt-6'>
              <Link to='#!' className='flex-1 hover:bg-[#00000005]'>
                <div className='flex items-center gap-2 border border-solid border-[rgba(0,0,0,.26)] px-14 py-3'>
                  <img className='h-[24px] w-[24px]' src={Facebook} alt='Facebook' />
                  <span className='text-[1.4rem]'>Facebook</span>
                </div>
              </Link>

              <Link to='#!' className='flex-1 hover:bg-[#00000005]'>
                <div className='flex items-center gap-2 border border-solid border-[rgba(0,0,0,.26)] px-14 py-3'>
                  <img className='h-[24px] w-[24px]' src={Google} alt='Google' />
                  <span className='text-[1.4rem]'>Google</span>
                </div>
              </Link>
            </div> */}

            {/* Account link */}
            <div className='mt-8 text-center text-lg'>
              <span className='text-gray-400'>Bạn mới biết đến Shopee? </span>
              <Link to={PATHS.REGISTER} className='text-primaryColor'>
                Đăng ký
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
