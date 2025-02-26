import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/Products";



export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Carousel/>
      <Products/>
      
    </div>
  );
}
