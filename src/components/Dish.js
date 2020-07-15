import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Dish = () => {
  let { slug } = useParams();
  useEffect(() => {
    //Get article from contentful using slug
  });
  return <h1>{slug}</h1>;
};

export default Dish;
