import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Google, Facebook } from '@assets/icons'
// eslint-disable-next-line import/no-unresolved
import { getRules } from '@utils'

type AuthType = 'register' | 'login'

enum EAuthHeader {
  register = 'register',
  login = 'login'
}

interface IAuth {
  type: AuthType
}

interface IFormInput {
  email: string
  password: string
  confirm_password: string
}

export default function Auth({ type }: IAuth) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  const rules = getRules(getValues)

  return (
    <div className='bg-primaryColor'>
      {/* Container */}
      <div className='container'>
        <div className='flex h-screen w-full items-center justify-center bg-contain bg-center bg-no-repeat lg:bg-hero'>
          {/* Register Form */}
          <div className='ml-[50%] h-full xs:hidden lg:block'></div>
          <form
            className='flex w-[400px] flex-col rounded-[4px] bg-[#fff] px-12 py-10 shadow-md'
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
            noValidate
          >
            <p className='text-[2rem]'>{type === EAuthHeader.register ? 'Đăng ký' : 'Đăng Nhập'}</p>
            <div className='mt-10'>
              <input
                className={`w-full rounded-[2px]
                  px-6 py-4 text-[1.5rem] focus:border-[${
                    errors.email?.message ? '#ff424f' : '#000000de'
                  }] focus:shadow-md focus:outline-none bg-[${errors.email?.message ? '#fff6f7' : `#fff`}]`}
                style={{
                  border: `1px solid ${errors.email?.message ? '#ff424f' : '#00000024'}`
                }}
                type='email'
                placeholder='Email'
                {...register('email', rules.email)}
              />
              <p className='min-h-[2rem] text-[1.3rem] text-[#ff424f]'> {errors.email?.message}</p>
            </div>
            <div className='mt-2'>
              <input
                className={`w-full rounded-[2px] border border-[${
                  errors.password?.message ? '#ff424f' : '#00000024'
                }] px-6 py-4 text-[1.5rem] focus:border-[${
                  errors.password?.message ? '#ff424f' : '#000000de'
                }] focus:shadow-md focus:outline-none bg-[${errors.password?.message ? '#fff6f7' : `#fff`}]`}
                type='password'
                placeholder='Password'
                {...register('password', rules.password)}
              />
              <p className='min-h-[2rem] text-[1.3rem] text-[#ff424f]'> {errors.password?.message}</p>
            </div>
            {type === EAuthHeader.register && (
              <div className='mt-2'>
                <input
                  className={`w-full rounded-[2px] border border-[${
                    errors.confirm_password?.message ? '#ff424f' : '#00000024'
                  }] px-6 py-4 text-[1.5rem] focus:border-[${
                    errors.confirm_password?.message ? '#ff424f' : '#000000de'
                  }] focus:shadow-md focus:outline-none bg-[${errors.confirm_password?.message ? '#fff6f7' : `#fff`}]`}
                  type='password'
                  placeholder='Xác nhận password'
                  {...register('confirm_password', rules.confirm_password)}
                />
                <p className='min-h-[2rem] text-[1.3rem] text-[#ff424f]'> {errors.confirm_password?.message}</p>
              </div>
            )}
            <button
              className='mt-4 rounded-[2px] bg-primaryColor py-[11px] text-[1.4rem] uppercase text-[#fff] hover:opacity-90'
              type='submit'
            >
              {type === EAuthHeader.register ? 'Đăng ký' : 'Đăng nhập'}
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

            {/* Legal */}
            {type === EAuthHeader.register && (
              <div className='mx-auto mt-8 max-w-[283px] text-center text-[1.2rem]'>
                Bằng việc đăng kí, bạn đã đồng ý với Shopee về{' '}
                <span className='text-primaryColor'>Điều khoản dịch vụ</span> &{' '}
                <span className='text-primaryColor'>Chính sách và bảo mật</span>
              </div>
            )}

            {/* Account link */}
            <div className='mt-8 text-center text-[1.4rem] text-[rgba(0,0,0,.26)]'>
              {type === EAuthHeader.register ? 'Bạn đã có tài khoản? ' : 'Bạn mới biết đến Shopee? '}
              <Link to={type === EAuthHeader.register ? '/login' : '/register'} className='text-primaryColor'>
                {type === EAuthHeader.register ? 'Đăng nhập' : 'Đăng ký'}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
