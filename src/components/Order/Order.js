import React from 'react';
import './Order.css';

const Order = () => {
    return (
        <div>
            <h1>Order Data</h1>
            <table>
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>001</td>
                    <td>Nike Shoes</td>
                    <td>2</td>
                    <td>$200</td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>Nike T-Shirt</td>
                    <td>3</td>
                    <td>$60</td>
                </tr>
                <tr>
                    <td>003</td>
                    <td>Nike Shorts</td>
                    <td>1</td>
                    <td>$30</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}


export default Order;