/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { Col, Card, Container, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import './GenrePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { getGenre } from '../redux/features/featuresGenre/listGenre';

const GenrePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { genre, loading } = useSelector((state) => state.genre);
  const [listGenre, setListGenre] = useState(genre);
  const [searchGenres, setSearchGenres] = useState('');

  let verifyLogin = localStorage.getItem('user-info');
  useEffect(() => {
    if (!verifyLogin) {
      loginFirst();
      navigate('/login');
    }
    dispatch(getGenre());
  }, []);

  const loginFirst = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'warning',
      title: 'Silakan Masuk terlebih dahulu!',
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchGenres(e.target.value);
    const searchGenre = e.target.value;

    if (searchGenre.length > 0) {
      const Genre = genre.filter((item) => {
        return item.title.toLowerCase().match(searchGenre.toLowerCase());
      });
      setListGenre(Genre);
    }
  };

  useEffect(() => {
    setListGenre(genre);
  }, [loading]);

  if (loading)
    return (
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="danger" />
      </Container>
    );

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col lg={9}>
            <p className="fs-4 fw-semibold">All Genres</p>
          </Col>
          <Col lg={3}>
            <InputGroup className="mb-3 w-100">
              <Form.Control type="text" value={searchGenres} onChange={handleChange} placeholder="Search Genre" />
              <InputGroup.Text>
                <i className="bx bx-search-alt-2"></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>

        <Row className="mt-3 g-2">
          {listGenre.map((item) => (
            <Col key={item.id} md={6} lg={4}>
              <Link to={item.url}>
                <Card className="bg-dark text-white card-genre">
                  <Card.Img src={item.img} className="img-popular-genre" height={150} alt="Card image" />
                  <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                    <Card.Title>{item.title}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default GenrePage;
