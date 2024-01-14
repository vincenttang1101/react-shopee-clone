import Hero from '@assets/img/register-hero.png'

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
          <div className='absolute top-60 right-0 flex flex-col w-[400px] p-6 bg-[#fff]'>
            <p className='text-[2rem]'>Đăng ký</p>
            <input
              className='mt-10 p-4 border-2 border-groove border-[#00000024] rounded-[2px]'
              type='phone'
              placeholder='Số điện thoại'
            />
            <button className='mt-10 py-[11px] rounded-[2px] opacity-[0.7] text-[#fff] text-[1.5rem] uppercase bg-primaryColor cursor-not-allowed'>
              TIẾP THEO
            </button>
            <span
              className='mt-10 flex gap-[15px] justify-between items-center text-[gray]
                        before:content-[""] before:inline-block before:w-full before:h-px before:bg-[#00000024]
                        after:content-[""] after:inline-block after:w-full after:h-px after:bg-[#00000024]'
            >
              Hoặc
            </span>
            {/* OAuth List */}
            <div>
              {/* Item 1 */}
              <div>
                <img src='' alt='' />
                <span>Facebook</span>
              </div>
              {/* Item 1 */}
              <div>
                <img src='' alt='' />
                <span>Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
