import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../contentful/client';
import spinner from '../assets/img/spinner.gif';

const Dish = () => {
  let { slug, type } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  useEffect(() => {
    async function getContent() {
      let entries = await client.getEntries({
        content_type: type,
        'fields.slug[in]': slug
      });
      const { items } = entries;
      for (const item of items) {
        let image = await client.getAsset(item.fields.mainImage.sys.id);
        item.fields.imageURL = `https:${image.fields.file.url}`;
      }
      setPost(items[0].fields);
    }
    getContent();

    setTimeout(() => setLoading(false), 200);
  }, []);
  return (
    <main className='container mt-5'>
      {loading ? (
        <img src={spinner} alt='loading' className='d-block mx-auto' />
      ) : (
        <div class='row'>
          <div class='col-sm col-md-3 mx-auto'>
            <img src={post.imageURL} alt={post.title} className='img-fluid' />
          </div>
          <div class='col-sm col-md-8 mx-auto'>
            <h1 className='mb-5'>{post.title}</h1>
            <div>{post.description}</div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Dish;
