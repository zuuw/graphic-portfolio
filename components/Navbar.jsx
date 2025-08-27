
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-pastelGreen px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Cody McLeod</h1>
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
