import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { Omit, omit } from 'lodash'

import { AuthApi } from '@/apis'
import { Button, InputField } from '@/components/common'
import PathConstant from '@/constants/path.constant'
import { AppContext } from '@/contexts'
import { ErrorResponse } from '@/types/response.type'
import { AxiosErrorUtil } from '@/utils/axiosError.util'
// import { Google, Facebook } from '@/assets/icons'
import { IAuthSchema, RuleUtil } from '@/utils/rules.util'

export default function Register() {
  const { setIsAuthenticated } = useContext(AppContext)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<IAuthSchema>({
    resolver: yupResolver(RuleUtil.authSchema)
  })

  const registerMutation = useMutation({
    mutationFn: (body: Omit<IAuthSchema, 'confirm_password'>) => AuthApi.register(body)
  })

  const onSubmit: SubmitHandler<IAuthSchema> = (data) => {
    const body = omit(data, ['confirm_password'])
    registerMutation.mutate(body, {
      onSuccess: () => {
        setIsAuthenticated(true)
      },
      onError: (error) => {
        if (
          AxiosErrorUtil.isAxiosUnprocessableEntityError<ErrorResponse<Omit<IAuthSchema, 'confirm_password'>>>(error)
        ) {
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
        <div className='flex h-screen w-full items-center justify-end bg-contain bg-center bg-no-repeat pr-10 lg:bg-hero'>
          {/* Register form */}
          <form
            className='flex w-[400px] flex-col rounded-md bg-white px-7 py-10 shadow-md'
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <p className='text-2xl'>Đăng ký</p>
            <div className='mt-7 flex flex-col gap-y-px'>
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
              <InputField
                name='confirm_password'
                errorMessage={errors.confirm_password?.message}
                register={register}
                type='password'
                placeholder='Xác nhận mật khẩu'
              />
            </div>

            <Button
              className='mt-1 rounded-sm bg-primaryColor py-2 text-center uppercase text-white hover:opacity-90'
              type='submit'
            >
              Đăng ký
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
              <span className='text-gray-400'>Bạn đã có tài khoản? </span>
              <Link to={PathConstant.login} className='text-primaryColor'>
                Đăng nhập
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
