
export type Product = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export type ProductLean = Pick<Product, 'id' | 'title' | 'price' | 'image'>
export type ProductDetailed = Pick<Product, 'id' | 'title' | 'price' | 'image' | 'description'>
