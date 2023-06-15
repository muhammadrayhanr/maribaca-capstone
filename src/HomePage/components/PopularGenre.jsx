import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

const PopularGenre = () => {
  const navigate = useNavigate();
  const [popularGenre] = useState([
    { img: 'https://res.cloudinary.com/dwsgej6rd/image/upload/v1685091005/13_vwqvyn.png', title: 'Programming', url: '/genre/programming' },
    { img: 'https://res.cloudinary.com/dwsgej6rd/image/upload/v1685105698/filsafat_s9izog.jpg', title: 'Philoshophy', url: '/genre/philosophy' },
  ]);

  const toGenrePage = () => {
    navigate('/genre');
  };

  return (
    <>
      <div className="popular-genre d-flex my-3">
        <p className="fs-4 fw-semibold my-auto">Popular Genres</p>
        <span className="ms-auto my-auto btn fw-medium" onClick={toGenrePage}>
          All Genres
        </span>
      </div>
      <Row className="g-2">
        {popularGenre.map((item, index) => (
          <Col key={index} xs={6} lg={12}>
            <Link to={item.url}>
              <Card className="bg-dark text-white">
                <Card.Img src={item.img} className="img-popular-genre" height={80} alt="Card image" />
                <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                  <Card.Title>{item.title}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PopularGenre;
