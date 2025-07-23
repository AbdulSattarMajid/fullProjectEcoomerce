import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Explore from '../Components/Explore'
import Footer from '../Components/Footer'
import Testinomials from '../Components/Testinomials'
import MoreCategories from '../Components/moreCategories'
import WhyShopUs from '../Components/WhyshopUs'

function Home() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <section className="h-screen">
          <HeroSection />
        </section>

        <section>
          <Explore />
        </section>

        <section>
          <MoreCategories/>
          <Testinomials />
          <WhyShopUs />
          <Footer />
        </section>
      </div>
    </>
  )
}

export default Home
