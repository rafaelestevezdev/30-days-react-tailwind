export function Comics(){
  return(
    <section className="bg-black min-h-[50vh]">
      <div className="container mx-auto py-12 text-white max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 ml-3">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Cómic 1 */}
          <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://everythingcomics.ca/cdn/shop/files/75960620200305431.jpg?v=1722003295"
              alt="Comic 1"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-white">The Amazing Spider-Man #50</h3>
              <p className="text-xl font-semibold text-white/70">$19.99</p>
            </div>
          </div>
          {/* Cómic 2 */}
          <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://images8.alphacoders.com/885/thumb-1920-885380.jpg"
              alt="Comic 2"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-white">The Punisher</h3>
              <p className="text-xl font-semibold text-white/70">$24.99</p>
            </div>
          </div>
          {/* Cómic 3 */}
          <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://bleedingcool.com/wp-content/uploads/2025/03/Marvel-Contest-of-Champions-Dark-Phoenix-Saga-2000x1125.jpg"
              alt="Comic 3"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-white">X-Men: Dark Phoenix Saga</h3>
              <p className="text-xl font-semibold text-white/70">$22.99</p>
            </div>
          </div>
          {/* Cómic 4 */}
          <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://images6.alphacoders.com/405/405923.jpg"
              alt="Comic 4"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-white">The Invincible Iron Man #1</h3>
              <p className="text-xl font-semibold text-white/70">$18.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}