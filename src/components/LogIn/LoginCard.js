import React from "react";
import Form from 'react-bootstrap/Form'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { DiApple } from "react-icons/di";
import { BsGithub, BsTwitter } from "react-icons/bs";


function LoginCardContent() {
    //Crear Endpoints para conectar con view index.js
    return (
        <container>
            <Card >
                <Card.Body>
                    <div>
                        <Card.Title> Welcome to DEV Community </Card.Title>
                    </div>
                    <Card.Text> DEV Community is a community of 820,186 amazing developers </Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="dark" size="lg">
                          <DiApple/>  Continue with Apple
                        </Button>
                        <Button variant="secondary" size="lg">
                            Continue with Forem
                        </Button>
                        <Button variant="dark" size="lg">
                           <BsGithub/> Continue with GitHub
                        </Button>
                        <Button variant="secondary" size="lg">
                           <BsTwitter/> Continue with Twitter
                        </Button>
                    </div>
                    <Card.Text> Have a password? Continue with your email address </Card.Text>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button variant="primary" type="submit" size="lg">
                            Continue
                        </Button>
                    </Form>
                    <Card.Text> I forgot my password </Card.Text>
                </Card.Body>
            </Card>

        </container>
    )
}

export default LoginCardContent