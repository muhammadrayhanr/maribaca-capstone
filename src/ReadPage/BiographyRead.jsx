import axios from 'axios';
import { Button, Container, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BiographyRead = () => {
  const [book, setBook] = useState({});
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BIOGRAPHY}/${params.bookId}`);
        setIsLoading(false);
        setBook(response.data);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getAPI();
  }, [params.bookId]);

  if (isLoading)
    return (
      <Container className="vh-100 d-flex justify-content align-items-center">
        <Spinner animation="border" variant="danger" />
      </Container>
    );

  return (
    <>
      <Container>
        <Link to={`/genre/biography/${book.id}`}>
          <Button className="btn-back my-5">Kembali</Button>
        </Link>
        <div className="mb-4">
          <h1 className="fs-3 fw-semibold text-center">{book.title}</h1>
          <h2 className="text-end fs-5 mt-4 mb-5 fst-italic">{book.author}</h2>
        </div>

        <iframe src={book.link} className="w-100 vh-100" allow="autoplay"></iframe>
      </Container>
    </>
  );
};

export default BiographyRead;
