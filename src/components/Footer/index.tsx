import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='mt-[50px]'>
      <div className='container'>
        <div className='grid grid-cols-5'>
          {/* Column item 1 */}
          <div>
            <p className='font-bold text-[1.2rem] uppercase'>CHĂM SÓC KHÁCH HÀNG</p>
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
            <p className='font-bold text-[1.2rem] uppercase'>VỀ SHOPEE</p>
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
          <div>
            <p className='font-bold text-[1.2rem] uppercase'>THANH TOÁN</p>
            <ul className='mt-5 flex flex-col gap-3 text-[rgba(0,0,0,.65)] text-[1.2rem]'>
              <li>
                <Link to='#!'>
                  <img src='' alt='Payment' />
                </Link>
              </li>
              <li>
                <Link to='#!'>
                  <img src='' alt='Payment' />
                </Link>
              </li>
              <li>
                <Link to='#!'>
                  <img src='' alt='Payment' />
                </Link>
              </li>
              <li>
                <Link to='#!'>
                  <img src='' alt='Payment' />
                </Link>
              </li>
              <li>
                <Link to='#!'>
                  <img src='' alt='Payment' />
                </Link>
              </li>
              <li>
                <Link to='#!'>
                  <img src='' alt='Payment' />
                </Link>
              </li>
              <li>
                <Link to='#!'>
                  <img src='' alt='Payment' />
                </Link>
              </li>
              <li>
                <Link to='#!'>
                  <img src='' alt='Payment' />
                </Link>
              </li>
              <li>
                <Link to='#!'>
                  <img src='' alt='Payment' />
                </Link>
              </li>
              <li>
                <Link to='#!'>
                  <img src='' alt='Payment' />
                </Link>
              </li>
              <li>
                <Link to='#!'>
                  <img src='' alt='Payment' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
