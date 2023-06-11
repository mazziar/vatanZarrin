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

const Home = async ({ params: { category, sortByPrice }, }: { params: { category: string, sortByPrice: string } }) => {

  const productData = getProducts(category)
  const categoryData = getCategory()
  const isACS: number = sortByPrice == 'acs' ? -1 : 1

  const [products, categries] = await Promise.all([
    productData,
    categoryData
  ]);

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="
       
       
      place-items-center 
      efore:absolute 
      before:h-[300px] 
      before:w-[480px] 
      before:-translate-x-1/2 
      before:rounded-full 
      before:bg-gradient-radial 
      before:from-white 
      before:to-transparent 
      before:blur-2xl 
      before:content-[''] 
      after:absolute 
      after:-z-20 
      after:h-[180px] 
      after:w-[240px] 
      after:translate-x-1/3 
      after:bg-gradient-conic 
      after:from-sky-200 
      after:via-blue-200 
      after:blur-2xl 
      after:content-[''] 
      before:dark:bg-gradient-to-br 
      before:dark:from-transparent 
      before:dark:to-blue-700 
      before:dark:opacity-10 
      after:dark:from-sky-900 
      after:dark:via-[#0141ff] 
      after:dark:opacity-40 
      before:lg:h-[360px]">

        <div className="mb-12 grid text-center align-center lg:mb-0 md:grid-cols-5 lg:text-left">
        <p className=' align-center text-gray-600	'> filter by category: <br/>
        {category != 'all' ? <p className='text-xs text-pink-800'> click again to remove the filter</p> :<></>}
        </p>
        
          {categries.map((c: string) => (
            <Link
              className={`group rounded-lg 
              px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 
              ${decodeURI(category) == c ? `text-pink-700 border-pink-500` : ''}
              hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`}
              href={decodeURI(category) !== c ? `/${c}` : '/all'}>
              {c}
            </Link>)
          )}

        </div>
        <div className="mb-12 grid text-center justify-center align-center lg:mb-0 md:grid-cols-5 lg:text-left">
        <p className='align-center text-gray-600'> sort by price:</p>
          {['acs', 'decs'].map((s: string) => (
            <Link
              className={`group rounded-lg border border-transparent px-5 
              py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 
              ${decodeURI(sortByPrice) == s ? `text-pink-700 border-pink-500` : ''} 
              hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`}
              href={s != sortByPrice ? `/${decodeURI(category)}${'/' + s}` : `/${decodeURI(category)}`}>
              {s}
            </Link>)
          )}
        </div>

        <div className='flex mb-32 grid justify-between lg:mb-0 md:grid-cols-2 lg:grid-cols-3 lg:text-left'>
          
          {products.sort((a: Product, b: Product) =>
            (a.price > b.price) ?
              isACS :
              ((b.price > a.price) ?
                isACS * (-1) :
                0
              )).map((p: Product) => (<ProductCard product={p} />))}
        </div>

      </div>
    </main>
  )
}
export default Home