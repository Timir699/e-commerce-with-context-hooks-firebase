import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {

    const { signInWithGoogle } = useFirebase()
    const [isChecked, setIsChecked] = useState(false)

    const checkLogin = (e) => {
        setIsChecked(e.target.checked);
    }


    return (
        <div className="text-center">
            <h2 className="my-5">{!isChecked ? "Register Your Account" : "Login"}</h2>
            <Container>
                <Form>
                    {!isChecked ? < Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group> : ""}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={signInWithGoogle} variant="warning">
                        Login with Google
                    </Button>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={checkLogin} type="checkbox" label="Already registered!! Click Here for log in" />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                        {!isChecked ? "Register" : "Login"}
                    </Button>
                </Form>
            </Container>
        </div >
    );
};

export default Login;