import React, { useState, FormEvent, useEffect } from 'react';
import './styles.css';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import beerIcon from '../../assets/imgs/icons/beer-icon.svg';
import api from '../../services/api';
import RecipeItem, { Recipe } from '../../components/RecipeItem';

import './styles.css';

function RecipesList() {
  //const [totalTeachers, setTotalTeachers] = useState({});
  const [searchMessage, setSearchMessage] = useState(
    'Selecione os tipos e a fermentação.'
  );
  const [recipes, setRecipes] = useState([]);
  const [type, setType] = useState('');
  const [ale_type, setAleType] = useState('');
  const [ales, setAles] = useState('');

  async function searchRecipes(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await api.get('recipes', {
        params: { type, ale_type, ales }
      });

      setRecipes(response.data);
      setSearchMessage('Nenhuma receita encontrada com sua pesquisa.');
    } catch (e) {
      setSearchMessage('Preencha todos os campos para pesquisar.');
    }
  }

  useEffect(() => {
    try {
      api
        .get('recipes')
        // .then(response => setTotalTeachers(response.data.total));
    } catch (e) {
      console.log('erro ao carregar');
    }
  }, []);

  return (
    <div id='page-recipe-list' className='container'>
      <PageHeader
        title='Estes são as receitas disponiveis'
        pageName='Estudar'
        iconLeft={beerIcon}
        textRight={`Nós temos no total 20 receitas cadastradas`}
      >
        <form id='search-recipes' onSubmit={searchRecipes}>
          <Select
            name='type'
            label='Tipos'
            value={type}
            onChange={e => setType(e.target.value)}
            options={[
                { value: 'Weiss', label: 'Weiss' },
                { value: 'Stout', label: 'Stout' },
                { value: 'Ales', label: 'Ales' },
                { value: 'Lagers', label: 'Lagers' }
            ]}
          />
          <Select
            name='ale_type'
            label='Fermentação'
            value={ale_type}
            onChange={e => setAleType(e.target.value)}
            options={[
              { value: 'Pure Weiss', label: 'Pure Weiss' },
              { value: 'Sweet Stout', label: 'Sweet Stout' },
              { value: 'Pale Ale', label: 'Pale Ale' },
              { value: 'English Ale', label: 'English Ale' },
              { value: 'Pilsen', label: 'Pilsen' },
              { value: 'Vienna', label: 'Vienna' },
              { value: 'Munich', label: 'Munich' }
            ]}
          />
          <Select
            name='ales'
            label='Grãos'
            value={ales}
            onChange={e => setAles(e.target.value)}
            options={[
              { value: 'Weissbier', label: 'Weissbier' },
              { value: 'Dry Stout', label: 'Dry Stout' },
              { value: 'India Pale', label: 'India Pale' },
              { value: 'Strong Ale', label: 'Strong Ale' },
              { value: 'Lager', label: 'Lager' },
              { value: 'Vienna', label: 'Vienna' },
              { value: 'Escura', label: 'Escura' }
            ]}
          />

          <button type='submit'>Procurar</button>
        </form>
      </PageHeader>

      <main>
        {recipes.length === 0 ? (
          <div className='empty-search'>
            <h1 className='title-empty-list'>{searchMessage}</h1>
          </div>
        ) : (
          recipes.map((recipe: Recipe) => (
            <RecipeItem key={recipe.id} recipe={recipe} />
          ))
        )}
      </main>
    </div>
  );
}

export default RecipesList;
