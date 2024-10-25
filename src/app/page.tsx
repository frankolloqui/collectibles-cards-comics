import Header from "./header";
import cards from '../../public/cards.jpg'

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-hero-pattern bg-cover bg-center h-[500px] flex items-center justify-center text-white " style={{backgroundImage: `url(${cards.src})`,}}>
        {/* <Image src={cards} alt="Hero Image" width={1000} height={1000} /> */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">Find Your Next Rare Trading Card</h2>
          <p className="mt-4 text-xl">Explore our wide selection of sports, collectible, and game cards.</p>
          <a href="#" className="mt-8 inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full">
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card */}
            <div className="border p-4 text-center">
              {/* <img src="/card1.jpg" alt="Card 1" className="w-full h-48 object-cover" /> */}
              <h4 className="mt-4 font-semibold">Rare Sports Card</h4>
              <p className="text-gray-600">$199.99</p>
            </div>
            <div className="border p-4 text-center">
              {/* <img src="/card2.jpg" alt="Card 2" className="w-full h-48 object-cover" /> */}
              <h4 className="mt-4 font-semibold">Pokemon Card Collection</h4>
              <p className="text-gray-600">$89.99</p>
            </div>
            <div className="border p-4 text-center">
              {/* <img src="/card3.jpg" alt="Card 3" className="w-full h-48 object-cover" /> */}
              <h4 className="mt-4 font-semibold">Magic: The Gathering Set</h4>
              <p className="text-gray-600">$129.99</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Browse by Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 text-center bg-white shadow-md">
              <h4 className="font-semibold">Sports Cards</h4>
            </div>
            <div className="p-4 text-center bg-white shadow-md">
              <h4 className="font-semibold">Pokemon Cards</h4>
            </div>
            <div className="p-4 text-center bg-white shadow-md">
              <h4 className="font-semibold">Magic: The Gathering</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">What Our Customers Say</h3>
          <p className="italic">Amazing selection! I found the rarest card Ive been hunting for!</p>
          <p className="mt-4 italic">Fast shipping and great customer service.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Trading Card Haven. All Rights Reserved.</p>
          <p className="mt-2">Follow us on <a href="#" className="underline">Instagram</a> | <a href="#" className="underline">Facebook</a></p>
        </div>
      </footer>
    </div>
  );
}