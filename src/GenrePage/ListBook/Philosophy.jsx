/* eslint-disable react-hooks/exhaustive-deps */
// import axios from "axios";
import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Card, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getPostPhilosophy } from '../../redux/features/postPhilosophy';

const Philosophy = () => {
  const navigate = useNavigate();
  const { postsPhilosophy, loading } = useSelector(
    (state) => state.postPhilosophy
    );
  const dispatch = useDispatch();
  const [books, setBooks] = useState(postsPhilosophy);
  const [searchBooks, setSearchBooks] = useState("");
  let dataUser = JSON.parse(localStorage.getItem('user-info'))
  let verifyLogin = localStorage.getItem("user.info");


  const loginFirst = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: top,
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

  useEffect(() => {
    //ketika masuk di dalam genre page masih diminta login padahal sudah login!!
     if(!dataUser && !verifyLogin){
      loginFirst()
      navigate('/login')
     }
      dispatch(getPostPhilosophy());
    
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchBooks(e.target.value);
    const searchBook = e.target.value;

    if (searchBook.length > 0) {
      const book = postsPhilosophy.filter((i) => {
        return i.title.toLowerCase().match(searchBook.toLocaleLowerCase());
      });

      setBooks(book);
    }
  };

  useEffect(() => {
    setBooks(postsPhilosophy);
  }, [loading]);

  if (loading) {
    return (
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="danger" />
      </Container>
    );
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col lg={9}>
          <p className="fs-4 fw-semibolf">Philosophy Genre</p>
        </Col>
        <Col lg={3}>
          <InputGroup className="mb-3 w-100">
            <Form.Control type="text" value={searchBooks} onChange={handleChange} placeholder="Search Book" />
            <InputGroup.Text>
              <i className="bx bx-search-alt-2"></i>
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>

      <Row className="mt-3 mb-5 g-3">
        {books?.map((item) => (
          <Col key={item.id} xs={6} sm={4} md={3} lg={2}>
            <Link to={`/genre/philosophy/${item.id}`} className="text-decoration-none">
              <Card className="bg-light">
                <Card.Img variant="top" src={item.cover} className="img-genre-book" />
                <Card.Body>
                  <Card.Text className="text-black title-genre-book">{item.title}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Philosophy;
