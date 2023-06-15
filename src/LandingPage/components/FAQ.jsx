import { Container, Row, Col, Accordion } from 'react-bootstrap';
import faq from '../../assets/faq.png';

const FAQ = () => {
  return (
    <Container className="mt-5 pt-5" id="faq">
      <h2 className="heading text-center fw-semibold">
        FA<span>Q</span>
      </h2>
      <p className="text-center fw-medium">
        Frequently Asked <span>Questions</span>
      </p>
      <Row className="mt-5">
        <Col lg={6} className="d-none d-lg-flex justify-content-center align-items-center">
          <img src={faq} alt="faq" className="img-fluid w-75" />
        </Col>
        <Col lg={6} className="mb-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Bagaimana cara membaca di MariBaca?</Accordion.Header>
              <Accordion.Body>Sebelum mulai membaca, kamu harus mendaftar akun baru dulu, kemudian login menggunakan akun tersebut. Jika kamu sudah login, maka selamat! Kamu sudah bisa menikmati pengalaman membaca yang menyenangkan!</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Apakah MariBaca tersedia di smartphone?</Accordion.Header>
              <Accordion.Body>Ya. MariBaca dibangun dengan fitur responsive sehingga memungkinkan pengguna untuk membukanya melalui smartphone, tablet, ataupun desktop.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
