export function Hero() {
  return (
    <section className="relative bg-black min-h-[70vh]">
      <img
        src="https://wallpaperset.com/w/full/4/0/c/158940.jpg"
        alt="Marvel Comics Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] text-white">
        <div className="text-center p-8 rounded-lg max-w-md">
          <h1 className="text-4xl font-bold mb-4">Explora el Comic Verse</h1>
          <p className="text-lg mb-6">Descubre cómics épicos y héroes legendarios.</p>
          <a href="#comics" className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold">
            Ver Cómics
          </a>
        </div>
      </div>
    </section>
  );
}