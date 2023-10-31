import Image from 'next/image'

export default function MyComponent() {
  return (
    <div className="relative rounded-fill h-32 w-32 mx-auto">
      <Image
        src="/8EED7209-E75A-45E4-9007-C1A891918B9B_1_105_c.jpeg" // Path is relative to the `public` directory
        alt=""
        width={32}  // set width
        height={32}  // and height
      />
    </div>
  )
}