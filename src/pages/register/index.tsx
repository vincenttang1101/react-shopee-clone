import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import styled from 'styled-components'
import { Google, Facebook } from '@/assets/icons'
import { getRules } from '@/utils'

interface IFormInput {
  email: string
  password: string
  confirm_password: string
}

const Input = styled.input<{ $hasError?: string }>`
  width: 100%;
  border-radius: 2px;
  font-size: 1.5rem;
  padding: 12px;

  border: 1px solid ${(props) => (props.$hasError ? '#ff424f' : '#00000024')};
  background: ${(props) => (props.$hasError ? '#fff6f7' : '#fff')};
  box-shadow: ${(props) =>
    props.$hasError ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : 'none'};

  &:focus {
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    outline: none;
    border: 1px solid ${(props) => (props.$hasError ? '#ff424f' : 'rgba(0, 0, 0, 0.5)')};
  }
  &::placeholder {
    padding-inline: 3px;
  }
`

export default function Register() {
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
          {/* Register form */}
          <div className='ml-[50%] h-full xs:hidden lg:block'></div>
          <form
            className='flex w-[400px] flex-col rounded-[4px] bg-[#fff] px-12 py-10 shadow-md'
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
            noValidate
          >
            <p className='text-[2rem]'>Đăng ký</p>
            {/* Input form */}
            <div className='mt-8'>
              <div className='mt-4'>
                <Input
                  type='email'
                  placeholder='Email'
                  $hasError={errors.email?.message}
                  {...register('email', rules.email)}
                />
                <p className='min-h-[2rem] text-[1.3rem] text-[#ff424f]'> {errors.email?.message}</p>
              </div>

              <div className='mt-4'>
                <Input
                  type='password'
                  placeholder='Password'
                  $hasError={errors.password?.message}
                  {...register('password', rules.password)}
                />
                <p className='min-h-[2rem] text-[1.3rem] text-[#ff424f]'> {errors.password?.message}</p>
              </div>

              <div className='mt-4'>
                <Input
                  type='password'
                  placeholder='Xác nhận password'
                  $hasError={errors.confirm_password?.message}
                  {...register('confirm_password', rules.confirm_password)}
                />
                <p className='min-h-[2rem] text-[1.3rem] text-[#ff424f]'> {errors.confirm_password?.message}</p>
              </div>
            </div>

            <button
              className='mt-4 rounded-[2px] bg-primaryColor py-[11px] text-[1.4rem] uppercase text-[#fff] hover:opacity-90'
              type='submit'
            >
              Đăng ký
            </button>
            <div
              className='mt-10 flex items-center justify-between gap-[15px] text-[1.3rem] uppercase text-[#ccc]
                        before:inline-block before:h-[1px] before:w-full before:bg-[#dbdbdb] before:content-[""]
                        after:inline-block after:h-[1px] after:w-full after:bg-[#dbdbdb] after:content-[""]'
            >
              Hoặc
            </div>

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
