import { Link } from 'react-router-dom';
import MenuLinks from '../MenuLinks';
import './style.scss';

function SideMenu({ rockets, isMenuOpen, isMobileView, toggleMenu }) {
  return (
    <div
      className={`nav__sidebar position-absolute d-flex align-items-center justify-content-center text-center ${
        isMenuOpen ? '' : 'nav--animate'
      } `}
    >
      <div className='d-flex flex-column'>
        <div className='nav__link'>
          <Link to='/launches' onClick={() => toggleMenu(!isMenuOpen)}>
            PAST LAUNCHES
          </Link>
        </div>

        {isMobileView && (
          <MenuLinks rockets={rockets} toggleMenu={toggleMenu} />
        )}
      </div>
    </div>
  );
}
export default SideMenu;
