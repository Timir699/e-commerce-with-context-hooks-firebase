import React, { useState, useEffect } from 'react';
import { Container, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import useCartProducts from '../../hooks/useCartProducts';
import useServices from '../../hooks/useServices';
import './Services.css'
import { CgDetailsMore } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Services = () => {

    const [displayServices, setDisplayServices] = useState([])

    const AllServices = useServices()
    const cartProducts = useCartProducts()
    const { allCartProducts, setAllCartProducts, setTotalPrice } = cartProducts

    const ServiceDetailsHandler = () => {
        console.log('Service details');
    }

    const ServiceAddToCart = (service) => {
        setAllCartProducts([...allCartProducts, service])
        let servicePrice = service.price
        const totalServicePrice = servicePrice += servicePrice
        setTotalPrice(totalServicePrice)
        alert("Service Successfully added to cart")
    }

    useEffect(() => {
        setDisplayServices(AllServices)
    }, [AllServices])

    const handleServiceChange = (e) => {
        const serviceSearchText = e.target.value
        const matchedServices = AllServices?.filter(service => service.name.toLowerCase().includes(serviceSearchText.toLowerCase()))
        setDisplayServices(matchedServices)
    }

    return (
        <div>
            <Container>
                <InputGroup className="my-5">
                    <FormControl
                        placeholder="Search Product or Services"
                        aria-label="Search Products or Services"
                        aria-describedby="basic-addon2"
                        onChange={handleServiceChange}
                    />
                </InputGroup>
                <h2 className="text-center my-5">Services</h2>
                <Row>
                    {displayServices?.map((service) => {
                        return (
                            <div key={service.id} className="services text-center col-lg-4 mb-5 p-2 border rounded">
                                <img src={service.img} alt="" />
                                <h3>{service.name}</h3>
                                <h3>${service.price}</h3>
                                <Button onClick={ServiceDetailsHandler} variant="warning"><CgDetailsMore className="mb-1" /> Details</Button>{' '}
                                <Button onClick={() => ServiceAddToCart(service)} variant="warning"><AiOutlineShoppingCart className="mb-1" /> Add to cart</Button>{' '}
                            </div>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Services;