import { Link } from 'react-router-dom';
import './style.scss';

function LaunchArticle({ name, link, imgUrl, description }) {
  return (
    <div className='d-flex justify-content-center'>
      <Link
        to={{ pathname: link }}
        className='article'
        target='_blank'
        rel='noopener'
      >
        <img srcSet={`${imgUrl}`} alt={name} className='article__image' />
        <div className='article__header'>
          <h5 className='m-0 p-2'>{name}</h5>
          <p className='m-0 p-2'>{description}</p>
        </div>
      </Link>
    </div>
  );
}
export default LaunchArticle;
