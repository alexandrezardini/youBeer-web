import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
//import api from '../../services/api';

export interface Recipe {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsApp: string;
}

interface RecipeItemProps {
  recipe: Recipe;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe }) => {

  // function createNewConnection() {
  //   api.post('connections', {
  //     user_id: recipe.id
  //   });
  // }
  return (
    <article className='recipe-item'>
      <header>
        <img src={recipe.avatar} alt={recipe.name} />
        <div>
          <strong>{recipe.name}</strong>
          <span>{recipe.subject}</span>
        </div>
      </header>
      <p>{recipe.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {recipe.cost}</strong>
        </p>
        <a
          target='_blank'
          onClick={() => {}}
          href={`https://wa.me/${recipe.whatsApp}`}
        >
          <img src={whatsAppIcon} alt='Entrar em contato' />
          Entrar em Contato
        </a>
      </footer>
    </article>
  );
};

export default RecipeItem;
