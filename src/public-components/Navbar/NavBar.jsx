import { Container, Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem('user-info'));
  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };
  const url = import.meta.env.VITE_URL;
  const windowsLocateLoginRegister = window.location.href == url + '/login' || window.location.href == url + '/register';
  const alreadyLogin = localStorage.getItem('user-info');

  const liveChat = (e) => {
    e.preventDefault();
    window.chatwootSettings = {
      hideMessageBubble: true,
      position: 'right',
      locale: 'en',
      type: 'standard',
      showPopoutButton: true,
    };
    (function (d, t) {
      var BASE_URL = 'https://app.chatwoot.com';
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + '/packs/js/sdk.js';
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: 'D3WSptpW1rYwtzR8D9VH9Mqs',
          baseUrl: BASE_URL,
        }),
          window.$chatwoot.toggle('open'),
          window.$chatwoot.toggleBubbleVisibility('hide');
      };
    })(document, 'script');
  };

  return (
    <>
      <Navbar expand="md" className="navbar">
        <Container>
          <Navbar.Brand>
            {localStorage.getItem('user-info') ? (
              <>
                <NavLink to="/home" className="brand fw-bold text-decoration-none">
                  Mari<span>Baca</span>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/" className="brand fw-bold text-decoration-none">
                  Mari<span>Baca</span>
                </NavLink>
              </>
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {alreadyLogin ? (
              <Nav className="mx-auto nav-link">
                <NavLink to="/home" className="nav-home text-end px-2 py-2 text-decoration-none">
                  <span>Home</span>
                </NavLink>
                <NavLink to="/genre" className="nav-home text-end px-2 py-2 text-decoration-none">
                  <span>Genre</span>
                </NavLink>
                <NavLink to="/bookmarks" className="nav-home text-end px-2 py-2 text-decoration-none">
                  <span>Bookmarks</span>
                </NavLink>
              </Nav>
            ) : (
              <Nav className="mx-auto nav-link">
                {windowsLocateLoginRegister ? null : (
                  <>
                    <Nav.Link href="#home" className="nav-item text-end">
                      Home
                    </Nav.Link>
                    <Nav.Link href="#about" className="nav-item text-end">
                      About
                    </Nav.Link>
                    <Nav.Link href="#services" className="nav-item text-end">
                      Services
                    </Nav.Link>
                    <Nav.Link href="#faq" className="nav-item text-end">
                      FAQ
                    </Nav.Link>
                  </>
                )}
              </Nav>
            )}
            <div className="list-button">
              {alreadyLogin ? (
                <>
                  <div className="user-info d-flex justify-content-end">
                    <img src={user && user.avatar} alt="avatar" className="user-avatar rounded" />
                    <DropdownButton className="drop-btn" id="dropdown-item-button" title={user && user.name}>
                      <Link to="/setting/profile" className="text-decoration-none text-black">
                        <Dropdown.Item as="button" className="drop-btn-info">
                          <i className="bx bx-cog"></i> Setting
                        </Dropdown.Item>
                      </Link>
                      <Dropdown.Item as="button" className="drop-btn-info" onClick={liveChat}>
                        <i className="bx bx-headphone"></i> Contact
                      </Dropdown.Item>
                      <Dropdown.Item as="button" className="drop-btn-info" onClick={logout}>
                        <i className="bx bx-log-out"></i> Logout
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                </>
              ) : (
                <>
                  <div className="d-flex justify-content-end py-2">
                    <NavLink to="/register" className="btn btn-register me-2">
                      Daftar
                    </NavLink>
                    <NavLink to="/login" className="btn btn-login">
                      Masuk
                    </NavLink>
                  </div>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
