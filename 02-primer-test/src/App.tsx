import React from 'react'
import { CounterApp } from './components/CounterApp';
import { SaludoApp } from './components/SaludoApp';

export const App = () => {
  // return <CounterApp />
  return <SaludoApp saludo='Carlos' subtitulo='Castilla' />
}
