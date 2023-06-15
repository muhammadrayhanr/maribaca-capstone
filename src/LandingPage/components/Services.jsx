import { Container, Row, Col } from 'react-bootstrap';
import book from '../../assets/book.png';
import devices from '../../assets/devices.png';
import price from '../../assets/price.png';

const Services = () => {
  return (
    <Container className="mt-5 pt-5" id="services">
      <h2 className="fw-semibold heading">
        <span className="strip"></span> Why <span>Choose Us</span>
      </h2>
      <Row className="mt-4 g-3">
        <Col lg={4}>
          <div className="card rounded-3">
            <Row>
              <Col xs={6}>
                <div className="detail mt-3 p-3">
                  <p className="label">Koleksi</p>
                  <h3 className="heading">Ratusan bacaan</h3>
                </div>
              </Col>
              <Col xs={6}>
                <div className="img text-center p-3">
                  <img src={book} className="img-fluid" alt="book" />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
          <div className="card rounded-3">
            <Row>
              <Col xs={6}>
                <div className="detail mt-3 p-3">
                  <p className="label">Tampilan</p>
                  <h3 className="heading">Nyaman maksimal</h3>
                </div>
              </Col>
              <Col xs={6}>
                <div className="img text-center p-3">
                  <img src={devices} className="img-fluid" alt="devices" />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
          <div className="card rounded-3">
            <Row>
              <Col xs={6}>
                <div className="detail mt-3 p-3">
                  <p className="label">Harga</p>
                  <h3 className="heading">Semuanya gratis</h3>
                </div>
              </Col>
              <Col xs={6}>
                <div className="img text-center p-3">
                  <img src={price} className="img-fluid" alt="price" />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
