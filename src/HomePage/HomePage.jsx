/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "./components/Carousel";
import NewReleases from "./components/NewReleases";
import PopularGenre from "./components/PopularGenre";
import PopularThisWeek from "./components/PopularThisWeek";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const HomePage = () => {
  const navigate = useNavigate();
  let verifyLogin = localStorage.getItem("user-info");

  const loginFirst = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "warning",
      title: "Silakan Masuk terlebih dahulu!",
    });
  };

  useEffect(() => {
    if (!verifyLogin) {
      loginFirst();
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={8}>
            <Carousel />
          </Col>
          <Col lg={4}>
            <PopularGenre />
          </Col>
        </Row>
        <PopularThisWeek />
        <NewReleases />
      </Container>
    </>
  );
};

export default HomePage;
