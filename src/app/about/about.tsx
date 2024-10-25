import Header from "../header";

export default function About() {
    return (
      <div>
        {/* Header */}
        <Header />
  
        {/* Main Content */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">About Trading Card Haven</h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Welcome to Trading Card Haven, your one-stop shop for all things collectible cards. From sports cards to
              trading card games like Pokémon and Magic: The Gathering, we offer a wide variety of rare and sought-after
              cards. Our goal is to help collectors and fans find the cards they love while building a community of
              enthusiasts.
            </p>
            {/* <img
              src="/about-us.jpg"
              alt="Trading Card Store"
              className="w-full max-w-4xl mx-auto mb-8 rounded-lg shadow-lg"
            /> */}
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Trading Card Haven was founded out of a passion for collecting. Since childhood, we’ve been fascinated by the
              stories behind each card, the thrill of discovery, and the joy of completing a collection. Over the years, we
              transformed this passion into a thriving store, dedicated to helping other collectors find their next treasure.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
            <p className="text-lg leading-8 text-gray-600">
              At Trading Card Haven, we understand the importance of trust, quality, and community. We are dedicated to
              providing the best customer experience, offering authentic cards, fast shipping, and personalized support for
              collectors of all levels. Join us in the journey of discovering rare gems and building lifelong collections.
            </p>
          </div>
        </section>
  
        {/* Our Values Section */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-4 bg-white shadow-md rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Authenticity</h4>
                <p className="text-gray-600">
                  We only deal in genuine, certified cards, ensuring our customers can buy with confidence.
                </p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Passion</h4>
                <p className="text-gray-600">
                  Were collectors at heart and share your passion for the trading card world. Your interests are our priority.
                </p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Community</h4>
                <p className="text-gray-600">
                  We believe in building a vibrant community of card enthusiasts, collectors, and traders. Lets grow together!
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8">Meet the Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-4 text-center">
                {/* <img
                  src="/team-member1.jpg"
                  alt="Team Member 1"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                /> */}
                <h4 className="text-xl font-semibold">John Doe</h4>
                <p className="text-gray-600">Founder & Collector-in-Chief</p>
              </div>
              <div className="p-4 text-center">
                {/* <img
                  src="/team-member2.jpg"
                  alt="Team Member 2"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                /> */}
                <h4 className="text-xl font-semibold">Jane Smith</h4>
                <p className="text-gray-600">Operations Manager</p>
              </div>
              <div className="p-4 text-center">
                {/* <img
                  src="/team-member3.jpg"
                  alt="Team Member 3"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                /> */}
                <h4 className="text-xl font-semibold">Michael Lee</h4>
                <p className="text-gray-600">Customer Support Specialist</p>
              </div>
            </div>
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