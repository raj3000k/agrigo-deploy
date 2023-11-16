import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FooterWithSitemap from "../components/Footer";
import { Link } from 'react-router-dom';
function PlaceOrder() {
  const [products] = useState([
    { id: 1, name: 'Rice', price: 40 },
    { id: 2, name: 'Wheat', price: 35 },
    { id: 3, name: 'Corn', price: 50 },
    // Add more products here
  ]);

  const [formData, setFormData] = useState({
    product: products[0],
    quantity: 1,
    location: '',
    email: '',
    zipCode: '',
    city: '',
    state: '',
    country: '',
    deliveryPreference: 'Standard',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'quantity' ? parseInt(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the order data to your server or process it as needed
    console.log('Order submitted:', formData);
  };

  return (
    <div className="bg-gray-100 h-full">
    <Navbar/>
      <div className="max-w-md mx-auto p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Product:</label>
            <select
              name="product"
              value={formData.product.id}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-gray-300 rounded shadow"
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Quantity (in kg):</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-gray-300 rounded shadow"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Your Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-gray-300 rounded shadow"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-gray-300 rounded shadow"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Zip Code:</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-gray-300 rounded shadow"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-gray-300 rounded shadow"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-gray-300 rounded shadow"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-gray-300 rounded shadow"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Delivery Preference:</label>
            <select
              name="deliveryPreference"
              value={formData.deliveryPreference}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-gray-300 rounded shadow"
            >
              <option value="Standard">Standard</option>
              <option value="Express">Express</option>
            </select>
          </div>
          <Link to='/distributor/category/order/transport'>
          <button
            type="submit"
            className="bg-[#1d754b] text-white py-2 px-4 rounded-full font-bold w-full hover:bg-[#5BC99C]"
          >
            Select Transporter
          </button>
          </Link>
          
        </form>
      </div>
     <FooterWithSitemap/>
      
    </div>
  );
}

export default PlaceOrder;
