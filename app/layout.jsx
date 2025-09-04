
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: "Cody McLeod Portfolio",
  description: "Pastel portfolio site",
  icon: "zuuw-logo-04.svg"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
