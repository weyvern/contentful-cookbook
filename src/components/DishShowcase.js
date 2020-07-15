import React from 'react';
import { NavLink } from 'react-router-dom';

const DishShowcase = ({ post: { fields }, type }) => {
  const { imageURL, title, description, slug } = fields;
  return (
    <div className='card col-xs-6 col-md-4 m-2'>
      <img className='card-img-top' src={imageURL} alt={title} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
      </div>
      <div className='card-body'>
        <NavLink to={`/${type}/${slug}`} className='card-link'>
          More
        </NavLink>
      </div>
    </div>
  );
};

export default DishShowcase;
