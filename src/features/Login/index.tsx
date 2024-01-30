import { Link } from 'react-router-dom'
import { Google, Facebook } from '@assets/icons'

export default function Login() {
  return (
    <div className='bg-primaryColor'>
      {/* Container */}
      <div className='container'>
        <div className='flex h-screen w-full items-center justify-center bg-contain bg-center bg-no-repeat lg:bg-hero'>
          {/* Register Form */}
          <div className='ml-[50%] h-full xs:hidden lg:block'></div>
          <div className='flex w-[400px] flex-col rounded-[4px] bg-[#fff] px-12 py-10 shadow-md'>
            <p className='text-[2rem]'>Đăng nhập</p>
            <div>
              <input
                className='mt-10 w-full rounded-[2px] border border-[#00000024] px-6 py-4 focus:border-[#000000de] focus:shadow-md focus:outline-none'
                type='text'
                placeholder='Email'
              />
            </div>
            <div>
              <input
                className='mt-10 w-full rounded-[2px] border border-[#00000024] px-6 py-4 focus:border-[#000000de] focus:shadow-md focus:outline-none'
                type='text'
                placeholder='Mật khẩu'
              />
            </div>
            <button className='mt-10 rounded-[2px] bg-primaryColor py-[11px] text-[1.5rem] uppercase text-[#fff] hover:opacity-90'>
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
              Bạn mới biết đến Shopee?{' '}
              <Link to='/register' className='text-primaryColor'>
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
