import React from 'react';
import { Counter } from './components/1_Counter';
import { TimerPadre } from './components/3_TimerPadre';
import { Usuario } from './components/2_Usuario';
import { ContadorReduce } from './components/5_ContadorReduce';
import { Formulario } from './components/6_Formulario';

function App() {
  return (
    <>
      <Counter />
      <hr />
      <Usuario />
      <hr />
      <TimerPadre />
      <hr />
      <ContadorReduce />
      <hr />
      <Formulario />
    </>
  );
}

export default App;
