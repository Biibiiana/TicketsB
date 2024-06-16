import { Menu } from './Menu';
import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <Image
          className='logo'
          src='/LogoCompraEntradas.jpg'
          alt='Logo'
        />
      </Link>
      <Menu />
    </header>
  );
}
