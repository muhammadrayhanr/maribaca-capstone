import { Container } from 'react-bootstrap';
import notfound from '../assets/notfound.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate('/');
  };

  return (
    <>
      <Container className="my-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={notfound} alt="Forbidden Access" className="img-fluid img-error" />
          <p className="fs-5 fw-semibold">Oppss! Halaman tidak ditemukan!</p>
          <span className="btn btn-back-error" onClick={back}>
            Kembali
          </span>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
