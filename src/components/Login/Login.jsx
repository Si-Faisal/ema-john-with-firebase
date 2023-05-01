import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBeer, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../ContextProvider/ContextProvider';

const Login = () => {
    const { logeedin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handlelogin = (event) => {
        event.preventDefault();
        setSuccess('')
        setError('')

        const email = event.target.email.value;
        const password = event.target.password.value;
        
        logeedin(email, password)
            .then(reault => {
                setSuccess('Congratuylation you login your account');
                event.target.reset();
                navigate(from , {replace : true});
            })
            .catch(error => {
                setError(error.message)
        })

}

    return (
        <div className='container w-25 mt-5 border p-4'>
            <p>{error}</p>
            <p>{success}</p>
            <Form  onSubmit={handlelogin}>
                <h2 className='text-center'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <p>New To Ema-John? <Link to='/signup'>Create New Account</Link> </p>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>

                <hr />
                <Button variant="outline-success w-100">
                    <span> <FaGoogle />  </span>Contineous With Google..
                </Button>{' '}
            </Form>
        </div>
    );
};

export default Login;