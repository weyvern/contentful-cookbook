import React from 'react';
import about from '../assets/img/about.jpg';

const About = () => {
  return (
    <main class='container mt-5 mb-5'>
      <div class='row'>
        <div class='col-xs-1 col-md-4'>
          <h1 class='text-center'>About this app</h1>
          <h2>Created by:</h2>
          <ul>
            <li>
              Islam Gönder -
              <a
                href='https://github.com/thatseasy'
                target='_blank'
                rel='noopener noreferrer'
              >
                @thatseasy
              </a>
            </li>
            <li>
              Lucas A Cuadra -
              <a
                href='https://github.com/dusan'
                target='_blank'
                rel='noopener noreferrer'
              >
                @lucasacuadra
              </a>
            </li>
            <li>
              Dusan Varcakovic -
              <a
                href='https://github.com/lucasacuadra'
                target='_blank'
                rel='noopener noreferrer'
              >
                @dusan
              </a>
            </li>
            <li>
              Jorge Serrano -
              <a
                href='https://github.com/weyvern'
                target='_blank'
                rel='noopener noreferrer'
              >
                @weyvern
              </a>
            </li>
          </ul>
          <h2>Powered by:</h2>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Bootstrap 4.5</li>
            <li>
              Bootswatch -
              <a
                href='https://bootswatch.com/minty/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Minty
              </a>
            </li>
          </ul>
          <h2>Repo: </h2>
          <p>
            <a
              href='https://github.com/weyvern/contentful-cookbook/'
              target='_blank'
              rel='noopener noreferrer'
            >
              @weyvern/contentful-cookbook
            </a>
          </p>
          <h2>Based on:</h2>
          <p>
            <a
              href='https://github.com/juliamj/cookbook/'
              target='_blank'
              rel='noopener noreferrer'
            >
              @juliamj/cookbook
            </a>
          </p>
        </div>
        <div class='col-xs-1 col-md-8'>
          <img src={about} alt='About' id='about' class='mb-5' />
        </div>
      </div>
    </main>
  );
};

export default About;
