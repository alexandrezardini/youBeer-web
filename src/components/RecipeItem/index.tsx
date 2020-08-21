import React from 'react';

import './styles.css';
//import api from '../../services/api';

export interface Recipe {
  avatar: string;
  recipe: string;
  likes: number;
  id: number;
  name: string;
  type: string;
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
          <span>{recipe.type}</span>
        </div>
      </header>
      <p>{recipe.recipe}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {recipe.likes}</strong>
        </p>
        
      </footer>
    </article>
  );
};

export default RecipeItem;
