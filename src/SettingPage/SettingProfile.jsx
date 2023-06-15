/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Profile from './components/Profile';

import './SettingPage.css';

const SettingProfile = () => {
  return (
    <Container className="mt-5">
      <NavLink to="/setting/profile" className="text-decoration-none">
        <span className="nav-setting fw-semibold ps-2 px-2 pt-1 rounded pb-3">Profile</span>
      </NavLink>
      <NavLink to="/setting/privacy" className="text-decoration-none">
        <span className="text-black px-2 pt-1 rounded pb-3">Privacy</span>
      </NavLink>

      <Profile />
    </Container>
  );
};

export default SettingProfile;
