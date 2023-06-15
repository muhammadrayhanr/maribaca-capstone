import img from '../../assets/vector.png';
import { Col } from 'react-bootstrap';

const SideSection = () => {
  return (
    <Col lg={6} className="col-vector d-none d-lg-flex justify-content-center align-items-center">
      <img src={img} alt="Vector" className="w-25 h-50 fixed" />
    </Col>
  );
};

export default SideSection;
