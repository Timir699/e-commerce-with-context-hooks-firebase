import React, { useState, useEffect } from 'react';
import { Row, Button, Container, InputGroup, FormControl } from 'react-bootstrap';
import useCartProducts from '../../hooks/useCartProducts';
import useProducts from '../../hooks/useProduct';
import './Products.css'

const Products = () => {

    const [displayProducts, setDisplayProducts] = useState([])

    const AllProducts = useProducts()

    const cartProducts = useCartProducts()
    const { allCartProducts, setAllCartProducts, setTotalPrice, totalPrice } = cartProducts

    const ProductDetailsHandler = () => {
        console.log('details');
    }

    const ProductAddToCart = (product) => {
        setAllCartProducts([...allCartProducts, product])
        let productPrice = product.price
        let totalProductPrice = productPrice
        setTotalPrice(totalProductPrice)
        alert("Product Successfully added to cart")
    }

    useEffect(() => {
        setDisplayProducts(AllProducts)
    }, [AllProducts])

    const handleProductChange = (e) => {
        const productSearchText = e.target.value
        const matchedProducts = AllProducts?.filter(product => product.name.toLowerCase().includes(productSearchText.toLowerCase()))
        setDisplayProducts(matchedProducts)

    }

    return (
        <div>
            <Container>
                <InputGroup className="my-5">
                    <FormControl
                        placeholder="Search Product or Services"
                        aria-label="Search Products or Services"
                        aria-describedby="basic-addon2"
                        onChange={handleProductChange}
                    />
                </InputGroup>

                <h2 className="text-center my-5">Products</h2>

                <Row>
                    {
                        displayProducts.map((product) => {
                            return (
                                <div key={product.id} className="product text-center col-lg-4 mb-5 p-2 border rounded">
                                    <img style={{ width: "200px" }} src={product.img} alt="" />
                                    <h3>{product.name}</h3>
                                    <h3>${product.price}</h3>
                                    <h3>{product.weight}gm</h3>
                                    <Button onClick={ProductDetailsHandler} variant="warning">Details</Button>{' '}
                                    <Button onClick={() => ProductAddToCart(product)} variant="warning">Add to cart</Button>{' '}
                                </div>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;