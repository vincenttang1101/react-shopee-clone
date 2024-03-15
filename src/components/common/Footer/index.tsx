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
} from '@/assets/images'

export default function Footer() {
  return (
    <footer className='bg-[#f5f5f5] py-[35px] xs:hidden lg:block'>
      {/* Container */}
      <div className='container'>
        {/* Row item 01 */}
        <div className='grid grid-cols-5 border-b border-solid border-b-[#0000001a] pb-16'>
          {/* Column item 01 */}
          <div>
            <p className='footerTitle'>CHĂM SÓC KHÁCH HÀNG</p>
            <ul className='flex flex-col gap-3 text-[1.2rem] text-[rgba(0,0,0,.65)]'>
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

          {/* Column item 02 */}
          <div>
            <p className='footerTitle'>VỀ SHOPEE</p>
            <ul className='flex flex-col gap-3 text-[1.2rem] text-[rgba(0,0,0,.65)]'>
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

          {/* Column item 03 */}
          <div className='flex flex-col gap-y-10'>
            {/* Row 01 */}
            <div>
              <p className='footerTitle'>THANH TOÁN</p>
              <ul className='flex flex-wrap gap-3 text-[1.2rem] text-[rgba(0,0,0,.65)]'>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Payment1} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Payment2} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Payment3} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Payment4} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Payment5} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Payment6} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Payment7} alt='Payment' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Payment8} alt='Payment' className='object-cover' />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Row 02 */}
            <div>
              <p className='footerTitle'>ĐƠN VỊ VẬN CHUYỂN</p>
              <ul className='flex flex-wrap gap-3 text-[1.2rem] text-[rgba(0,0,0,.65)]'>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Carrier1} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Carrier2} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Carrier3} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Carrier4} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Carrier5} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Carrier6} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Carrier7} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Carrier8} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Carrier9} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Carrier10} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
                <li className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'>
                  <Link to='#!'>
                    <img src={Carrier11} alt='Carrier' className='object-cover' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column item 04 */}
          <div>
            <p className='footerTitle'>THEO DÕI CHÚNG TÔI TRÊN</p>
            <ul className='flex flex-col gap-3 text-[1.2rem] text-[#000000a6]'>
              <li>
                <Link to='https://www.facebook.com/vincenttang1101/' className='flex items-center gap-3 '>
                  <FaFacebook className='text-[1.6rem]' />
                  <span className='hover:text-[#ee4d2d]'>Facebook</span>
                </Link>
              </li>
              <li>
                <Link to='https://www.linkedin.com/in/quang-tang-955a17183/' className='flex items-center gap-3'>
                  <FaLinkedin className='text-[1.6rem]' />
                  <span className='hover:text-[#ee4d2d]'>Linkedin</span>
                </Link>
              </li>
              <li>
                <Link to='https://github.com/vincenttang1101' className='flex items-center gap-3'>
                  <FaGithub className='text-[1.6rem]' />
                  <span className='hover:text-[#ee4d2d]'>Github</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column item 05 */}
          <div>
            <p className='footerTitle'>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</p>
            <div className='flex gap-4'>
              <div>
                <img
                  src={App1}
                  alt='Download App'
                  className='h-full bg-white object-cover p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <img src={App2} alt='Download App' className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]' />
                <img src={App3} alt='Download App' className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]' />
                <img src={App4} alt='Download App' className='bg-white p-2 [box-shadow:0_1px_1px_rgba(0,_0,_0,_0.2)]' />
              </div>
            </div>
          </div>
        </div>

        {/* Row item 02 */}
        <div className='flex justify-between pt-[35px] text-[1.4rem] text-[#0000008a]'>
          {/* Column item 01 */}
          <span>© 2024 Shopee. Tất cả các quyền được bảo lưu.</span>
          <div>
            <span>Quốc gia & Khu vực:</span>
            <span className='border-r border-solid border-r-[#0000008a] px-2'>Singapore</span>
            <span className='border-r border-solid border-r-[#0000008a] px-2'>Indonesia</span>
            <span className='border-r border-solid border-r-[#0000008a] px-2'>Thái Lan</span>
            <span className='border-r border-solid border-r-[#0000008a] px-2'>Malaysia</span>
            <span className='border-r border-solid border-r-[#0000008a] px-2'>Việt Nam</span>
            <span className='border-r border-solid border-r-[#0000008a] px-2'>Philippines</span>
            <span className='border-r border-solid border-r-[#0000008a] px-2'>Brazil</span>
            <span className='border-r border-solid border-r-[#0000008a] px-2'>México</span>
            <span className='border-r border-solid border-r-[#0000008a] px-2'>Colombia</span>
            <span className='border-r border-solid border-r-[#0000008a] px-2'>Chile</span>
            <span className='pl-2'>Đài Loan</span>
          </div>
        </div>

        {/* Row item 03 */}
        <div className='mt-20 flex justify-center text-[1.1rem] uppercase text-[#0000008a]'>
          <span className='border-r border-solid border-r-[#00000017] px-7'>CHÍNH SÁCH BẢO MẬT</span>
          <span className='border-r border-solid border-r-[#00000017] px-7'>QUY CHẾ HOẠT ĐỘNG</span>
          <span className='border-r border-solid border-r-[#00000017] px-7'>CHÍNH SÁCH VẬN CHUYỂN</span>
          <span className='pl-7'>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</span>
        </div>

        {/* Row item 04 */}
        <div className='mt-10 text-center text-[1.1rem] text-[#000000a6]'>
          <p>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành
            phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </p>
          <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</p>
          <p>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
          <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
        </div>
      </div>
    </footer>
  )
}
