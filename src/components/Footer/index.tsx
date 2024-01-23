import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import {
  Payment1,
  Payment2,
  Payment3,
  Payment4,
  Payment5,
  Payment6,
  Payment7,
  Payment8,
  Carrier1,
  Carrier2,
  Carrier3,
  Carrier4,
  Carrier5,
  Carrier6,
  Carrier7,
  Carrier8,
  Carrier9,
  Carrier10,
  Carrier11,
  App1,
  App2,
  App3,
  App4
} from '@assets/images'

export default function Footer() {
  return (
    <footer className='pt-[50px] bg-[#f5f5f5]'>
      <div className='container'>
        <div className='grid grid-cols-5'>
          {/* Column item 1 */}
          <div>
            <p className='font-bold text-[1.1rem] uppercase'>CHĂM SÓC KHÁCH HÀNG</p>
            <ul className='mt-5 flex flex-col gap-3 text-[rgba(0,0,0,.65)] text-[1.2rem]'>
              <li>Trung Tâm Trợ Giúp</li>
              <li>IShopee Blog</li>
              <li>Shopee Mall</li>
              <li>Hướng Dẫn Mua Hàng</li>
              <li>Hướng Dẫn Bán Hàng</li>
              <li>Thanh Toán</li>
              <li>Shopee Xu</li>
              <li>Vận Chuyển</li>
              <li>Trả Hàng & Hoàn Tiền</li>
              <li>Chăm Sóc Khách Hàng</li>
              <li>Chính Sách Bảo Hành</li>
            </ul>
          </div>

          {/* Column item 2 */}
          <div>
            <p className='font-bold text-[1.1rem] uppercase'>VỀ SHOPEE</p>
            <ul className='mt-5 flex flex-col gap-3 text-[rgba(0,0,0,.65)] text-[1.2rem]'>
              <li>Giới Thiệu Về Shopee Việt Nam</li>
              <li>Tuyển Dụng</li>
              <li>Điều Khoản Shopee</li>
              <li>Chính Sách Bảo Mật</li>
              <li>Chính Hãng</li>
              <li>Kênh Người Bán</li>
              <li>Flash Sales</li>
              <li>Chương Trình Tiếp Thị Liên Kết Shopee</li>
              <li>Liên Hệ Với Truyền Thông</li>
            </ul>
          </div>

          {/* Column item 3 */}
          <div className='flex flex-col gap-y-10'>
            {/* Row 1 */}
            <div>
              <p className='font-bold text-[1.1rem] uppercase'>THANH TOÁN</p>
              <ul className='mt-5 flex flex-wrap gap-3 text-[rgba(0,0,0,.65)] text-[1.2rem]'>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Payment1} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Payment2} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Payment3} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Payment4} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Payment5} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Payment6} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Payment7} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Payment8} alt='Payment' className='object-cover' />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Row 2 */}
            <div>
              <p className='font-bold text-[1.2rem] uppercase'>ĐƠN VỊ VẬN CHUYỂN</p>
              <ul className='mt-5 flex flex-wrap gap-3 text-[rgba(0,0,0,.65)] text-[1.2rem]'>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Carrier1} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Carrier2} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Carrier3} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Carrier4} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Carrier5} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Carrier6} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Carrier7} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Carrier8} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Carrier9} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Carrier10} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'>
                  <Link to='#!'>
                    <img src={Carrier11} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column item 4 */}
          <div>
            <p className='font-bold text-[1.1rem] uppercase'>THEO DÕI CHÚNG TÔI TRÊN</p>
            <ul className='mt-5 flex flex-col gap-3 text-[#000000a6] text-[1.2rem]'>
              <li>
                <Link to='https://www.facebook.com/vincenttang1101/' className='flex gap-3 items-center '>
                  <FaFacebook className='text-[1.6rem]' />
                  <span className='hover:text-[#ee4d2d]'>Facebook</span>
                </Link>
              </li>
              <li>
                <Link to='https://www.linkedin.com/in/quang-tang-955a17183/' className='flex gap-3 items-center'>
                  <FaLinkedin className='text-[1.6rem]' />
                  <span className='hover:text-[#ee4d2d]'>Linkedin</span>
                </Link>
              </li>
              <li>
                <Link to='https://github.com/vincenttang1101' className='flex gap-3 items-center'>
                  <FaGithub className='text-[1.6rem]' />
                  <span className='hover:text-[#ee4d2d]'>Github</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column item 5 */}
          <div>
            <p className='font-bold text-[1.1rem] uppercase'>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</p>
            <div className='mt-5 flex gap-4'>
              <div>
                <img
                  src={App1}
                  alt='Download App'
                  className='p-2 h-full object-cover [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <img src={App2} alt='Download App' className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white' />
                <img src={App3} alt='Download App' className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white' />
                <img src={App4} alt='Download App' className='p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)] bg-white' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
