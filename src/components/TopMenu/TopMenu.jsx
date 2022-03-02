import SpaceXSvgLogo from './../Logo';
import MenuLinks from './../MenuLinks';
import MenuButton from './../MenuButton';

function TopMenu({ rockets, isMenuOpen, isMobileView, toggleMenu }) {
  return (
    <div className='col d-flex justify-content-between align-items-center position-absolute'>
      <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {!isMobileView && <MenuLinks rockets={rockets} toggleMenu={toggleMenu} />}
      <SpaceXSvgLogo />
    </div>
  );
}
export default TopMenu;
