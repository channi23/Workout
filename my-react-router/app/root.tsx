import {Link,Outlet} from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Product from './routes/product';
import Contact from './routes/contact';
import "./app.css";

export default function Root(){
  return(
    <div style={{padding:20}}>
      <h1>React Router Demo</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <Outlet/>
    </div>
  );
}
