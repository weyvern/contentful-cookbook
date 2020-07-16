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
      //I set the state like this!
      setPost(items[0].fields);
    }
    getContent();
    setTimeout(() => setLoading(false), 200);
  }, []);
  return (
    //Notice I can now use post as an object
    <main>
      {/*If loading is still true, show the spinner, else some markup for the post*/}
      <div className="container">
        <div className="row" className="d-flex   mt-5"  > {/* flexbox margin from left and right plus space around or space between and set enough height*/}
          <div className="col-3"  className="mr-4">
            <img
              src={post.imageURL}
              alt={post.title}
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-5 mt-3">
            <div>  
              <h1 className="mb-5">{post.title}</h1>
              <div>{post.description}</div>
            </div>
          </div>
          <div className="col-4 ml-5 mt-3">
            <div>Preparation stuff here</div> {/*Maybe cut it out, could be that we need a new element for every category like 'hot' or 'region' if it go fast do, if not dont*/}
          </div>
        </div>

      <div className="row mt-5">
        <div className="col-3"> 
          <div>Ingredients here</div>
        </div>
        <div className="col-7  pr-5"> 
          <div className="d-flex flex-column align-items-center">
            <h3>COOKING INSTRUCTIONS</h3>
            <div>Instructions here</div>
          </div>
          </div>
        </div>
      </div>
       

      )
    </main>
  );
};

{/*This is the second row which contains a column for ingredients and a column for instructions */}
{/* Needs to have flex direction column*/}
 {/*same as ingredients*/}
 {/*I am not sure if you need to make a <p> for every ingredient or if you can just make a list in contentful and it is vertically aligned automatically*/}
{/* Need to add content for ingredients, instructions and maybe the preparation time etc. stuff*/}
{/*{loading ? (
  <img src={spinner} alt='loading'  />
) : (*/}
  
export default Dish;
