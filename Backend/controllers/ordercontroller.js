import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js";
export const placeOrder = async (req, res) => {
  try {
    const { userId, items, address, amount } = req.body;
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const placeOrderStripe = async (req, res) => {};

export const placeOrderRazorpay = async (req, res) => {};

export const allOrders = async (req, res) => {};
export const userOrders = async (req, res) => {
  try {
    const {userId} = req.body
    const orders =await orderModel.find({userId})
    res.json({success:true,orders})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
};
export const updateStatus = async (req, res) => {};
