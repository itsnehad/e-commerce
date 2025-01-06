import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  // Fetch all orders
  const fetchAllOrder = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message || "Failed to fetch orders");
    }
  };

  // Update order status
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );

      if (response.data.success) {
        await fetchAllOrder();
      } else {
        toast.error(response.data.message || "Failed to update status");
      }
    } catch (error) {
      toast.error(error.message || "Failed to update status");
    }
  };

  useEffect(() => {
    fetchAllOrder();
  }, [token]);

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-4">Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr] items-center border border-gray-200 rounded-lg p-4 md:p-6 my-4 text-xs sm:text-sm text-gray-700 shadow-sm"
            key={index}
          >
            {/* Parcel Icon */}
            <img
              className="w-12 h-12 object-contain"
              src={assets.parcel_icon}
              alt="Parcel Icon"
            />

            {/* Order Details */}
            <div>
              {order.items.map((item, index) => (
                <p className="py-0.5" key={index}>
                  {item.name} x {item.quantity} <span>({item.size})</span>
                </p>
              ))}
              <p className="mt-3 mb-1 font-medium">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <p>{order.address.street},</p>
              <p>
                {order.address.city}, {order.address.state}, {order.address.country},{" "}
                {order.address.zipcode}
              </p>
              <p className="mt-1">{order.address.phone}</p>
            </div>

            {/* Payment Details */}
            <div>
              <p className="text-sm sm:text-[15px]">Items: {order.items.length}</p>
              <p className="mt-2">Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? "Done" : "Pending"}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            {/* Price and Status in Horizontal Row */}
            <div className="flex items-center gap-4">
              <p className="text-sm sm:text-[15px] font-semibold">
                {currency}
                {order.amount}
              </p>
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className="p-2 font-semibold border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
