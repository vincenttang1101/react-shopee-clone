import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import { TfiMenuAlt } from 'react-icons/tfi'
import { RxTriangleRight } from 'react-icons/rx'
import { LiaFilterSolid } from 'react-icons/lia'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { Button, InputField } from '@/components/common'
import { Category } from '@/types/category.type'
import { ProductsConfig } from '@/types/product.type'
import { PathConstant } from '@/constants/path.constant'
import { PriceRangeSchema, RuleUtil } from '@/utils/rules.util'
import { NoUndefinedField } from '@/utils'
import { ObjectSchema } from 'yup'
import StarRater from '@/components/pages/product/StarRater'

type Props = {
  queryParams: ProductsConfig
  categories: Category[]
}

type FormData = NoUndefinedField<PriceRangeSchema>
export default function AsideFilter({ queryParams, categories }: Props) {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(RuleUtil.priceRangeSchema as ObjectSchema<FormData>)
  })
  const navigate = useNavigate()

  const { category: categoryParam } = queryParams

  const onSubmit: SubmitHandler<FormData> = (data) => {
    navigate({
      pathname: PathConstant.home,
      search: createSearchParams({
        ...queryParams,
        price_min: data.price_min,
        price_max: data.price_max
      }).toString()
    })
  }

  return (
    <aside>
      <div className='flex flex-col gap-y-14'>
        <section className='flex flex-col gap-y-5'>
          <div
            className={clsx(`flex items-center gap-x-3`, {
              'text-primaryColor': !categoryParam
            })}
          >
            <TfiMenuAlt className='h-5 w-5' />
            <h2 className='text-lg font-semibold capitalize'>Tất cả danh mục</h2>
          </div>

          <div className='h-[1px] bg-gray-300' />

          <ul className='ml-4 flex flex-col gap-y-5 capitalize'>
            {categories.map((category) => (
              <li key={category._id}>
                <Link
                  to={{
                    pathname: PathConstant.home,
                    search: createSearchParams({
                      ...queryParams,
                      category: category._id
                    }).toString()
                  }}
                  className={clsx('relative flex items-center font-bold', {
                    'text-primaryColor': categoryParam === category._id
                  })}
                >
                  {categoryParam === category._id && <RxTriangleRight className='absolute -left-6' />}
                  <span>{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className='flex flex-col gap-y-5'>
          <div className='flex items-center gap-x-2'>
            <LiaFilterSolid className='h-6 w-6' />
            <h2 className='text-lg font-semibold capitalize'>Bộ lọc tìm kiếm</h2>
          </div>

          <div className='h-[1px] bg-gray-300' />

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2'>
            <h3 className='capitalize'>Khoảng giá</h3>
            <div className='flex items-center justify-between gap-x-2'>
              <InputField
                className='h-8 text-sm focus:border-gray-300'
                placeholder='₫ TỪ'
                name='price_min'
                register={register}
                type='number'
                isErrorMessage={false}
                onChange={(event) => {
                  register('price_min').onChange(event)
                  trigger('price_max')
                }}
              />
              <div className='h-[1px] w-5 bg-gray-400' />
              <InputField
                className='h-8 text-sm focus:border-gray-300'
                placeholder='₫ ĐẾN'
                register={register}
                name='price_max'
                type='number'
                isErrorMessage={false}
                onChange={(event) => {
                  register('price_max').onChange(event)
                  trigger('price_min')
                }}
              />
            </div>
            <p className='min-h-6 text-center font-medium text-red-500'>{errors.price_min?.message}</p>
            <Button className='rounded-sm bg-primaryColor py-1 text-center uppercase text-slate-100 hover:opacity-90'>
              Áp dụng
            </Button>
          </form>

          <div className='h-[1px] bg-gray-300' />

          <StarRater />

          <div className='h-[1px] bg-gray-300' />

          <Button className='rounded-sm bg-primaryColor py-1 text-center uppercase text-slate-100 hover:opacity-90'>
            Xóa tất cả
          </Button>
        </section>
      </div>
    </aside>
  )
}
