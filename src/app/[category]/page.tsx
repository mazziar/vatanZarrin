import type { Product } from '@/schemas/product'
import Link from 'next/link'
import ProductCard from '@/components/ProdactCard'


const getProducts = async (category: string) => {
  const url = category !== 'all' ?
    `https://fakestoreapi.com/products/category/${category}` :
    'https://fakestoreapi.com/products';
  const res = await fetch(url, { next: { revalidate: 10 } })
  return res.json()
}

const getCategory = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  return res.json()
}

const Home = async ({ params: { category }, }: { params: { category: string } }) => {

  const productData = getProducts(category)
  const categoryData = getCategory()

  const [products, categries] = await Promise.all([
    productData,
    categoryData
  ]);

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div >

        <div className="mb-12 grid text-center lg:mb-0 md:grid-cols-5 lg:text-left">
          <p className=' align-center text-gray-600	'> filter by category: <br/>
          {category != 'all' ? <p className='text-xs text-pink-800'> click again to remove the filter</p> :<></>}

          </p>
          {categries.map((c: string) => (
            <Link
              className={`group rounded-lg border border-transparent px-5 py-4
               transition-colors 
               ${decodeURI(category) == c ? `text-pink-700 border-pink-500` : ''}
              hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 
              hover:dark:bg-neutral-800/30`}
              href={decodeURI(category) !== c ? `/${c}` : '/all'}>
              {c}
            </Link>)
          )}
        </div>
        <div className="mb-12 grid text-center lg:mb-0 md:grid-cols-5 lg:text-left">
          <p className='align-center text-gray-600'> sort by price:</p>
          {['acs', 'decs'].map((s: string) => (
            <Link
              className="group rounded-lg h-100 border border-transparent 
              px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 
              hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              href={`/${category}${'/' + s}`}>
              {s}
            </Link>)
          )}

        </div>

        <div className='mb-32 grid text-center lg:mb-0 md:grid-cols-2 lg:grid-cols-3 lg:text-left'>
          {products.map((p: Product) => (<ProductCard product={p} />))}
        </div>

      </div>
    </main>
  )
}
export default Home