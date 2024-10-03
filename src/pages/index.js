import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
        <title>Neha's Portfolio | Web Developer</title>
        <meta name="description" content="Explore the portfolio of [Your Name], a full-stack web developer skilled in JavaScript, React, Node.js, and MongoDB. View real-world projects, code samples, and case studies that demonstrate expertise in building scalable web applications. Contact me for web development or consulting opportunities."
 />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Your Website Title" />
        <meta property="og:description" content="This is the description of your website." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
      </Head>
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
    </>
  )
}
