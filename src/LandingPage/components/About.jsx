import { Container, Row, Col } from 'react-bootstrap';
import img from '../../assets/about.gif';

const About = () => {
  return (
    <Container className="about mt-5 pt-5" id="about">
      <h2 className="heading fw-semibold text-center">
        About <span>Us</span>
      </h2>
      <Row>
        <Col lg={5} className="d-none d-lg-flex justify-content-center align-items-center">
          <img src={img} alt="About" className="img-fluid h-75" />
        </Col>
        <Col lg={7}>
          <div className="px-2 mt-3">
            <h4 className="fw-semibold">
              Yuk, kenalan dengan{' '}
              <a className="little-logo text-decoration-none fw-bold">
                Mari<span>Baca</span>
              </a>
              !
            </h4>
            <div className="detail-about fw-medium py-2">
              <p>MariBaca adalah sebuah website yang dibuat sebagai sarana meningkatkan tingkat literasi di generasi muda Indonesia.</p>
              <p>MariBaca dibuat berdasarkan challenge yang diberikan Skilvul selaku mitra Kampus Merdeka Batch 4 yang mengangkat tema Pendidikan.</p>
              <p>Dengan MariBaca, diharapkan generasi muda bisa dengan mudah menemukan bahan bacaan secara gratis.</p>
              <p>Ikuti terus info mengenai program Skilvul dan Kampus Merdeka:</p>
              <a href="https://skilvul.com/" className="btn btn-socmed me-3 fw-semibold">
                Skilvul
              </a>
              <a href="https://kampusmerdeka.kemdikbud.go.id/" className="btn btn-socmed fw-semibold">
                Kampus Merdeka
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
