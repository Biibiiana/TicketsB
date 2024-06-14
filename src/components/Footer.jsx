import { Image, Link } from '@chakra-ui/react'

export default function Footer () {
  return (
    <>
    <hr />
    <footer className='footer'>
      <div className='columns'>
        <h4 className='titleAlign'>Nuestras redes sociales</h4>
        <hr />
        <div className='socialMedia'>
          <div className='rowSocialMedia row-cols-1 row-cols-sm-3 m-2'>
            <Link href='https://www.facebook.com/?locale=es_ES' className='socialMediaLink'>
              <Image  
                className='socialMediaImg'
                boxSize='25px'
                src='/facebook.png'
                alt='Logo de Facebook'
              />
            </Link>
            <Link href='https://www.instagram.com/' className='socialMediaLink'>
              <Image  
                className='socialMediaImg'
                boxSize='25px'
                src='/Instagram.png'
                alt='Logo de Instagram'
              />
            </Link>
            <Link href='https://web.whatsapp.com/' className='socialMediaLink'>
              <Image  
                className='socialMediaImg'
                boxSize='25px'
                src='/whatsapp.png'
                alt='Logo de WhatsApp'
              />
            </Link>
          </div>
          <div className='rowSocialMedia row-cols-1 row-cols-sm-3 m-2'>
            <Link href='https://www.youtube.com/' className='socialMediaLink'>
              <Image  
                className='socialMediaImg'
                boxSize='25px'
                src='/youtube.png'
                alt='Logo de Youtube'
              />
            </Link>
            <Link href='https://twitter.com/i/flow/login' className='socialMediaLink'>
              <Image  
                className='socialMediaImg'
                boxSize='25px'
                src='/Twitter.png'
                alt='Logo de Twitter'
              />
            </Link>
            <Link href='https://web.telegram.org/k/' className='socialMediaLink'>
              <Image  
                className='socialMediaImg'
                boxSize='25px'
                src='/telegram.jpg'
                alt='Logo de Telegram'
              />
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className='row'>
        <div className='columns'>
          <h4>Ayuda</h4>
          <Link href='#' className='footerLink'>Preguntas frequentes</Link>
          <Link href='#' className='footerLink'>Contacto</Link>
        </div>
        <div className='columns'>
          <h4>Información útil</h4>
          <Link href='#' className='footerLink'>Condiciones de uso</Link>
          <Link href='#' className='footerLink'>Política de cookies</Link>
          <Link href='#' className='footerLink'>Aviso de privacidad</Link>
        </div><div className='columns'>
          <h4>Sobre nosotros</h4>
          <Link href='#' className='footerLink'>Quienes somos</Link>
          <Link href='#' className='footerLink'>Trabaja con nosotros</Link>
        </div>
        <div className='columns'>
          <h4>Nuestra web</h4>
          <Link href='#' className='footerLink'>Nuestra historia</Link>
          <Link href='#' className='footerLink'>Ética y sostenibilidad</Link>
          <Link href='#' className='footerLink'>La redacción</Link>
        </div>
      </div>
    </footer>
    </>
  )
}