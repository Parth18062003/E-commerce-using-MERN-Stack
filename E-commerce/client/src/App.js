import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stores from "./pages/Stores";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Error from "./pages/Error";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DisplayPage from "./pages/DisplayPage";
import Returns from "./pages/Returns";
import Orders from "./pages/Orders";
import Terms from "./pages/Terms";
import Faq from "./pages/Faq";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import AdminRoute from "./components/Routes/Admin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";
import ViewProduct from "./pages/admin/ViewProduct";
import ViewSingleProduct from "./pages/admin/ViewSingleProduct";
import ViewFilteredProduct from "./pages/admin/ViewFilteredProducts";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path='/display/:filter' element={<DisplayPage />} />
      <Route path="/privacy-policy" element={<Policy />} />
      <Route path="/returns-exchange" element={<Returns />} />
      <Route path="/orders-shippings" element={<Orders />} />
      <Route path="/terms-conditions" element={<Terms />} />
      <Route path="/faqs" element={<Faq/>} />
      <Route path="/view-product" element={<ViewProduct />} />
      <Route path="/view-product/:productname" element={<ViewSingleProduct />} />
      <Route path="/view-product/filter/:attributes/:values" element={<ViewFilteredProduct />} />
      <Route path="/dashboard" element={<AdminRoute />}>
      <Route path="admin-profile" element={<AdminDashboard />} />
      <Route path="admin-profile/add-product" element={<AddProduct />} />
      </Route>
      <Route path="/dashboard" element={<PrivateRoute />}>
      <Route path="user-profile" element={<Dashboard />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
