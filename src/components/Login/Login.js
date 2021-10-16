import React, { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
import { BsGithub, BsFacebook } from 'react-icons/bs';
const Login = () => {

    // const { customRegister, setCustomRegister } = useContext(passwordContext)
    const { signInWithGoogle, signInWithGithub, signInWithFacebook, signInWithEmail, user, setUser } = useAuth()
    const [isChecked, setIsChecked] = useState(false)

    const [registerLogin, setRegisterLogin] = useState({
        name: '',
        email: '',
        password: '',
    })

    const checkLogin = (e) => {
        setIsChecked(e.target.checked);
    }
    const formHandler = (e) => {
        if (!registerLogin.email || !registerLogin.password) {
            return alert("please give valid information")
        }
        e.preventDefault()
        setUser(registerLogin)
        signInWithEmail()
        setRegisterLogin({})
    }
    const handleChange = (e) => {
        setRegisterLogin({
            ...registerLogin,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="text-center">
            <h2 className="my-3">{user.email ? "" : "Please log in for cart & shipping"}</h2>
            <h2 className="my-3">{!isChecked ? "Register Your Account" : "Login"}</h2>
            <Container>
                <Form onSubmit={formHandler}>

                    {!isChecked ? < Form.Group onChange={(e) => handleChange(e)} className="mb-3" controlId="formBasicEmail"
                    >
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" value={registerLogin.name} name="name" />
                    </Form.Group> : ""}

                    <Form.Group className="mb-3" onChange={(e) => handleChange(e)} controlId="formBasicEmail" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={registerLogin.email} />
                    </Form.Group>

                    <Form.Group className="mb-3" onChange={(e) => handleChange(e)} controlId="formBasicPassword" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={registerLogin.password} />
                    </Form.Group>

                    <h3>You Can also login with</h3>

                    <FcGoogle style={{ fontSize: "50px", cursor: "pointer" }} onClick={signInWithGoogle} />
                    <BsGithub style={{ fontSize: "50px", cursor: "pointer", margin: "0px 20px " }} onClick={signInWithGithub} />
                    {/* <BsFacebook onClick={signInWithFacebook} style={{ fontSize: "50px", cursor: "pointer", color: "#0C86EE" }} /> */}

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