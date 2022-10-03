import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Portfolo from "./Pages/Portfolio/Portfolo";
import Price from "./Pages/Price/Price";
import Resume from "./Pages/Resume/Resume";
import Services from "./Pages/Services/Services";




function App() {

  return (
    < >
      <Navbar />
      <Home />
      <Services />
      <Portfolo />
      <Resume />
      <Price />
    </>
  );
}

export default App;