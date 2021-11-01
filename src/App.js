import BrownLinkBar from "./section/BrownLinkBar";
import DisplayRouteBar from "./section/DisplayRouteBar";
import Footer from "./section/Footer";
import NavigationBar from "./section/NavigationBar";
import Product from "./section/Product";
import RelatedProducts from "./section/RelatedProducts";
import Tablayout from "./section/Tablayout";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <DisplayRouteBar/>
      <Product/>
      <Tablayout/>
      <RelatedProducts/>
      <BrownLinkBar/>
      <Footer/>
    </div>
  );
}

export default App;
