import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Google, Facebook } from '@/assets/icons'
import { IAuthSchema, authSchema } from '@/utils/rules'
import { InputField } from '@/components'

type ILoginSchema = Omit<IAuthSchema, 'confirm_password'>
const loginSchema = authSchema.pick(['email', 'password'])

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginSchema>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit: SubmitHandler<ILoginSchema> = (data) => console.log(data)

  return (
    <div className='bg-primaryColor'>
      {/* Container */}
      <div className='container'>
        <div className='flex h-screen w-full items-center justify-center bg-contain bg-center bg-no-repeat lg:bg-hero'>
          {/* Login Form */}
          <div className='ml-[50%] h-full xs:hidden lg:block'></div>
          <form
            className='flex w-[400px] flex-col rounded-[4px] bg-[#fff] px-12 py-10 shadow-md'
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
            noValidate
          >
            <p className='text-[2rem]'>Đăng Nhập</p>
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
                  name='email'
                  errorMessage={errors.password?.message}
                  register={register}
                  type='password'
                  placeholder='Mật khẩu'
                />
              </div>
            </div>
            <button
              className='mt-4 rounded-[2px] bg-primaryColor py-[11px] text-[1.4rem] uppercase text-[#fff] hover:opacity-90'
              type='submit'
            >
              Đăng nhập
            </button>
            <span
              className='mt-10 flex items-center justify-between gap-[15px] text-[1.3rem] uppercase text-[#ccc]
                        before:inline-block before:h-[1px] before:w-full before:bg-[#dbdbdb] before:content-[""]
                        after:inline-block after:h-[1px] after:w-full after:bg-[#dbdbdb] after:content-[""]'
            >
              Hoặc
            </span>

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

            {/* Account link */}
            <div className='mt-8 text-center text-[1.4rem] text-[rgba(0,0,0,.26)]'>
              Bạn mới biết đến Shopee?{' '}
              <Link to='/register' className='text-primaryColor'>
                Đăng ký
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}