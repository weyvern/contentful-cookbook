import React from 'react';
import { NavLink } from 'react-router-dom';

const Dish = ({ post }) => {
  return (
    <div className='card col-xs-6 col-md-3 m-2'>
      <img
        className='card-img-top'
        src={post.fields.imageURL}
        alt={post.fields.title}
      />
      <div className='card-body'>
        <h5 className='card-title'>{post.fields.title}</h5>
        <p className='card-text'>{post.fields.description}</p>
      </div>
      <div className='card-body'>
        <NavLink to={`/${post.fields.slug}`} className='card-link'>
          More
        </NavLink>
      </div>
    </div>
  );
};

export default Dish;
