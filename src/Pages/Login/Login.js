import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, providerLogin, setLoading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    console.log(location);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => setLoading(false))
    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <br />
            <Button variant="primary" type="submit">
                Login
            </Button>
            <br />
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='my-3' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <p className='mt-3'><small>No account yet? <Link to='/register'>Register</Link></small></p>

        </Form>
    );
};

export default Login;