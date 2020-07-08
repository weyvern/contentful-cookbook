import React, { useState, useEffect } from 'react';
import Dish from './Dish';
import client from '../contentful/client';

const Dishes = ({ title }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client
      .getEntries({ content_type: title })
      .then(res => {
        res.items.forEach(item => {
          client
            .getAsset(item.fields.mainImage.sys.id)
            .then(asset => {
              item.fields.imageURL = `https:${asset.fields.file.url}`;
              setPosts(res.items);
            })
            .catch(err => {
              console.error(err.message);
              setPosts([]);
            });
        });
      })
      .catch(err => {
        console.error(err);
        setPosts([]);
      });
  }, [title]);
  console.log(posts);
  return (
    <main className='container mt-5'>
      <h1 className='text-uppercase text-secondary'>{title}</h1>
      {posts.map(post => (
        <Dish key={post.sys.id} post={post} />
      ))}
    </main>
  );
};

export default Dishes;
