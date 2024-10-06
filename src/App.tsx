import { Button } from "./App.styles";
import Header from "./components/Header/Header";

import firstSectionBackground from '../public/assets/firstSectionBackground.png';

function App() {
  return (
    <div style={{height:'92vh'}}>
      <Header items={[
        {label: 'Início', callback: () => console.log('click 1')},
        {label: 'Serviços', callback: () => console.log('click 2')},
        {label: 'Sobre', callback: () => console.log('click 3')},
        {label: 'Depoimentos', callback: () => console.log('click 4')},
        {label: 'Clientes', callback: () => console.log('click 5')},
        {label: 'Contato', callback: () => console.log('click 6')}
      ]}/>
      {/* start section */}
      <div style={{
        background: `url(${firstSectionBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        height: '100%', 
        padding: '65px 135px'
      }}>
        <h1 style={{
          fontSize: '90px',
          maxWidth: '690px',
          letterSpacing:'-0.02em',
          lineHeight: '90px',
          color: '#16163f'
        }}>Nada como uma boa consultoria</h1>
        <p style={{
          fontSize: '24px',
          maxWidth: '380px',
          color: '##16163f',
          marginTop: '-30px',
          marginBottom: '30px'
        }}>Sou um parágrafo. Clique aqui para adicionar e editar o texto.</p>
        <Button style={{ width: '154px' }}>Saiba mais</Button>
      </div>
      {/* service section */}
      {/* about section */}
      {/* feedbacks section */}
      {/* clients section */}
      {/* contact section */}
    </div>
  );
}

export default App;