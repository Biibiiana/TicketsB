import { useState } from "react";
import { Menu } from './Menu';
import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const [transition, setTransition] = useState(true);
  const handleMenu = () => {
    if (isMenu === transition) {
      setTransition(!transition);
    }
    if (isMenu) {
      setTransition(false);
      setTimeout(() => {
        setIsMenu(false);
      }, 300);
    } else {
      setIsMenu(!isMenu);
    }
  };

  return (
    <header>
      <Link to="/home">
        <Image
          className='logo'
          src='/LogoCompraEntradas.jpg'
          alt='Logo'
        />
      </Link>
      <div className="flex">
        <div className="buttonContainer">
          <button
            className="homeButton"
            onClick={() => {
              handleMenu();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="flexCenter">
          {isMenu && <Menu transition={transition} />}
        </div>
      </div>
    </header>
  );
}
