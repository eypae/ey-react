import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies felis eget ex venenatis tempor. Cras porttitor quam sed mi accumsan congue. Pellentesque volutpat, lectus sed faucibus egestas, justo sem eleifend nisl.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p> 1,600 people requested access in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header