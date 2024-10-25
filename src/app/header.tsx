export default function Header() {
    return (
        <header className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold"><a href="/">Hookers Sports Cards</a></h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-yellow-500">Home</a></li>
              <li><a href="#" className="hover:text-yellow-500">Products</a></li>
              <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
              <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="/newsletter" className="hover:text-yellow-500">Newsletter</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}