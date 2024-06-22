import PropTypes from 'prop-types';



const Logo = ({ src, alt, href }) => {
  return (
    <div>
      {LogoData.map((item) => {
        return (
          <a className='w-[180px] block' key={item.href} href={item.href}>
            <img src={item.src} alt={item.alt} />
          </a>
        )
      })}
    </div>
  );
};

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
};

const LogoData = [
  {
    href: '#',
    src: '/assits/image/Logo1.jpg',
    alt: 'logo'
  }
]

export default Logo;
