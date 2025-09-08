
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white px-6 py-4 flex justify-between items-center">
      <Link href="/">
      <img src='z-z.svg' alt='' className='w-[100-px] h-[100px] sm:{w-[50px] h-[50px]}'/>
      </Link>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
