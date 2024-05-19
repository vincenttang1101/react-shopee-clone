import { useForm } from 'react-hook-form'
import { createSearchParams, useNavigate } from 'react-router-dom'

import useQueryConfig from './useQueryConfig'
import omit from 'lodash/omit'

import PathConstant from '@/constants/path.constant'

export default function useSearchProducts() {
  const queryConfig = useQueryConfig()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: ''
    }
  })
  const navigate = useNavigate()

  const onSubmitSearch = handleSubmit((data) => {
    const config = queryConfig.order
      ? omit(
          {
            ...queryConfig,
            name: data.name
          },
          ['order', 'sort_by']
        )
      : {
          ...queryConfig,
          name: data.name
        }
    navigate({
      pathname: PathConstant.home,
      search: createSearchParams(config).toString()
    })
  })
  return { onSubmitSearch, register }
}
