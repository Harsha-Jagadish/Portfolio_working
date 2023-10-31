import Image from 'next/image'

export default function MyComponent() {
  return (
    <div className="relative rounded-fill h-32 w-32 mx-auto">
      <Image
        src="/1627366534091.jpg" // Path is relative to the `public` directory
        alt=""
        width={32}  // set width
        height={32}  // and height
      />
    </div>
  )
}
