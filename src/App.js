import { Fragment } from "react";
import Navigation from "./routes/Navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Contact from "./routes/contact/contact.compoent";
import { Routes, Route } from "react-router-dom";



const Shop = () => {
  return <h1>i am shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigation/>}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop  />} />
        <Route path="Contact" element={<Contact  />} />
        <Route path="auth" element={<Authentication  />} />
      </Route>
    </Routes>
  ); 
};

export default App;
