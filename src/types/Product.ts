export interface ObjectType<T> {
  [key: string]: T
}

export default interface Product {
  id: number | string
  category: string
  title: string
  description: string
  amount: number
  remainedAmount: number
  Date: string | number
  size: string | number
  price: number
  published: boolean
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  warrantyInformation: string
  shippingInformation: string
  reviews: [
    {
      rating: number
      comment: string
      date: string
      reviewerName: string
      reviewerEmail: string
    }
  ]
  availabilityStatus: string
  minimumOrderQuantity: number
  returnPolicy: string
  meta: {
    createdAt: string | number
    updatedAt: string | number
    barcode: string
    qrCode: string
  }
  images: string[]
  thumbnail: string
}
