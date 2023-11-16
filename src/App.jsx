import logo from "./logo.svg";
import "./tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Transporter from "./pages/Transporter";
import Distributor from "./pages/Distributor";
import DriverDetails from './pages/DriverDetails';
import ManageVehicles from './pages/ManageVehicles';
import Order from './pages/Order'
import Warehouse from "./pages/Warehouse";
import Login from "./pages/Login";
import ItemList from "./pages/ItemList";
import ShowWarehouse from "./pages/ShowWarehouse";
import Track from "./pages/Track";
import PlaceOrder from "./pages/PlaceOrder";
import ShowTransporter from "./pages/ShowTransporter";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route exact path="/login" element={<Login />}></Route>

        <Route exact path="/transporter" element={<Transporter />}></Route>
        <Route exact path="/distributor" element={<Distributor />}></Route>
        <Route exact path="/distributor/category/:category" element={<ItemList/>}></Route>
        <Route exact path="/distributor/category/:category" element={<ItemList/>}></Route>
        <Route exact path="/distributor/category/warehouse/:item" element={<ShowWarehouse/>}></Route>
        <Route exact path="/distributor/category/order" element={<PlaceOrder/>}></Route>
        <Route exact path="/distributor/category/order/transport" element={<ShowTransporter/>}></Route>
        <Route exact path="/transporter/order" element={<Order />}></Route>
        <Route exact path="/" element={<Welcome/>}></Route>
        <Route exact path="/transporter" element={<Transporter/>}></Route>
        <Route exact path="/transporter/drivers" element={<DriverDetails/>}></Route>
        <Route exact path="/transporter/vehicles" element={<ManageVehicles/>}></Route>
        <Route exact path="/warehouse" element={<Warehouse/>}></Route>
        <Route exact path="/track" element={<Track/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
