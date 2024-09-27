import Link from "next/link";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-slate-800  bg-opacity-100">
      <div className="container flex items-center justify-between py-4 mx-auto space-x-8">
        <Link href={"/"} className="text-xl font-bold text-white ">PortFolio</Link>
        
        <div className="flex space-x-4 md:p-0 ">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-white active:text-xl"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-white active:text-xl"
          >
            My Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-white active:text-xl"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
