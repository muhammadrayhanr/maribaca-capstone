/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from 'react-bootstrap';
import LoginForm from './components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './LoginRegister.css';

const Login = () => {
  const navigate = useNavigate();
  let verifyLogin = localStorage.getItem('user-info');

  useEffect(() => {
    if (verifyLogin) {
      navigate('/home');
    }
  }, []);

  return (
    <>
      <section>
        <Container className="d-flex justify-content-center">
          <LoginForm />
        </Container>
      </section>
    </>
  );
};

export default Login;
