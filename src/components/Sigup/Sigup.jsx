import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/ContextProvider';

const Sigup = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { registerinfo } = useContext(AuthContext);
    // console.log(registerinfo);
    const handleSubmitForm = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;
        if (password !== confirmpassword) {
            setError('password don not match');
            return
        }
        console.log(email, password, confirmpassword);
        registerinfo(email, password)
            .then(result =>{
                const loggeduser = (result.user);
                console.log(loggeduser)
                setSuccess('Congratulations!!! You Submitted Form Successfully');
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
        })
    }
    return (
        <Container className=' w-25 mt-5 border p-4'>
            <p className=''>{error}</p>
            <p className=''>{success}</p>

                <h2 className='text-center'>Sign Up</h2>
            <Form onSubmit={handleSubmitForm} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control name='confirmpassword' type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Text className="text-muted">
                    Already have an acoount? <Link to='/login'>Please Login</Link>
                </Form.Text>
              
                <Button
                  className='w-100' variant="primary" type="submit">
                    SignUp
                </Button>

                <hr />
                <Button    variant="outline-success w-100">
                    <span> <FaGoogle />  </span>Contineous With Google..
                </Button>
            </Form>
        </Container> 
    );
};

export default Sigup;