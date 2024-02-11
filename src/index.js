// export { default as Navbar } from './components/Navbar.jsx';
// export { default as Hero } from './components/Hero.jsx';
// export { default as Memory } from './components/Memory.jsx';
// export { default as Explore } from './components/Explore.jsx';
// export { default as Advertise } from './components/Advertise.jsx';
// export { default as Pricings } from './components//Pricings.jsx';
// export { default as Banner } from './components/Banner.jsx';
// export { default as Newslatter } from './components/Newslatter.jsx';
// export { default as Footer } from './components/Footer.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
