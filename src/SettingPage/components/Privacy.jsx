import axios from 'axios';
import { useState } from 'react';
import { Container, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Privacy = () => {
  let user = JSON.parse(localStorage.getItem('user-info'));

  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [visibilityPassword, setVisibilityPassword] = useState('password');
  const [visibilityRepeatPassword, setVisibilityRepeatPassword] = useState('password');
  const [iconPassword, setIconPassword] = useState('bx bx-low-vision');
  const [iconRepeatPassword, setIconRepeatPassword] = useState('bx bx-low-vision');
  const navigate = useNavigate();

  const formData = { password: password };

  const leakPassword = () => {
    if (visibilityPassword === 'password') {
      setIconPassword('bx bx-show');
      setVisibilityPassword('text');
    } else {
      setIconPassword('bx bx-low-vision');
      setVisibilityPassword('password');
    }
  };

  const leakRepeatPassword = () => {
    if (visibilityRepeatPassword === 'password') {
      setIconRepeatPassword('bx bx-show');
      setVisibilityRepeatPassword('text');
    } else {
      setIconRepeatPassword('bx bx-low-vision');
      setVisibilityRepeatPassword('password');
    }
  };

  const alert = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Success!',
        text: 'Silakan Masuk kembali!',
        icon: 'success',
        confirmButtonColor: '#db3635',
        confirmButtonText: 'OK',
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
  };

  const updateUser = (e) => {
    e.preventDefault();
    try {
      axios.put(`https://64670f90ba7110b663ae7915.mockapi.io/users/${user.id}`, formData);
      localStorage.clear();
      alert();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={updateUser} className="p-5 rounded bg-privacy">
        <h2 className="mb-4">Ganti Kata Sandi</h2>
        {verifyPassword !== password ? (
          <div className="text-center py-2">
            <Alert variant="danger">
              <span className="fw-semibold">Warning!</span> Password tidak sama.
            </Alert>
          </div>
        ) : null}
        <Form.Group className="mb-3">
          <Form.Label>Kata Sandi Baru</Form.Label>
          <InputGroup>
            <Form.Control type={visibilityPassword} minLength={8} autoComplete="off" required={true} className="form-control" id="regist_password" name="regist_password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <InputGroup.Text onClick={leakPassword}>
              <i className={iconPassword}></i>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Konfirmasi Kata Sandi Baru</Form.Label>
          <InputGroup>
            <Form.Control
              type={visibilityRepeatPassword}
              minLength={8}
              autoComplete="off"
              required={true}
              className="form-control"
              id="regist_valid_password"
              name="regist_valid_password"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
            />
            <InputGroup.Text onClick={leakRepeatPassword}>
              <i className={iconRepeatPassword}></i>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <div className="text-end mt-4 p-3">
          <Button type="submit" variant="dark" className="px-4">
            Simpan
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Privacy;
