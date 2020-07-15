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
      setPost(items);
    }
    getContent();
    setTimeout(() => setLoading(false), 200);
  }, []);
  return(
    <div>
    helloworld
    </div>
  );
};



export default Dish;
