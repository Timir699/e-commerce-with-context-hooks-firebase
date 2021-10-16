import React, { useState } from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import useCartProducts from '../../hooks/useCartProducts';
import './Cart.css'
import { IoBagCheckOutline } from 'react-icons/io5';
import { MdRemoveShoppingCart } from 'react-icons/md';


const Cart = () => {

    const carts = useCartProducts()
    const { allCartProducts, setAllCartProducts } = carts
    // const [totalPrice, setTotalPrice] = useState()
    const removeItem = (cartProduct) => {
        const finalCartItems = allCartProducts.filter((finalCartItem) => finalCartItem !== cartProduct)
        setAllCartProducts(finalCartItems)
    }

    const reducer = (previousValue, currentValue) => previousValue + currentValue

    const total = allCartProducts.map((cartProductPrice) => {
        const { price } = cartProductPrice
        return price
    })

    let totalPrice = (total.reduce(reducer, 0))
    console.log(totalPrice);

    let percentage = (totalPrice * 15) / 100
    let tax = (Math.round(percentage))

    let grandTotal = totalPrice + tax + 15

    return (
        <div>
            <Container>
                <Row>
                    <div className="col-lg-8 my-5">
                        {allCartProducts.map((cartProduct) => {
                            return (
                                <div key={cartProduct.id} className="cart text-center my-5">
                                    <img className={{ width: "250px" }} src={cartProduct.img} alt="" />
                                    <h3>{cartProduct.name}</h3>
                                    <h3>price ${cartProduct.price}</h3>

                                    <Button onClick={() => removeItem(cartProduct)} variant="warning"><MdRemoveShoppingCart className="mb-1" />Remove From Cart</Button>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-lg-4 my-5">
                        <h2>Order Summary</h2>
                        <p>Quantity : {allCartProducts.length}</p>
                        <p>Total : ${totalPrice}</p>
                        <p>Shipping : $15</p>
                        <p>Tax (15%) : ${tax}</p>
                        <hr />
                        <p>Grand Total : ${grandTotal}</p>
                        <Button className="mx-1" variant="warning"><IoBagCheckOutline className="mb-1" /> Place Order</Button>
                    </div>
                </Row>
            </Container>

        </div >
    );
};

export default Cart;