import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './BackToTop.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <Button onClick={scrollToTop} className="btn-to-top" style={{ display: visible ? 'inline' : 'none' }}>
      <i className="bx bx-chevron-up bx-sm"></i>
    </Button>
  );
};

export default BackToTop;
