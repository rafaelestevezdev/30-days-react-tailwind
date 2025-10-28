import { Navbar } from "./components/Navbar.jsx"
import { Hero } from "./components/Hero.jsx"
import { Comics } from "./components/Comics.jsx"
import { FeaturedComics } from "./components/FeaturedComics.jsx"
import { Suscribe } from "./components/Suscribe.jsx"
import { Footer } from "./components/Footer.jsx"

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Comics />
      <FeaturedComics />
      <Suscribe />
      <Footer />
    </main>
  )
}

export default App
