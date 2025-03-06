'use client'
import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const products = [
  {
    id: 1,
    name: "Dining Table",
    description: "7 piece Dining Table set with Metal Table .",
    price: "AED 799",
    image: "https://th.bing.com/th/id/OIP.kQiwudaQqlBYx2Tfd3LjQgHaFU?rs=1&pid=ImgDetMain", // Replace with actual image URLs
  },
  {
    id: 2,
    name: "3 Seater Couch",
    description: "Orange and Beige 3 seater Leather Sofa.",
    price: "AED 1,699",
    image: "https://images.all-free-download.com/images/graphiclarge/fashion_sofa_hd_picture_167714.jpg",
  },
  {
    id: 3,
    name: "Wooden Chair",
    description: "Nora Pink Velvet Dining Chairs.",
    price: "AED 259",
    image: "https://www.furnitureinfashion.net/images/nora-pink-velvet-dining-chairs-in-pair-1.jpg",
  },
  {
    id: 4,
    name: "Wall Shelf",
    description: "3 Tier Brown Zigzag Wooden Floating Wall Corner.",
    price: "AED 79",
    image: "https://media.diy.com/is/image/KingfisherDigital/livingandhome-3-tier-brown-zigzag-design-wooden-floating-wall-corner-shelf-bookcase~0735940279444_01c_MP?$MOB_PREV$&$width=768&$height=768",
  },
  {
    id: 5,
    name: "Chest Drawer",
    description: "2 + 2 Gray Wooden Drawer Chest.",
    price: "AED 589",
    image: "https://dreambeds.co.za/wp-content/uploads/2021/01/Grey-chest-of.-Drawers-for-sale-.png",
  },
    {
      id: 6,
      name: "Study Table",
      description: "Wooden Steel Brown Study Table.",
      price: "AED 550",
      image: "https://th.bing.com/th/id/OIP._Y_5HsxZtdp356oc_5jXFwHaHa?rs=1&pid=ImgDetMain", // Replace with actual image URLs
    },
    {
      id: 7,
      name: "Office Chairs",
      description: "White Leather Office Chair with Spinner Wheels .",
      price: "AED 300",
      image: "https://th.bing.com/th/id/R.5f93c9ef815604bd4805c83aa2d9252f?rik=Dth%2bi7CDp0V2RQ&pid=ImgRaw&r=0",
    },
    {
      id: 8,
      name: "Console Table",
      description: "Gold Console Table which makes your home looks elegant.",
      price: "AED 399",
      image: "https://th.bing.com/th/id/R.6ec66cdfbb169ecdea8a95d071433d5d?rik=zTl5Ph5XmgC%2fSg&pid=ImgRaw&r=0",
    },
    {
      id: 9,
      name: "Swing",
      description: "Super Saturday Yaheetech Rattan Swing Egg Chair Garden Patio Indoor.",
      price: "AED 599",
      image: "https://images-na.ssl-images-amazon.com/images/I/61hNeAszDFL._AC_SL1000_.jpg",
    },
    {
      id: 10,
      name: "Outdoor Furniture",
      description: "Luxury Garden Furniture | Dining Sets| Haslemere Garden Centre.",
      price: "AED 1799",
      image: "https://th.bing.com/th/id/OIP.3PGipEHLghJ6h97GJoOPDgHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 11,
      name: "Side Table",
      description: "19.75 in. Beige Frame Square Wicker Outdoor Side Table.",
      price: "AED 79",
      image: "https://images.thdstatic.com/productImages/28784ae1-592d-4fa2-b695-deb73bf77720/svn/outdoor-side-tables-sidetables-1-64_600.jpg", // Replace with actual image URLs
    },
    {
      id: 12,
      name: "Glass Cabinet",
      description: "Alba Oak Display Glass Cabinet | Roseland .",
      price: "AED 1000",
      image: "https://www.roselandfurniture.com/cdn/shop/products/G4558-alba-oak-display-cabinet-unit-roseland-furniture-5_3b59b5bc-ac23-42aa-9551-e088c0ecd1e8.jpg?v=1665434562&width=1200",
    },
    {
      id: 13,
      name: "Reclyner Sofa",
      description: "Reclyner Leather Red Luxury Sofa.",
      price: "AED 499",
      image: "https://4.imimg.com/data4/AY/DE/MY-27319008/sofa-recliner-500x500.jpg",
    },
    {
      id: 14,
      name: "Balcony Set",
      description: "Wooden Balcony Sets | Buy Balcony Table and Chair Sets Online.",
      price: "AED 600",
      image: "https://th.bing.com/th/id/OIP.ZG89Td91qhqyUPif0gPPqgHaGa?rs=1&pid=ImgDetMain",
    },
    {
      id: 15,
      name: "Floor Lamp",
      description: "Black Floor Lamp Home Decor With Light.",
      price: "AED 299",
      image: "https://img.lovepik.com/free-png/20211127/lovepik-floor-lamp-png-image_401183041_wh1200.png",
    },
  ];

  // Function to handle adding an item to the cart
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



const Furnitures = () => {
  return (
    <div><Header/>
        <Navbar/>
    <div className="bg-gray-100 md:flex min-h-screen py-4"> 
      <div className="max-w-screen-xl mx-auto px-2">
        <h1 className="text-2xl font-bold text-center mb-6">New Products</h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-64 h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-xl font-bold text-indigo-600 mt-4">
                  {product.price}
                </p>
                <button
                  onClick={() => addToCart(product)}  // Pass the correct product object to the function
                  className="w-full mt-4 bg-gray-600 text-white py-2 rounded-md hover:bg-indigo-700">
                  Add to Cart
                 </button>

              </div>
            </div>
          ))}
        </div>

      {/* Link to Cart Page */}
      <div className="fixed bottom-6 right-6">
        <Link href="/CartPage"
           className="bg-indigo-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-indigo-700">
            Go to Cart
        </Link>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Furnitures;
