import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import TopProducts from "./Components/TopProducts"


function App() {

  return (
    <>
      <Nav />
      <Hero />
      <TopProducts titleFound={true} />
      <Footer />
    </>
  )
}

export default App;
