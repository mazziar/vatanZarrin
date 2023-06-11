import Image from "next/image"

const ImageCustom = () => {
    return <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={100}
        priority
    />
} 
export default ImageCustom