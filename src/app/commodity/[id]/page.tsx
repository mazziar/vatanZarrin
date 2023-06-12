import type { Product } from '@/schemas/product'
import Link from 'next/link'
import ProductDetail from '@/components/ProductDetail'


const getProduct = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { next: { revalidate: 10 } })
  return res.json()
}


const Home = async ({ params: { id,  }, }: { params: { id: string } }) => {

  const product:Product =await getProduct(id)

  return (

    <main className="flex min-h-screen flex-col items-center justify-between  p-4 md:p-14">
     
       
       

        <div className='mb-32 w-full grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left'>
        <ProductDetail product={product}  />
        </div>

     
    </main>
  )
}
export default Home