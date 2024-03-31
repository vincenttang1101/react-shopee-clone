import { useNavigate, useSearchParams } from 'react-router-dom'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { ProductsConfig } from '@/types/product.type'

type PaginationMui = {
  pageSize: number
}

export default function PaginationMui({ pageSize }: { pageSize: number }) {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const params: ProductsConfig = Object.fromEntries(searchParams)
  const page = Number(params.page) || 1

  const handleChangePage = (_: React.ChangeEvent<unknown>, pageNumber: number) => {
    navigate(`?page=${pageNumber}&pageSize=${pageSize}`)
  }

  return (
    <Stack spacing={2}>
      <Pagination count={pageSize} page={page} onChange={handleChangePage} />
    </Stack>
  )
}
