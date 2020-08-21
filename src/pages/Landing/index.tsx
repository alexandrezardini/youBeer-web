import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/imgs/logo.png';
import createIcon from '../../assets/imgs/icons/create-recipe-icon.svg';
import listIcon from '../../assets/imgs/icons/list-recipe-icon.svg';
import beerIcon from '../../assets/imgs/icons/beer-icon.svg';
import landingImg from '../../assets/imgs/hero-img.png'

function Landing() {
  return (
    <div id='landing-page'>
      <div id='landing-page-content' className='container'>
        <div className='logo-container'>
          <img src={logo} alt='YouBeer'/>
          <h2>
            Sua plataforma de compartilhar e guardar as suas melhores receitas.
          </h2>
        </div>
        <img
          src={landingImg}
          alt='Plataforma de receitas'
          className='hero-image'
        />
        
        <div className='buttons-container'>
          <Link to='/create' className='create-recipe'>
            <img src={createIcon} alt='cadastrar receita' />
            Cadastrar receita
          </Link>
          <Link to='/list' className='list-recipe'>
            <img src={listIcon} alt='Pesquisar receitas' />
            Pesquisar receita
          </Link>
        </div>
        <span className='total-beers'>
          Total de 20 receitas já cadastradas
          <img src={beerIcon} alt='Cerveja'></img>
        </span>
      </div>
    </div>
  );
}

export default Landing;
