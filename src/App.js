import './App.css';
import {Routes, Route } from 'react-router-dom'
import Home from './componets/pages/home/Home';
import AboutUs from './componets/pages/aboutUs/AboutUs';
import ContactUs from './componets/pages/contactUs/ContactUs';
import BookService from './componets/pages/bookService/BookService';
import ListServices from './componets/pages/listServices/ListServices';
import SignUp from './componets/pages/signUp/SignUp';


function App() {
  return (
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/about-us" element={<AboutUs/>} />
     <Route path="/contact-us" element={<ContactUs/>} />
     <Route path="/book-a-service" element={<BookService/>} />
     <Route path="/list-of-services" element={<ListServices/>} />
     <Route path="/sign-up" element={<SignUp/>} />
   </Routes>
  );
}

export default App;
