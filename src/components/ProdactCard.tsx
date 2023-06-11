import { FC } from "react"
import Image from "next/image"
import type { ProductLean } from '@/schemas/product'
import Link from 'next/link'

type Props = {
    product: ProductLean
}

const ProductCard: FC<Props> = ({ product }) => {
    return <div className="flex px-1 mb-1 h-500 grid text-center  lg:text-left" >
        <Link
            className="group  rounded-2xl h-100 border border-transparent p-4 
            transition-colors hover:border-pink-300 hover:bg-gray-100 hover:dark:border-neutral-700 
            hover:dark:bg-neutral-800/30"
            href={`/commodity/${product.id}`}>
            <div className="flex h-full w-full"  >
                <div className="p-3 flex  justify-center align-centerbg-white bg-white rounded-2xl w-20">
                    <div className="flex align-center">
                    <Image
                        src={`${product.image}`}
                        alt={product.title.split(' ')[0]}
                        className="align-center my-auto"
                        width={100}
                        height={100}
                        priority
                    />
                    </div>
                </div>
                <div className="w-full grid content-between px-5">
                    <div>
                        <p >
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
        </Link>
    </div>
}
export default ProductCard