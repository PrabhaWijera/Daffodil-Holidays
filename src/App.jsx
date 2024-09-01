import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import PlaceDetail from "./components/Places/PlaceDetail.jsx";
import TravelCustomerForm from "./components/Form/TravelCustomerForm.jsx";
import PopularDestination from "./components/Places/PopularDestination.jsx";
import ExclusivePackages from "./components/Packages/ExclusivePackages.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places/:id" element={<PlaceDetail />} />
            <Route path="package-details/:country" element={<PlacesRoute />} />
            <Route path="/itinery" element={<PopularDestination />} />
            <Route path="/package" element={<ExclusivePackages />} />
            <Route path="contact" element={<ContactForm/>} />
            <Route path="/booking" element={<TravelCustomerForm/>} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
