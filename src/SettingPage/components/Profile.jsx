import axios from 'axios';
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Profile = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem('user-info'));
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(user.avatar);
  const [preview, setPreview] = useState('');

  const preset_key = 'maribaca';
  const cloud_name = 'dwsgej6rd';

  const alert = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Success!',
        text: 'Silakan Masuk kembali!',
        icon: 'success',
        confirmButtonColor: '#db3635',
        confirmButtonText: 'OK',
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
  };

  const formData = { name: name, email: email, avatar: avatar };

  const loadImage = (e) => {
    const img = e.target.files[0];
    setAvatar(img);
    setPreview(URL.createObjectURL(img));
    const newFormData = new FormData();
    newFormData.append('file', img);
    newFormData.append('upload_preset', preset_key);
    newFormData.append('cloud_name', cloud_name);
    axios
      .post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, newFormData)
      .then((res) => setAvatar(res.data.secure_url))
      .catch((err) => console.log(err));
  };

  const updateUser = (e) => {
    e.preventDefault();
    try {
      axios.put(`https://64670f90ba7110b663ae7915.mockapi.io/users/${user.id}`, formData);
      localStorage.clear();
      alert();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="mb-5 pb-5 bg-row rounded">
        <Col md={6}>
          {preview ? (
            <figure className="text-center mt-4">
              <img src={preview} className="rounded img-fluid profile-photo" alt="Profile Photo" />
            </figure>
          ) : (
            <figure className="text-center mt-4">
              <img src={user.avatar} className="rounded img-fluid profile-photo" alt="Profile Photo" />
            </figure>
          )}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Ganti foto profil</Form.Label>
            <Form.Control type="file" onChange={loadImage} disabled />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form onSubmit={updateUser}>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan nama" required={true} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan email" disabled />
            </Form.Group>
            <div className="text-end mt-4">
              <Button variant="dark" className="px-4" type="submit" disabled>
                Simpan
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
