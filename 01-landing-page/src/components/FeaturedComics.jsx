export function FeaturedComics(){
  return(
    <section className="bg-black min-h-[50vh]">
      <div className="container mx-auto py-12 text-white max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 ml-3">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Cómic 1 */}
          <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9798886639438/black-panther-the-illustrated-history-9798886639438_hr.jpg"
              alt="Comic 1"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-white">Black Panther: The Illustrated History</h3>
              <p className="text-xl font-semibold text-white/70">$19.99</p>
            </div>
          </div>
          {/* Cómic 2 */}
          <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://waltscomicshop.com/cdn/shop/files/thor-modern-era-epic-collection-vol-1-reborn-from-ragnarok-tp-654263.jpg?v=1722193358"
              alt="Comic 2"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-white">Thor: Modern Era Epic Collection Vol. 1</h3>
              <p className="text-xl font-semibold text-white/70">$24.99</p>
            </div>
          </div>
          {/* Cómic 3 */}
          <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://www.universomarvel.com/wp-content/uploads/2018/01/CAPTAIN_AMERICA_700_VAR_CVR_JIMLEE.jpg"
              alt="Comic 3"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-white">Captain America #700</h3>
              <p className="text-xl font-semibold text-white/70">$22.99</p>
            </div>
          </div>
          {/* Cómic 4 */}
          <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://d11unjture0ske.cloudfront.net/comic_cover.7055ecc6-237c-4c17-a69d-25bbde405e5a.2acf6e55-f67c-4035-926c-7f169c60249f.full.jpeg"
              alt="Comic 4"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-white">The Incredible Hulk #1</h3>
              <p className="text-xl font-semibold text-white/70">$18.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}