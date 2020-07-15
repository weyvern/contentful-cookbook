import React from 'react';
import { Link } from 'react-router-dom';
import breakfast from '../assets/img/breakfast.jpg';
import lunch from '../assets/img/lunch.jpg';
import dinner from '../assets/img/dinner.jpg';

const Home = () => {
  return (
    <main className='container mt-5 mb-5'>
      <div className='row'>
        <div className='card col-xs-1 col-md-3 mb-5 mx-auto'>
          <Link to='/breakfast'>
            <img src={breakfast} alt='breakfast' className='img-fluid' />
          </Link>
          <div className='card-body'>
            <h2 className='card-title text-center'>Breakfast</h2>
            <p className='card-text text-center'>
              Enjoy our selection of fresh and balanced breakfasts!
            </p>
          </div>
        </div>
        <div className='card col-xs-1 col-md-3 mb-5 mx-auto'>
          <Link to='/lunch'>
            <img src={lunch} alt='lunch' className='img-fluid' />
          </Link>
          <div className='card-body'>
            <h2 className='card-title text-center'>Lunch</h2>
            <p className='card-text text-center'>
              Discover tasty main courses on a budget.
            </p>
          </div>
        </div>
        <div className='card col-xs-1 col-md-3 mb-5 mx-auto'>
          <Link to='/dinner'>
            <img src={dinner} alt='dinner' className='img-fluid' />
          </Link>
          <div className='card-body'>
            <h2 className='card-title text-center'>Dinner</h2>
            <p className='card-text text-center'>
              Finish your day with an amazing and easy dinner
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
