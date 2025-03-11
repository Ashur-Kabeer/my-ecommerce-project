import Link from 'next/link';

const BubbleCarousel = () => {
  return (
    <nav className="bg-indigo-600 p-4 shadow-md sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        
            {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-6">
          <Link href="/dresses" className="text-white hover:text-indigo-300">Dresses</Link>
          <Link href="/bags" className="text-white hover:text-indigo-300">Bags</Link>
          <Link href="/accessories" className="text-white hover:text-indigo-300">Accessories</Link>
          <Link href="/pants" className="text-white hover:text-indigo-300">Pants</Link>
          <Link href="/shoes" className="text-white hover:text-indigo-300">Shoes</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default BubbleCarousel;
