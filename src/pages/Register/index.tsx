import Hero from '@assets/images/register-hero.png'
import Facebook from '@assets/icons/facebook.svg'
import Google from '@assets/icons/google.svg'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='bg-primaryColor'>
      {/* container */}
      <div className='container'>
        {/* Body */}
        <div className='relative'>
          {/* Hero Image */}
          <img className='object-cover' src={Hero} alt='Shopee Sale' />
          {/* Register Form */}
          <div className='absolute top-60 right-0 flex flex-col w-[400px] px-12 py-10 bg-[#fff]'>
            <p className='text-[2rem]'>Đăng ký</p>
            <input
              className='mt-10 px-6 py-4 border border-groove border-[#00000024] rounded-[2px] focus:outline-none'
              type='phone'
              placeholder='Số điện thoại'
            />
            <button className='mt-10 py-[11px] rounded-[2px] opacity-[0.7] text-[#fff] text-[1.5rem] uppercase bg-primaryColor cursor-not-allowed'>
              TIẾP THEO
            </button>
            <span
              className='mt-10 flex gap-[15px] justify-between items-center text-[1.3rem] uppercase text-[#ccc]
                        before:content-[""] before:inline-block before:w-full before:h-[1px] before:bg-[#dbdbdb]
                        after:content-[""] after:inline-block after:w-full after:h-[1px] after:bg-[#dbdbdb]'
            >
              Hoặc
            </span>

            {/* OAuth List */}
            <div className='mt-6 flex gap-4'>
              {/* OAuth Item 1 */}
              <Link to='#!' className='flex-1'>
                <div className='px-14 py-3 flex items-center gap-2 border border-solid border-[rgba(0,0,0,.26)]'>
                  <img className='w-[24px] h-[24px]' src={Facebook} alt='Facebook' />
                  <span className='text-[1.4rem]'>Facebook</span>
                </div>
              </Link>

              {/* OAuth Item 2 */}
              <Link to='#!' className='flex-1'>
                <div className='px-14 py-3 flex items-center gap-2 border border-solid border-[rgba(0,0,0,.26)]'>
                  <img className='w-[24px] h-[24px]' src={Google} alt='Google' />
                  <span className='text-[1.4rem]'>Google</span>
                </div>
              </Link>
            </div>

            {/* Legal */}
            <div className='mt-8 mx-auto text-[1.2rem] text-center max-w-[283px]'>
              Bằng việc đăng kí, bạn đã đồng ý với Shopee về{' '}
              <span className='text-primaryColor'>Điều khoản dịch vụ</span> &{' '}
              <span className='text-primaryColor'>Chính sách và bảo mật</span>
            </div>

            {/* Account Link */}
            <div className='mt-8 text-[1.4rem] text-center text-[rgba(0,0,0,.26)]'>
              Bạn đã có tài khoản? <span className='text-primaryColor'>Đăng nhập </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
