import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Google, Facebook } from '@assets/icons'

interface IFormInput {
  email: string
  password: string
  confirm_password: string
}
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

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
          >
            <p className='text-[2rem]'>Đăng ký</p>
            <div>
              <input
                className='mt-6 w-full rounded-[2px] border border-[#00000024] px-6 py-4 focus:border-[#000000de] focus:shadow-md focus:outline-none'
                type='email'
                placeholder='Email'
                {...register('email', {
                  required: true
                })}
              />
              <p className='min-h-[3rem]'> {errors.email && 'Email is required !'}</p>
            </div>
            <div>
              <input
                className='mt-6 w-full rounded-[2px] border border-[#00000024] px-6 py-4 focus:border-[#000000de] focus:shadow-md focus:outline-none'
                type='text'
                placeholder='Mật khẩu'
                {...register('password', {
                  required: true
                })}
              />
              <p className='min-h-[3rem]'> {errors.password && 'Password is required !'}</p>
            </div>
            <input
              className='mt-6 rounded-[2px] border border-[#00000024] px-6 py-4 focus:border-[#000000de] focus:shadow-md focus:outline-none'
              type='text'
              placeholder='Xác nhận mật khẩu'
              {...register('confirm_password', {
                required: true
              })}
            />
            <p className='min-h-[3rem]'> {errors.email && 'Email is required !'}</p>

            <button
              className='mt-10 rounded-[2px] bg-primaryColor py-[11px] text-[1.5rem] uppercase text-[#fff] hover:opacity-90'
              type='submit'
            >
              Đăng ký
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
