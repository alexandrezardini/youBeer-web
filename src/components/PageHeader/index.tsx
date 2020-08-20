import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/imgs/icons/beer-icon.svg';
import backIcon from '../../assets/imgs/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
  pageName: string;
  description?: string;
  iconLeft?: string;
  textRight?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  pageName,
  description,
  iconLeft,
  textRight,
  children
}) => {
  return (
    <header className='page-header'>
      <div className='top-bar-container'>
        <Link to='/'>
          <img src={backIcon} alt='Voltar' />
        </Link>
        <h2>{pageName}</h2>
        <img src={logoImg} alt='YouBeer' />
      </div>
      <div className='header-content'>
        <strong>{title}</strong>

        {description && <p>{description}</p>}
        <div className='content-right'>
          <img src={iconLeft} alt='icon' />
          <p className='text-right'>{textRight}</p>
        </div>

        {children}
      </div>
    </header>
  );
};

export default PageHeader;
