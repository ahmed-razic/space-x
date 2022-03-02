import './style.scss';

function MenuButton({ isMenuOpen, toggleMenu }) {
  return (
    <button
      type='button'
      onClick={() => toggleMenu(!isMenuOpen)}
      className='nav__button'
    >
      <div className={`nav__button__icon ${isMenuOpen ? 'open ' : ''}`}></div>
    </button>
  );
}
export default MenuButton;
