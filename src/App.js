import Footer from "./Components/Footer/Footer";
import Info from "./Components/Info/Info";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Price from "./Pages/Price/Price";
import Resume from "./Pages/Resume/Resume";
import Services from "./Pages/Services/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'




function App() {

  return (
    < >
      <Navbar />
      <Home />
      <Info/>
      <Services />
      <Portfolio />
      <Resume />
      <Price />
      <Footer />
    </>
  );
}

export default App;