
import Header from './components/header'
import HeroSection from "./components/herosection";
function App() {
  return (
    <div className="min-h-screen bg-white">
     <Header/>
     <HeroSection />
      {/* Hero section aap khud add karein */}
      <main className="flex items-center justify-center h-screen text-gray-400 text-lg">
        Browse The Range
      </main>

     
    </div>
  )
}

export default App
