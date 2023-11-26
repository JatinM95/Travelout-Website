import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Contact = React.lazy(() => import("./pages/Contact"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;