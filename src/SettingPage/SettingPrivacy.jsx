import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Privacy from './components/Privacy';
import './SettingPage.css';

const SettingPrivacy = () => {
  return (
    <Container className="mt-5">
      <NavLink to="/setting/profile" className="text-decoration-none">
        <span className="px-2 ps-2 text-black pt-1 rounded pb-3">Profile</span>
      </NavLink>
      <NavLink to="/setting/privacy" className="text-decoration-none">
        <span className="nav-setting fw-semibold px-2 pt-1 rounded pb-3">Privacy</span>
      </NavLink>
      <Privacy />
    </Container>
  );
};

export default SettingPrivacy;
