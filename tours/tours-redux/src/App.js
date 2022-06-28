import React, { Suspense } from "react";
import "./index.css";
import Loading from "./Loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./home/Home")); // Lazy-loaded
const Navbar = React.lazy(() => import("./navbar/Navbar")); // Lazy-loaded
const ToursPage = React.lazy(() => import("./tours/ToursPage")); // Lazy-loaded
const DetailTour = React.lazy(() => import("./tours/DetailTour")); // Lazy-loaded
const Footer = React.lazy(() => import("./footer/Footer")); // Lazy-loaded

const App = () => {
  return (
    <Suspense
      fallback={
        <>
          <Loading />
        </>
      }
    >
      <main className="md:container md:mx-auto">
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/tours" element={<ToursPage />}>
            </Route>
              <Route path="/tour-:tourId" element={<DetailTour />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </Suspense>
  );
};

export default App;
