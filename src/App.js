import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Cart from './pages/Cart/Cart';
import Gallary from './pages/Gallery/Gallary';
import Blog from './pages/Blog/Blog';
import Error from './pages/404/Error';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Header from './Components/Header/Header';
import ReservationModal from './Components/Modal/ReservationModal';
import ComingTemplate from './Templates/ComingTemplate';
import HomeTemplate from './Templates/HomeTemplate';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ReservationModal/>
        <ScrollToTop/>
        <Switch>
          <HomeTemplate path="/" exact Component={Home} />
          <HomeTemplate path="/home" exact Component={Home} />
          <HomeTemplate path="/menu" exact Component={Menu} />
          <HomeTemplate path="/about" exact Component={About} />
          <HomeTemplate path="/contact" exact Component={Contact} />
          <HomeTemplate path="/news" exact Component={News} />
          <HomeTemplate path="/cart" exact Component={Cart} />
          <HomeTemplate path="/gallery" exact Component={Gallary} />
          <HomeTemplate path="/blog" exact Component={Blog} />
          <HomeTemplate path="/404" exact Component={Error} />
          <ComingTemplate path="/coming-soon" exact Component={ComingSoon} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
