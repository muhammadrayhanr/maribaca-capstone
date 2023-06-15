import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, InputGroup, ListGroup, Card, Spinner, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import empty from '../assets/no-bookmark.png';
import './BookmarksPage.css';
// import { version } from 'react-dom';

const BookmarksPage = () => {
  const [dataBookmark, setDataBookmark] = useState([]);
  const [searchBooks, setSearchBooks] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  let verifyLogin = localStorage.getItem('user-info');
  let dataUser = JSON.parse(localStorage.getItem('user-info'));

  const getAPI = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_BOOKMARKS);
      setDataBookmark(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getAPI();
  }, []);

  let dataList = dataBookmark.filter((data) => data.email === dataUser.email);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchBooks(e.target.value);
  };

  const deletedAlert = () => {
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
      icon: 'success',
      title: 'Berhasil menghapus bookmark',
    });
  };

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

  const handleDelete = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_BOOKMARKS}/${id}`);
    deletedAlert();
    getAPI();
  };

  if (searchBooks.length > 0) {
    dataList = dataList.filter((i) => {
      return i.title.toLowerCase().match(searchBooks.toLowerCase());
    });
  }

  useEffect(() => {
    if (!verifyLogin) {
      loginFirst();
      navigate('/login');
    }
  });

  if (isLoading)
    return (
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="danger" />
      </Container>
    );

  return (
    <Container>
      <Row className="mt-5">
        <Col lg={9}>
          <p className="fs-4 fw-semibold">Bookmarks</p>
        </Col>
        <Col lg={3}>
          <InputGroup className="mb-3 w-100">
            <Form.Control type="text" value={searchBooks} onChange={handleChange} placeholder="Search Bookmarks" />
            <InputGroup.Text>
              <i className="bx bx-search-alt-2"></i>
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mt-3 mb-5 g-3">
        {dataList.length == 0 ? (
          <Container className="no-bookmark d-flex flex-column justify-content-center align-items-center">
            <img src={empty} alt="Bookmark still empty" className="my-5 img-fluid img-bookmark-empty" />
            <span className="fw-semibold title-bookmark-empty">Tidak ada bookmark</span>
          </Container>
        ) : (
          <>
            {dataList.map((item) => (
              <Col key={item.id} xs={6} sm={4} md={3} lg={2}>
                <Card className="bg-light">
                  <Link to={item.link} className="text-decoration-none">
                    <Card.Img variant="top" src={item.cover} className="img-genre-book" />
                    <Card.Body>
                      <Card.Text className="text-black title-genre-book">{item.title}</Card.Text>
                    </Card.Body>
                  </Link>
                  <ListGroup.Item>
                    <Button onClick={() => handleDelete(item.id)} className="mx-auto py-0 d-block w-75 mb-2 btn-delete-bookmark">
                      <i className="bx bx-trash"></i>
                    </Button>
                  </ListGroup.Item>
                </Card>
              </Col>
            ))}
          </>
        )}
      </Row>
    </Container>
  );
};

export default BookmarksPage;
