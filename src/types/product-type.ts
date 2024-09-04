export type ProductResponse = {
    id: string
    code: string
    name: string
    price: number
    description: string
    imageUrl: string
    averageRating: number
}

export type AllProductResponse = Array<AllProductResponse>