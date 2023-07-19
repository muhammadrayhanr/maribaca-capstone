import axios from "axios";
import {useEffect, useState} from "react";
import {Alert, Form, InputGroup, Modal, Button} from "react-bootstrap";
import {useNavigate, NavLink} from "react-router-dom";
import Swal from "sweetalert2";

const LoginForm = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgetPassword, setForgetPassword] = useState("");
  const [resultForgetPassword, setResultForgetPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);
  const [visibilityPassword, setVisibilityPassword] = useState("password");
  const [icon, setIcon] = useState("bx bx-low-vision");
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_USERS);
        setUsers(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

  const leakPassword = () => {
    if (visibilityPassword === "password") {
      setIcon("bx bx-show");
      setVisibilityPassword("text");
    } else {
      setIcon("bx bx-low-vision");
      setVisibilityPassword("password");
    }
  };

  const successLogin = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Berhasil masuk!",
    });
  };

  const login = (e) => {
    e.preventDefault();
    const user = users.find((item) => item.email === email && item.password === password);
    if (email === "" && password === "") {
      setMessage("Harap masukkan email dan password!");
    } else {
      if (user) {
        localStorage.setItem("user-info", JSON.stringify(user));
        successLogin();
        navigate("/home");
      } else {
        setUserNotFound(true);
      }
    }
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const dataUser = users.filter((item) => item.email === forgetPassword);
    if (dataUser.length > 0) {
      setResultForgetPassword(`Kata Sandi kamu adalah ${dataUser[0].password}`);
    } else {
      setResultForgetPassword("Pengguna tidak ditemukan");
    }
  };

  return (
    <div className="container form-login-regist">
      <h1 className="fw-bold fs-1 mt-5">
        Selamat Datang di{" "}
        <NavLink to="/" className="logo text-decoration-none">
          Mari<span>Baca</span>
        </NavLink>
      </h1>
      {message ? (
        <div className="text-center py-2">
          <Alert variant="danger">
            <span className="fw-semibold">Warning!</span> {message}
          </Alert>
        </div>
      ) : (
        <></>
      )}

      <div className="d-flex my-4">
        <Button variant="primary" onClick={handleShow} className="ms-auto btn-socmed">
          Akun Demo
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Akun Demo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Email: <b>pengguna@gmail.com</b>
          </p>
          <p>
            Password: <b>12345678</b>
          </p>
        </Modal.Body>
      </Modal>

      <form onSubmit={login} name="form" className="mt-2">
        {userNotFound == false ? null : (
          <div className="text-center py-2">
            <Alert variant="danger">
              <span className="fw-semibold">Warning!</span> Pengguna tidak ditemukan!
            </Alert>
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" name="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Kata Sandi
          </label>
          <InputGroup>
            <Form.Control type={visibilityPassword} className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <InputGroup.Text onClick={leakPassword}>
              <i className={icon}></i>
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="mb-3 form-forget text-end">
          <Button className="forget-password" onClick={handleShowModal} disabled>
            Lupa kata sandi?
          </Button>
        </div>
        <button type="submit" className="btn btn-login-form w-100 mt-4 fw-bold">
          Masuk
        </button>
        <p className="text-regist text-center  mt-3">
          Belum punya akun?{" "}
          <NavLink to="/register" className="text-decoration-none">
            Klik disini
          </NavLink>
        </p>
      </form>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Lupa Kata Sandi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="my-4" onSubmit={handleForgetPassword}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Masukkan email kamu" autoFocus value={forgetPassword} onChange={(e) => setForgetPassword(e.target.value)} />
            </Form.Group>
            <Button className="d-block mx-auto btn-search-user" type="submit">
              Cari Pengguna
            </Button>
            <div className="text-center mt-4">
              <p className="fs-5 fw-semibold">Hasil Pencarian</p>
              <span> {resultForgetPassword}</span>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginForm;
