export function Navbar() {
  return (
    <nav className="p-4 bg-black text-white border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo y enlaces a la izquierda */}
        <div className="flex space-x-4 items-center">
          <div className="flex items-center space-x-2 text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
              />
            </svg>
            <p>ComicVerse</p>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#home"
                className="text-white font-semibold hover:text-gray-400"
              >
                Comics
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white font-semibold hover:text-gray-400"
              >
                New Featured
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white font-semibold hover:text-gray-400"
              >
                Suscribe
              </a>
            </li>
          </ul>
        </div>

        {/* Input de búsqueda, icono de usuario y carrito a la derecha */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              className="p-2 pl-10 rounded-2xl bg-black border border-white/45 text-white placeholder-gray-400"
              placeholder="Search..."
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button className="text-white hover:text-gray-400 cursor-pointer bg-neutral-800 p-2 rounded">
            {/* Icono de usuario */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
          <button className="text-white hover:text-gray-400 cursor-pointer bg-neutral-800 p-2 rounded">
            {/* Icono de carrito */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
