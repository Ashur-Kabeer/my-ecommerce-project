import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LocationBanner from "./components/LocationBanner";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

export default function Home() {
  const currentLocation = "Dubai, United Arab Emirates"; // This is an example; replace it with dynamic data if needed

  return (
    <div>
      <Banner />
      <Header />
      <LocationBanner currentLocation={currentLocation} /> {/* Pass currentLocation prop here */}
      <Navbar />
      <Carousel />
      <Products />
      <Footer />
    </div>
  );
}
