import './style.scss';

function MainHeader({ name, description }) {
  return (
    <div className='container'>
      <h1 className='header__name'>{name}</h1>
      <p className='header__description'>{description}</p>
    </div>
  );
}
export default MainHeader;
