import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]" >
      <div className="px-12 py-4 mx-auto conntiner"  id="home" >
      <HeroSection/>
      </div>
       <div id="about">
        <About/>
       </div>
       <div id="projects">
        <Projects/>
       </div>
       <div id="contact">
        <Email/>
       </div>
       <Footer/>
    </main>
  )
}
