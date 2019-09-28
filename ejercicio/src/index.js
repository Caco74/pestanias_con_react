import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<h1>PESTAÑAS CON REACT</h1>, document.getElementById('header'));

const asignaturas = React.createFactory('li');

const materia1 = asignaturas({ id: 'item1' }, 'Física');
const materia2 = asignaturas({ id: 'item2' }, 'Química');
const materia3 = asignaturas({ id: 'item3' }, 'Biología');
const materia4 = asignaturas({ id: 'item4' }, 'Inglés');
const materia5 = asignaturas({ id: 'item5' }, 'Sociales');
const materia6 = asignaturas({ id: 'item6' }, 'Historia');
const materia7 = asignaturas({ id: 'item7' }, 'Deporte');

const elements = [materia1, materia2, materia3, materia4, materia5, materia6, materia7];

const listOfasignaturas = React.createElement('lu', { id: 'lista' }, elements);

ReactDOM.render(listOfasignaturas, document.getElementById('list'));



serviceWorker.unregister();
