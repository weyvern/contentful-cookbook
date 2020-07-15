import React, { useState, useEffect } from 'react';
import DishShowcase from './DishShowcase';
import client from '../contentful/client';
import spinner from '../assets/img/spinner.gif';

const Dishes = ({ title }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getContent() {
      let entries = await client.getEntries({ content_type: title });
      const { items } = entries;
      for (const item of items) {
        let image = await client.getAsset(item.fields.mainImage.sys.id);
        item.fields.imageURL = `https:${image.fields.file.url}`;
      }
      setPosts(items);
    }
    getContent();
    setTimeout(() => setLoading(false), 200);
  }, [title]);
  return (
    <main className='container mt-5'>
      <h1 className='text-uppercase text-secondary'>{title}</h1>
      {loading ? (
        <img src={spinner} alt='loading' />
      ) : (
        <div className='row'>
          {posts.map(post => (
            <DishShowcase key={post.sys.id} post={post} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Dishes;
