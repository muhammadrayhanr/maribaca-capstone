import { Container, Row, Col } from 'react-bootstrap';
import Image from '../../assets/jumbotron.png';
import { NavLink } from 'react-router-dom';

const Jumbotron = () => {
  return (
    <Container id="home">
      <Row>
        <Col lg={7} className="d-lg-flex justify-content-center align-items-center my-5 py-5">
          <div>
            <h1 className="quotes fs-2 my-auto">
              Dapatkan pengalaman membaca terbaik melalui gadgetmu<span>.</span>
            </h1>
            <p className="quotes2">Tersedia berbagai macam bacaan yang siap menemani hari-harimu.</p>
            <NavLink to="/login" className="btn btn-read mt-3">
              Mulai Baca
            </NavLink>
          </div>
        </Col>
        <Col lg={5} className="d-none d-lg-flex justify-content-center align-items-center">
          <img src={Image} alt="Jumbotron" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Jumbotron;
