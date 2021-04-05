import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
// import Mycomponent from './Mycomponent/Mycomponent';
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Body from './Body/Body'
import './css/custom.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css'
import './css/heroic-features.css';


function App() {
  return (
    <BrowserRouter>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
