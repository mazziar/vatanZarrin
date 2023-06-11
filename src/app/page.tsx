import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          href={'/all'}>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            start{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>

          </p>
        </Link>

        product list

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-end bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          maziar asadi kordshooli
        </div>
      </div>
      <div  className='dir-rtl'>
تجربیاتم در حین انجام پروژه
      </div>
      <div className='text-right	'>
    .سلام در مورد مدت زمانی که طول کشیید تا این پروژه رو انجام بدم <br/>
    راستش خیلی طول کشید; ۳, ۴ روز بعد کار ۲ ,۳ ساعت روش وقت میذاشتم. منطقی هم بود چون من چندسالی بود که نکست کار نکردم و این نکست ۱۳ 
    واقعا با اون چیزی که من کار کرده بودم خیلی فرق کرده بود.
    برای همین بیشتر وقتم صرف خوندن داکیومنت و آزمونو خطا شد
    در مورد تلویند هم با اینکه کار نکرده بودم ولی زود بهش عادت کردم و ازش خوشم اومد
     <br/>
خیلی کارها هم دوست داشتم انجام بدم ولی وقت نشد مثل هندل کردن ارور ها, استایل بهتر و اینکه دوست داشتم سرت کردن کالا ها بر اساس قیمت رو سمت کلاینت انجام بدم.
     <br/>
 در کل با اینکه عصر ها خسته از سر کار بر میگشتم, ولی حسابی از انجام پروژه و درگیری با چالشهای جدید لذت بردم
      </div>
    </main>
  )
}
