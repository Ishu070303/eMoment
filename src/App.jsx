import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Stocks from "./components/Stocks";

import PersonalCare from "./pages/PersonalCare";
import FashionSection from "./pages/FashionSection";
import AllProducts from "./pages/AllProducts";
import OfferSection from "./pages/OfferSection";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      <Stocks />
      <FashionSection />
      <PersonalCare />
      <AllProducts />
      <OfferSection />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
