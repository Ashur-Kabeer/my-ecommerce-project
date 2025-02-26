import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High quality noise-cancelling headphones.",
    price: "AED 299",
    image: "https://www.wallpaperflare.com/static/800/486/460/headphones-yellow-background-music-black-wallpaper.jpg", // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and stay connected.",
    price: "AED 1,699",
    image: "https://c1.wallpaperflare.com/preview/348/623/683/technology-technology.jpg",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable and waterproof Bluetooth speaker.",
    price: "AED 359",
    image: "https://m.media-amazon.com/images/I/71coh8P4h6L._AC_SL1500_.jpg",
  },
  {
    id: 4,
    name: "LED TV 55 inch",
    description: "Crystal clear 4K resolution with smart features.",
    price: "AED 3,000",
    image: "https://5.imimg.com/data5/XW/OK/KP/SELLER-91900205/40inch-led-tv-full-hd-1000x1000.png",
  },
  {
    id: 5,
    name: "iPhone 16 plus",
    description: "Apple iOS (128 GB) Gold with new amazing features.",
    price: "AED 3,499",
    image: "https://th.bing.com/th/id/OIP.tIxHEFtJGEtsN0Qj91G4BwHaEK?rs=1&pid=ImgDetMain",
  },
];

const bags = [
    {
      id: 1,
      name: "Ladies Handbags",
      description: "High quality black colored ladies handbag.",
      price: "AED 159",
      image: "https://th.bing.com/th/id/OIP.jasL39pjKuKdbkDhBOEnmwAAAA?rs=1&pid=ImgDetMain", // Replace with actual image URLs
    },
    {
      id: 2,
      name: "Luggage Bags",
      description: "Hardside Expandale luggage bags with Spinner Wheels .",
      price: "AED 899",
      image: "https://travelccessories.com/wp-content/uploads/2022/09/Is-Samsonite-better-than-Delsey-4.jpg",
    },
    {
      id: 3,
      name: "Men's Wallet",
      description: "Men's Leather Slim Bifold Wallet.",
      price: "AED 99",
      image: "https://www.veniceleather.it/wp-content/uploads/2019/01/Leather-Wallet-Brown-E836.jpg4_-768x768.jpg",
    },
    {
      id: 4,
      name: "Bagpacks",
      description: "Travel Backpack Waterproof Outdoor Gray.",
      price: "AED 129",
      image: "https://freepngimg.com/thumb/backpack/14-backpack-png-image.png",
    },
    {
      id: 5,
      name: "Laptop Bags",
      description: "Laptop Breifcase Shoulder Bag Black.",
      price: "AED 179",
      image: "https://media.istockphoto.com/id/182157353/photo/laptop-in-a-bag.jpg?b=1&s=170667a&w=0&k=20&c=7FdrHa2xnX0v1kxGttalmLQY0f9QYJPBP6pbZvMwBnE=",
    },
  ];

  const offers = [
    {
      id: 1,
      name: "Women's Jackets",
      description: "Hot Pink Women's Leather Studded Jacket.",
      price: "AED 79",
      image: "https://th.bing.com/th/id/R.9c5047e0053fd84a13b4241065f1ccca?rik=0Y87Dyzek6urcg&riu=http%3a%2f%2fthriftycosplay.weebly.com%2fuploads%2f2%2f9%2f1%2f0%2f29106159%2fpublished%2f221637081.jpg%3f1496318025&ehk=Afywt0Inp5KzcRfZRNXEhOMeDYLNPMXkC680DBbgl6E%3d&risl=&pid=ImgRaw&r=0", // Replace with actual image URLs
    },
    {
      id: 2,
      name: "MAC Matt Lipsticks",
      description: "Matt Longlasting Available in 3 Different Shades .",
      price: "AED 94",
      image: "https://di2ponv0v5otw.cloudfront.net/posts/2023/03/08/6408bbb672f45f7b0b898780/m_6408bc613b982a3e96ae0532.jpeg",
    },
    {
      id: 3,
      name: "Men's Cargo Pants",
      description: "Men's Crgo Pants Regular Fit 8 Pockets.",
      price: "AED 89",
      image: "https://cdn.shopify.com/s/files/1/0267/0323/3076/products/suzhoucargopantst81007pic5_490x.progressive.jpg?v=1614415711",
    },
    {
      id: 4,
      name: "Indonesian Oud",
      description: "Ermenegildo Zegna Indonesian Oud Perfume.",
      price: "AED 165",
      image: "https://wallpaperaccess.com/full/4745915.jpg",
    },
    {
      id: 5,
      name: "Non-stick Cookware",
      description: "Ceramic Professional Non-stick 10 peice set.",
      price: "AED 299",
      image: "https://th.bing.com/th/id/OIP.bSyhhB0bQFgSNP32Ci_BEAHaHa?w=3000&h=3000&rs=1&pid=ImgDetMain",
    },
  ];


const Products = () => {
  return (
    <div className="bg-gray-100 md:flex min-h-screen py-4">
      <div className="max-w-screen-xl mx-auto px-2">
        <h1 className="text-2xl font-bold text-center mb-6">Best of Electronics</h1>

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
                <button className="w-full mt-4 bg-gray-600 text-white py-2 rounded-md hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

         {/* bag Grid */}
         <h1 className="text-2xl font-bold text-center mb-6 py-6">Deals on Bags and Luggages</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {bags.map((bags) => (
            <div
              key={bags.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={bags.image}
                alt={bags.name}
                className="w-64 h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{bags.name}</h3>
                <p className="text-gray-600 mt-2">{bags.description}</p>
                <p className="text-xl font-bold text-indigo-600 mt-4">
                  {bags.price}
                </p>
                <button className="w-full mt-4 bg-gray-600 text-white py-2 rounded-md hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 50% 0ff Grid */}
        <h1 className="text-2xl font-bold text-center mb-6 py-6">Upto 50% OFF</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {offers.map((offers) => (
            <div
              key={offers.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={offers.image}
                alt={offers.name}
                className="w-64 h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{offers.name}</h3>
                <p className="text-gray-600 mt-2">{offers.description}</p>
                <p className="text-xl font-bold text-indigo-600 mt-4">
                  {offers.price}
                </p>
                <button className="w-full mt-4 bg-gray-600 text-white py-2 rounded-md hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
