import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Order() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const [userId, subTotal, phoneNumber]=data
        try {
            const response = await axios.get('/order/get-order');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
        <h2>  Order Details </h2>

            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

        {/* <label> User Id : {data.userId}</label>
        <label> subTotal : {data.subTotal}</label>
        <label> Phone Number : {data.phoneNumber}</label> */}
        
           


        </div>
    );
}

export default Order;
