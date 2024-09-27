import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return ( 
    <div className="scroll-smooth">
         <Navbar/>
        <Component {...pageProps} />
    </div>

  )

}
