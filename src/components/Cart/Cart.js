import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import useCartProducts from '../../hooks/useCartProducts';
import './Cart.css'
import { IoBagCheckOutline } from 'react-icons/io5';
import { MdRemoveShoppingCart } from 'react-icons/md';

const Cart = () => {

    const carts = useCartProducts()
    const { allCartProducts, setAllCartProducts, totalPrice } = carts

    const removeItem = (cartProduct) => {
        const finalCartItems = allCartProducts.filter((finalCartItem) => finalCartItem !== cartProduct)
        setAllCartProducts(finalCartItems)
    }

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
                                    <h3>price-${cartProduct.price}</h3>
                                    <Button className="mx-1" variant="warning"><IoBagCheckOutline className="mb-1" /> Checkout</Button>
                                    <Button onClick={() => removeItem(cartProduct)} variant="warning"><MdRemoveShoppingCart className="mb-1" />Remove From Cart</Button>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-lg-4 my-5">
                        <h2>Checkout</h2>
                        <p>Quantity : {allCartProducts.length}</p>
                        <p>Total : {totalPrice}</p>
                    </div>
                </Row>
            </Container>

        </div >
    );
};

export default Cart;