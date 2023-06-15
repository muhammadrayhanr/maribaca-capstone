/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Spinner, Row, Col, Button } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Comment from '../../public-components/Comment/Comment';
import '../DetailBook.css';

const MysteryDetail = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  let dataUser = JSON.parse(localStorage.getItem('user-info'));
  let verifyLogin = localStorage.getItem('user-info');

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

  const alert = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Success!',
        text: 'Berhasil menambahkan bookmark.',
        icon: 'success',
        confirmButtonColor: '#db3635',
        confirmButtonText: 'OK',
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate('/bookmarks');
        }
      });
  };

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_MYSTERY}/${params.bookId}`);
        setIsLoading(false);
        setBook(response.data);
      } catch (error) {
        setIsLoading(false);
      }
    };
    if (!verifyLogin) {
      loginFirst();
      navigate('/login');
    }
    getAPI();
  }, [params.bookId]);

  if (isLoading)
    return (
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="danger" />
      </Container>
    );

  const handleBookmark = (e) => {
    e.preventDefault();
    const dataBook = { email: dataUser && dataUser.email, cover: book.cover, title: book.title, link: window.location.href };
    try {
      axios.post(import.meta.env.VITE_API_BOOKMARKS, dataBook);
      alert();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={5} className="d-flex justify-content-center">
          <img src={book.cover} alt="Cover" className="w-50 book-cover mx-auto rounded img-fluid mb-3" />
        </Col>
        <Col lg={7}>
          <span className="fs-4 fw-semibold">{book.title}</span>
          <table className="table table-borderless pt-3 mx-auto">
            <tbody>
              <tr>
                <td>Bahasa</td>
                <td>: {book.language}</td>
              </tr>
              <tr>
                <td>Pengarang</td>
                <td>: {book.author}</td>
              </tr>
              <tr>
                <td>Tahun Rilis</td>
                <td>: {book.released}</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td>: {book.genre}</td>
              </tr>
            </tbody>
          </table>
          <span className="fs-5 fw-semibold">Sinopsis</span>
          <p className="book-synopsis p-1">{book.synopsis}</p>

          <div className="d-flex justify-content-end mb-5 justify-content-between">
            <Link to="/genre/mystery">
              <Button className="btn-back">Kembali</Button>
            </Link>
            <Button onClick={handleBookmark} className="btn-bookmark me-2">
              <i className="bx bx-heart"></i> Bookmark
            </Button>
            <Link to={`/genre/mystery/read/${book.id}`}>
              <Button className="btn-read-book">Mulai Baca</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <Comment />
    </Container>
  );
};

export default MysteryDetail;
