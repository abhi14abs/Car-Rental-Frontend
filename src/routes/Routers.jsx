import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Cars/Cars';
import DoctorDetails from '../pages/Cars/CarDetails';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/provider-account/Dashboard';
import CheckoutSuccess from '../pages/Cars/CheckoutSuccess';
import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/cars" element={<Doctors/>} />
      <Route path="/cars/:id" element={<DoctorDetails/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/checkout-success" element={<CheckoutSuccess/>} />

      <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}><MyAccount/></ProtectedRoute>} />
      <Route path="/cars/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard/></ProtectedRoute>} />

    </Routes>
  );
};

export default Routers;