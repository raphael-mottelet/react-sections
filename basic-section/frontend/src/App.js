import React from 'react';
import Section from './components/Section';
import './App.css';

const App = () => {
  return (
    <div>
      <Section backgroundColor="#ffffff">
        <div>
          <h1 className='section1'>Section 1</h1>
          <p>Contenu de la première section</p>
        </div>
      </Section>
      <Section backgroundColor="#EE9977">
        <div>
          <h1 className='section2'>Section 2</h1>
          <p>Contenu de la deuxième section</p>
        </div>
      </Section>
    </div>
  );
};

export default App;
