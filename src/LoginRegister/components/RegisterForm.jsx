import axios from 'axios';
import { useState } from 'react';
import { Alert, Form, InputGroup } from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createAvatar } from '@dicebear/core';
import { adventurerNeutral } from '@dicebear/collection';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [visibilityPassword, setVisibilityPassword] = useState('password');
  const [visibilityRepeatPassword, setVisibilityRepeatPassword] = useState('password');
  const [iconPassword, setIconPassword] = useState('bx bx-low-vision');
  const [iconRepeatPassword, setIconRepeatPassword] = useState('bx bx-low-vision');
  const navigate = useNavigate();

  const randomAvatar = createAvatar(adventurerNeutral);
  const getUrlAvatar = randomAvatar.toDataUriSync();

  const newUser = {
    name: name,
    avatar: getUrlAvatar,
    email: email,
    password: password,
  };

  const addUser = (event) => {
    event.preventDefault();
    try {
      axios.post(import.meta.env.VITE_API_USERS, newUser);
      alert();
    } catch (error) {
      console.log(error);
    }
  };

  const alert = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Success!',
        text: 'Berhasil membuat akun!',
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

  return (
    <div className="container-login">
      <h1 className="fw-bold fs-1 mt-5">
        Selamat Datang di{' '}
        <NavLink to="/" className="logo text-decoration-none">
          Mari<span>Baca</span>
        </NavLink>
      </h1>
      <p className="fw-light fs-5">Silakan isi data kamu yah!</p>
      <form onSubmit={addUser} name="form" className="mt-5">
        {verifyPassword !== password ? (
          <div className="text-center py-2">
            <Alert variant="danger">
              <span className="fw-semibold">Warning!</span> Password tidak sama.
            </Alert>
          </div>
        ) : null}

        <div className="mb-3">
          <label htmlFor="regist_name" className="form-label">
            Nama
          </label>
          <input type="text" minLength={5} autoComplete="off" required={true} className="form-control" id="regist_name" name="regist_name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="regist_email" className="form-label">
            Email
          </label>
          <input type="email" minLength={12} autoComplete="off" required={true} className="form-control" id="regist_email" name="regist_email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="regist_password" className="form-label">
            Kata Sandi
          </label>
          <InputGroup>
            <Form.Control type={visibilityPassword} minLength={8} autoComplete="off" required={true} className="form-control" id="regist_password" name="regist_password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <InputGroup.Text onClick={leakPassword}>
              <i className={iconPassword}></i>
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="mb-3">
          <label htmlFor="regist_valid_password" className="form-label">
            Ulangi Kata Sandi
          </label>
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
        </div>
        <button type="submit" className="btn btn-register-form w-100 mt-4 fw-bold">
          Daftar
        </button>
        <p className="text-regist text-center mt-3">
          Sudah punya akun?{' '}
          <NavLink to="/login" className="text-decoration-none">
            Klik disini
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
