import Link from "next/link";

const NavBar  = () => (
  <nav className="group fixed top-0 left-0 h-screen w-8 hover:w-auto px-6 bg-transparent flex flex-col justify-center">
    <div className="flex-col items-center group-hover:items-start hidden group-hover:flex">
      <Link href="/" className="text-white py-4">About Me</Link>
      {/* <Link href="/projects" className="text-white py-4">Projects</Link> */}
      <Link href="/contact" className="text-white py-4">Contact</Link>
    </div>
  </nav>
);

export default NavBar;