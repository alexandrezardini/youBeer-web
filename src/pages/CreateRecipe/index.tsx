import React, { useState, FormEvent } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/imgs/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import beerIcon from '../../assets/imgs/icons/beer-icon.svg';
import api from '../../services/api';

import './styles.css';

function CreateRecipe() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [recipe, setRecipe] = useState('');
  const [type, setType] = useState('');

  const [aleItems, setAleItems] = useState([{ ale_type: '', ales: '' }]);

  function addNewAleItem() {
    setAleItems([...aleItems, { ale_type: '', ales: '' }]);
  }

  function setAletemValue(position: number, field: string, value: string) {
    const updatedAleItems = aleItems.map((aleItem, index) => {
      if (index === position) {
        return { ...aleItem, [field]: value };
      }
      return aleItem;
    });
    setAleItems(updatedAleItems);
  }

  function handleCreateRecipe(e: FormEvent) {
    e.preventDefault();
    api
      .post('recipes', {
        name,
        avatar,
        recipe,
        type,
        likes: 0,
        ales: aleItems
      })
      .then(() => {
        alert('Cadastro Realizado')
        history.push('/');
      })
      .catch((e: any) => console.log(e, 'ocorreu um erro'));
  }

  return (
    <div id='page-beer-form' className='container'>
      <PageHeader
        title='A melhor forma de guardar suas receitas'
        pageName='Cadastrar receita'
        iconLeft={beerIcon}
        textRight={`Compartilhe ou deixe privado`}
      />
      <main>
        <form onSubmit={handleCreateRecipe}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name='name'
              label='Nome completo'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              name='avatar'
              label='Avatar'
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Tipo Principal</legend>

            <Select
              name='type'
              label='Tipos de cerveja'
              value={type}
              onChange={e => setType(e.target.value)}
              options={[
                { value: 'Weiss', label: 'Weiss' },
                { value: 'Stout', label: 'Stout' },
                { value: 'Ales', label: 'Ales' },
                { value: 'Lagers', label: 'Lagers' }
              ]}
            />
          </fieldset>

          <fieldset>
            <legend>
              Fermentação
              <button type='button' onClick={addNewAleItem}>
                + Nova classe
              </button>
            </legend>
            {aleItems.map((aleItem, index) => {
              return (
                <div className='ale-item' key={index}>
                  <Select
                    name='ale_type'
                    label='Fermentação'
                    value={aleItem.ale_type}
                    onChange={e =>
                      setAletemValue(index, 'ale_type', e.target.value)
                    }
                    options={[
                      { value: 'PureWeiss', label: 'PureWeiss' },
                      { value: 'Sweet Stout', label: 'Sweet Stout' },
                      { value: 'English Ale', label: 'English Ale' },
                      { value: 'Pale Ale', label: 'Pale Ale' },
                      { value: 'Pilsen', label: 'Pilsen' },
                      { value: 'Vienna', label: 'Vienna' },
                      { value: 'Munich', label: 'Munich' }
                    ]}
                  />

                  <Select
                    name='ales'
                    label='Grão'
                    value={aleItem.ales}
                    onChange={e =>
                      setAletemValue(index, 'ales', e.target.value)
                    }
                    options={[
                      { value: 'Weissbier', label: 'Weissbier' },
                      { value: 'Dry Stout', label: 'Dry Stout' },
                      { value: 'India Pale', label: 'India Pale' },
                      { value: 'Strong Ale', label: 'Strong Ale' },
                      { value: 'Pilsen', label: 'Pilsen' },
                      { value: 'Lager', label: 'Lager' },
                      { value: 'Clara', label: 'Clara' }
                    ]}
                  />
                </div>
              );
            })}
            <Textarea
              name='recipe'
              label='Receita'
              onChange={e => setRecipe(e.target.value)}
            />
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt='Aviso importante' />
              Importante! <br />
              Preencha todos os dados
            </p>

            <button type='submit'>Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default CreateRecipe;
