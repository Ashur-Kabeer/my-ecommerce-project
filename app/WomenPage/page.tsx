// pages/women.js
import Link from 'next/link';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BubbleCarousel from '../components/BuubleCarousel';

const WomenPage = () => {
  const products = [
    {
      id: 1,
      name: 'Elegant Dress',
      price: 'AED 49.99',
      image: '/images/elegant-dress.jpg',
    },
    {
      id: 2,
      name: 'Stylish Shoes',
      price: 'AED 29.99',
      image: '/images/stylish-shoes.jpg',
    },
    {
      id: 3,
      name: 'Classic Handbag',
      price: 'AED 39.99',
      image: '/images/classic-handbag.jpg',
    },
    {
      id: 4,
      name: 'Summer Blouse',
      price: 'AED 19.99',
      image: '/images/summer-blouse.jpg',
    },
    // Add more products as needed
  ];
  const addToCart = (item:any) => {
    let cart: any[] = [];
  
  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem('cart') || '[]'; // Default to '[]' if null
    cart = JSON.parse(storedCart);
  }
  
    const existingItemIndex = cart.findIndex((cartItem:any) => cartItem.id === item.id);
  
    if (existingItemIndex >= 0) {
      // Item already exists, increase the quantity
      cart[existingItemIndex].quantity += 1;
    } else {
      // Add new item to cart
      item.quantity = 1;
      cart.push(item);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <Header/>
      <Navbar/>
      <BubbleCarousel/>

    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/fashion-background.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-semibold">Women's Fashion Collection</h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Featured Products</h2>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
                  <p className="text-lg font-medium text-indigo-600 mt-2">{product.price}</p>
                  <Link href={`/product/${product.id}`}
                     className="block mt-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 py-2 rounded-md">View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default WomenPage;
