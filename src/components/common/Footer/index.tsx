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
  Carrier11
} from '@/assets/images'

export default function Footer() {
  return (
    <footer className='bg-gray-50 py-14 lg:block'>
      {/* Container */}
      <div className='container'>
        {/* Row item 01 */}
        <div className='grid grid-cols-4'>
          {/* Column item 01 */}
          <div>
            <p className='mb-4 text-sm font-bold uppercase'>Chăm sóc khách hàng</p>
            <ul className='flex flex-col gap-y-3 text-sm text-gray-700'>
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
            <p className='mb-4 text-sm font-bold uppercase'>Về Shopee</p>
            <ul className='flex flex-col gap-y-3 text-sm text-gray-700'>
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
              <p className='mb-4 text-sm font-bold uppercase'>Thanh toán</p>
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
            <p className='mb-4 text-sm font-bold uppercase'>Theo dõi chúng tôi trên</p>
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
        </div>

        <div className='my-10 h-[1px] bg-gray-300' />

        {/* Row item 02 */}
        <div className='flex justify-between text-sm text-gray-500'>
          <div>© 2024 Shopee. Tất cả các quyền được bảo lưu.</div>
          <div className='flex-shrink-0'>
            <span>Quốc gia & Khu vực:</span>
            <span className='border-r border-solid border-r-slate-600 px-2'>Singapore</span>
            <span className='border-r border-solid border-r-slate-600 px-2'>Indonesia</span>
            <span className='border-r border-solid border-r-slate-600 px-2'>Thái Lan</span>
            <span className='border-r border-solid border-r-slate-600 px-2'>Malaysia</span>
            <span className='border-r border-solid border-r-slate-600 px-2'>Việt Nam</span>
            <span className='border-r border-solid border-r-slate-600 px-2'>Philippines</span>
            <span className='border-r border-solid border-r-slate-600 px-2'>Brazil</span>
            <span className='border-r border-solid border-r-slate-600 px-2'>México</span>
            <span className='border-r border-solid border-r-slate-600 px-2'>Colombia</span>
            <span className='border-r border-solid border-r-slate-600 px-2'>Chile</span>
            <span className='pl-2'>Đài Loan</span>
          </div>
        </div>

        {/* Row item 03 */}
        <div className='mt-14 flex justify-center text-sm uppercase text-gray-500'>
          <span className='border-r border-solid border-r-slate-600 px-7'>Chính sách bảo mật</span>
          <span className='border-r border-solid border-r-slate-600 px-7'>Quy chế hoạt động</span>
          <span className='border-r border-solid border-r-slate-600 px-7'>Chính sách vận chuyển</span>
          <span className='pl-7'>Chính sách trả hàng và hoàn tiền</span>
        </div>

        {/* Row item 04 */}
        <div className='mt-10 text-center text-sm text-gray-500'>
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
