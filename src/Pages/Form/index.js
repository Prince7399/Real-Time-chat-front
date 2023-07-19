import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [alreadyAccount, setAlreadyAccount] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData?.name !== '' && formData?.email !== '' && formData?.password !== '') {
                console.log('formData :>> ', formData);
                const response = await axios.post('http://localhost:5000/signup', formData);
                console.log('response :>> ', response);
            }
        } catch (error) {

        }
    }

    // console.log('formData :>> ', formData);
    return (
        <>
            <Container fluid className="d-flex justify-content-center align-items-center login-form-container vh-100" >
                <Form className='login-form bg-white rounded p-5' onSubmit={(e) => handleSubmit(e)}>
                    <div className='px-3 py-5'>
                        <Row>
                            <Col>
                                <h3 className='text-center'>Welcome</h3>
                                <h6 className='text-center'>{alreadyAccount ? "Sign In " : "Signup "} now to get Started</h6>
                            </Col>
                        </Row>
                        {!alreadyAccount && <Row className='mt-3'>
                            <Col>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Name" name='name' onChange={(e) => handleChange(e)} />
                            </Col>
                        </Row>}
                        <Row className='mt-3'>
                            <Col>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e) => handleChange(e)} />
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' onChange={(e) => handleChange(e)} />
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit" className='mt-5 w-100'>
                            Submit
                        </Button>
                        <Row className='mt-3'>
                            <Col>
                                <p className='text-end'>{!alreadyAccount ? "Alredy have an account" : "Don't have an Account"}<span className='text-primary' onClick={() => setAlreadyAccount(!alreadyAccount)}>{!alreadyAccount ? " Sign in" : " Sign Up"}</span></p>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </Container>
        </>
    )
}

export default LoginForm;
