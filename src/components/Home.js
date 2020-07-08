import React from 'react';
import breakfast from '../assets/img/breakfast.jpg';
import lunch from '../assets/img/lunch.jpg';
import dinner from '../assets/img/dinner.jpg';

const Home = () => {
  return (
    <main class='container mt-5 mb-5'>
      <div class='row'>
        <div class='card col-xs-1 col-md-3 mb-5 mx-auto'>
          <a href='breakfast.html'>
            <img src={breakfast} alt='breakfast' class='img-fluid' />
          </a>
          <div class='card-body'>
            <h2 class='card-title text-center'>Breakfast</h2>
            <p class='card-text text-center'>
              Enjoy our selection of fresh and balanced breakfasts!
            </p>
          </div>
        </div>
        <div class='card col-xs-1 col-md-3 mb-5 mx-auto'>
          <a href='lunch.html'>
            <img src={lunch} alt='lunch' class='img-fluid' />
          </a>
          <div class='card-body'>
            <h2 class='card-title text-center'>Lunch</h2>
            <p class='card-text text-center'>
              Discover tasty main courses on a budget.
            </p>
          </div>
        </div>
        <div class='card col-xs-1 col-md-3 mb-5 mx-auto'>
          <a href='dinner.html'>
            <img src={dinner} alt='dinner' class='img-fluid' />
          </a>
          <div class='card-body'>
            <h2 class='card-title text-center'>Dinner</h2>
            <p class='card-text text-center'>
              Finish your day with an amazing and easy dinner
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
