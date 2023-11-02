import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { FondoImagen } from './Components/FondoImagen';
import { GraficaPh } from './Components/GraficaPh';
import {GraficaTemperaura} from './Components/GraficaTemperaura';
import { GraficaTurbidez } from './Components/GraficaTurbidez';
import { Container} from '@mui/material';
import { GraficaSolidos } from './Components/GraficaSolidos';
import { Titulo } from './Components/Titulo';


function App() {
  return (
    <div>
      <Header/>
      <section>
        <FondoImagen/>
      </section>

      <Container>
      <section id='GraficaPH'>
      <Titulo titulo = 'pH'/>
        <GraficaPh/>
      </section>
      <section id='GraficaTemp'>
        <Titulo titulo = 'Temperatura'/>
        <GraficaTemperaura/> 
      </section>
      <section id='GraficaTurb'>
        <Titulo titulo = 'Turbidez'/>
        <GraficaTurbidez/>
      </section>
      <section id='GraficaSolidos'>
        <Titulo titulo = 'Residuos Sólidos'/>
        <GraficaSolidos/>
      </section>
      </Container>
      

    
    </div>
    
  );
}

export default App;
