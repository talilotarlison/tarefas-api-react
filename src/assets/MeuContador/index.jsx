import  './styles.css';
import  React, { useState } from 'react';

function MeuContador(props) {
  return(
    <div className='caixa'>
     {props.children}
    </div>
    ) 
}

export default MeuContador;
