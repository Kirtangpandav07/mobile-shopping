import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home"
import About from "./Pages/About";
import Product from "./Pages/Product";
import './App.css';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>




function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
          <About/>
          <Product />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Product">
          <Product />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
       
      </Switch>
      <Footer />
    </Router>
    </>
  )
};

export default App;
