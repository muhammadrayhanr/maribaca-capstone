/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from 'react-bootstrap';
import RegisterForm from './components/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Register = () => {
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
          <RegisterForm />
        </Container>
      </section>
    </>
  );
};

export default Register;
