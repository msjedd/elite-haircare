// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import { CartProvider } from "./Contexts/CartContext";
// import Products from "./pages/Products/Products";
// import CartPage from "./pages/CartPage/CartPage";
// import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
// import { CheckoutProvider } from "./Contexts/CheckoutContext";
// import Services from "./pages/Services/Services";
// import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
// import Terms from "./pages/Terms/Terms";
// import About from "./pages/About/About";
// import ContactPage from "./pages/ContactPage";
// import BlogPage from "./pages/BlogPage/BlogPage";
// // import FAQ from "./pages/FAQ";
// // import PageNotFound from "./pages/PageNotFound";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <CartProvider>
//         <CheckoutProvider>
//           <Routes>
//             <Route index element={<HomePage />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/cartPage" element={<CartPage />} />
//             <Route path="cartPage/checkoutPage" element={<CheckoutPage />} />
//             <Route path="/contactPage" element={<ContactPage />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/reviewsPage" element={<ReviewsPage />} />
//             <Route path="/terms" element={<Terms />} />

//             <Route path="/About" element={<About />} />
//             <Route path="/blogPage" element={<BlogPage />} />
//             {/* <Route path="FAQ" element={<FAQ />} /> */}
//             {/* <Route path="*" element={<PageNotFound />} /> */}
//           </Routes>
//         </CheckoutProvider>
//       </CartProvider>
//     </BrowserRouter>
//   );
// };

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { CartProvider } from "./Contexts/CartContext";
import { CheckoutProvider } from "./Contexts/CheckoutContext";
import { BookingProvider } from "./Contexts/BookingContext";

const HomePage = lazy(() => import("./pages/HomePage"));
const Products = lazy(() => import("./pages/Products/Products"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage/CheckoutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Terms = lazy(() => import("./pages/Terms/Terms"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const About = lazy(() => import("./pages/About/About"));
const Services = lazy(() => import("./pages/Services/Services"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage/ReviewsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <CheckoutProvider>
          <BookingProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cartPage" element={<CartPage />} />
                <Route
                  path="/cartPage/checkoutPage"
                  element={<CheckoutPage />}
                />
                <Route path="/contactPage" element={<ContactPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/About" element={<About />} />
                <Route path="/blogPage" element={<BlogPage />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BookingProvider>
        </CheckoutProvider>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
