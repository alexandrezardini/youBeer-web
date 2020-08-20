import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/imgs/logo.png';
import createIcon from '../../assets/create-recipe-icon.svg'
import listIcon from '../../assets/list-recipe-icon.svg'
import beerIcon from '../../assets/beer-icon.svg'


export default function Landing() {
  return (
    <div id='landing-page'>
      <div id='landing-page-container' className='container'>
        <div className='logo-container'>
          <img src={logo} alt='YouBeer' />
          <h2>Sua plataforma de compartilhar e guardar as suas melhroes receitas.</h2>
        </div>
        <div className="buttons-container">
            <Link to='/' className='create-recipe'>
                <img src={createIcon} alt='cadastrar receita'/>
                Cadastrar receita
            </Link>
            <Link to='/' className='list-recipe'>
                <img src={listIcon} alt='Pesquisar receitas'/>
                Pesquisar receita
            </Link>
        </div>
        <span className="total-beers">
        Total de 20 receitas já cadastradas <img src={beerIcon} alt='Cerveja'></img>
        </span>
      </div>
    </div>
  );
}
