import { FC } from "react"
import Image from "next/image"
import type { ProductDetailed } from '@/schemas/product'
import Link from 'next/link'

type Props = {
    product: ProductDetailed
}

const ProductCard: FC<Props> = ({ product }) => {
    return <div className="flex mb-32 grid text-center xs:grid-cols-2 lg:text-left" >

        <div className="flex h-full w-full rounded-2xl bg-gray-100  p-4"  >
            <div className="p-5 flex justify-center align-centerbg-white bg-white rounded-2xl w-40">
                <Image
                    src={`${product.image}`}
                    alt={product.title.split(' ')[0]}
                    width={100}
                    height={100}
                    priority
                />
            </div>
            <div className="w-full grid content-between px-5">
                <div>
                    <p className="mt-1">
                        {product.title}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600">
                        {'price:'}
                    </p>
                    <p className="text-green-600">
                        {product.price} {'$'}
                    </p>
                </div>
            </div>
        </div>
        <p className="mt-5">
            {product.description}
        </p>
    </div>
}
export default ProductCard