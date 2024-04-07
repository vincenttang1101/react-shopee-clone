export type Product = {
  _id: string
  images: string[]
  price: number
  rating: number
  price_before_discount: number
  quantity: number
  sold: number
  view: number
  name: string
  category: {
    _id: string
    name: string
  }
  image: string
  createdAt: string
  updatedAt: string
}

export type Products = {
  products: Product[]
  pagination: {
    page: number
    limit: number
    page_size: number
  }
}

export type ProductsConfig = {
  page: string
  limit: string
  sort_by: 'createdAt' | 'view' | 'sold' | 'price'
  order: 'asc' | 'desc'
  exclude: string
  rating_filter: string
  price_max: string
  price_min: string
  name: string
  category: string
}
