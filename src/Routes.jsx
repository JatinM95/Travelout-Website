import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Contact = React.lazy(() => import("./pages/Contact"));
const OurStories = React.lazy(() => import("./pages/OurStories"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const WanderlustDiaries = React.lazy(() => import("./pages/StoriesWanderlustDiaries"));
const BeyondBorders = React.lazy(() => import("./pages/StoriesBeyondBorders"));
const CulinaryCrossroads = React.lazy(() => import("./pages/StoriesCulinaryCrossroads"));
const SacredSunsets = React.lazy(() => import("./pages/StoriesSacredSunsets"));
const ThrillSeeker = React.lazy(() => import("./pages/StoriesThrillSeeker"));
const CulturalKaleidoscope = React.lazy(() => import("./pages/StoriesCulturalKaleidoscope"));
const TechTravel = React.lazy(() => import("./pages/StoriesTechTravel"));
const LuxuryEscapes = React.lazy(() => import("./pages/StoriesLuxuryEscapes"));
const SustainableSojourns = React.lazy(() => import("./pages/StoriesSustainableSojourns"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our_stories" element={<OurStories />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/wanderlust_diaries" element={<WanderlustDiaries />} />
          <Route path="/beyond_borders" element={<BeyondBorders />} />
          <Route path="/culinary_crossroads" element={<CulinaryCrossroads />} />
          <Route path="/sacred_sunsets" element={<SacredSunsets />} />
          <Route path="/thrill_seeker" element={<ThrillSeeker />} />
          <Route path="/cultural_kaleidoscope" element={<CulturalKaleidoscope />} />
          <Route path="/tech_travel" element={<TechTravel />} />
          <Route path="/luxury_escapes" element={<LuxuryEscapes />} />
          <Route path="/sustainable_sojourns" element={<SustainableSojourns />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;