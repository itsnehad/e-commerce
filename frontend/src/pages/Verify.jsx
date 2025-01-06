import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Verify = () => {
    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
    const [searchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                if (!token) {
                    return null;
                }

                const response = await axios.post(
                    `${backendUrl}/api/order/verifyStripe`,
                    { success, orderId },
                    { headers: { token } }
                );

                if (response.data.success) {
                    setCartItems({});
                    navigate('/orders');
                } else {
                    navigate('/cart');
                }
            } catch (error) {
                console.log(error);
                toast.error(error.message || 'Payment verification failed.');
            }
        };

        verifyPayment();
    }, [token, success, orderId, backendUrl, navigate, setCartItems]);

    return (
        <div>
            <h1>Verify</h1>
        </div>
    );
};

export default Verify;
