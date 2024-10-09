import { Ball, Button, OurNumbersSection, Service, ServicesSection, StartSection } from "./App.styles";
import Header from "./components/Header/Header";

import firstSectionBackground from '../public/assets/firstSectionBackground.png';
import CirclesIcon from "./shared/icons/CirclesIcon";
import CheckIcon from "./shared/icons/CheckIcon";
import SquaresIcon from "./shared/icons/SquaresIcon";
import { ReactElement } from "react";

interface ServiceProps {
  icon: ReactElement
  title: string
  subtitle: string
  key: number
}

function App() {
  const services = [
    {
      icon: <CirclesIcon />, 
      title: 'Planos de negócios', 
      subtitle: 'Sou um parágrafo. Clique aqui para adicionar e editar o texto.'
    },
    {
      icon: <CheckIcon />, 
      title: 'Serviços de contabilidade', 
      subtitle: 'Sou um parágrafo. Clique aqui para adicionar e editar o texto.'
    },
    {
      icon: <SquaresIcon />, 
      title: 'Otimização de finanças', 
      subtitle: 'Sou um parágrafo. Clique aqui para adicionar e editar o texto.'
    }
  ]
  const ourNumbers = [
    {
      title: 15,
      subtitle: 'Anos no mercado'
    },
    {
      title: 36,
      subtitle: 'Especialistas'
    },
    {
      title: 120,
      subtitle: 'Clientes anuais'
    },
    {
      title: 9,
      subtitle: 'Parceiros'
    },
  ]

  const renderService = ({icon, title, subtitle, key}: ServiceProps) => (
    <Service key={key}>
      <div>
        {icon}
      </div>
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
    </Service>
  )

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
      <StartSection backgroundimage={firstSectionBackground}>
        <h1 className="title">Nada como uma boa consultoria</h1>
        <p className="subtitle">Sou um parágrafo. Clique aqui para adicionar e editar o texto.</p>
        <Button className="button">Saiba mais</Button>
      </StartSection>
      {/* service section */}
      <ServicesSection>
        <div className="title-container">
          <p className="title">Serviços</p>
          <p className="cta-text">Dê uma turbinada no seu negócio</p>
        </div>
        <div className="services-container">
          {
            services.map((service, index) => {
              return renderService({key: index, ...service})
            })
          }
        </div>
      </ServicesSection>
      {/* about section */}
      <OurNumbersSection>
          <div className="title-container">
            <p className="title-text">Números são o nosso forte</p>
          </div>
          <div className="numbers-container">
            {
              ourNumbers.map((element, index) => {
                return (
                  <div className="number-card">
                    <div>
                      <p className="number-title">{element.title}</p>
                      <p className="number-description">{element.subtitle}</p>
                    </div>
                    {index < ourNumbers.length - 1 && <Ball />}
                  </div>
                )
              })
            }
          </div>
      </OurNumbersSection>
      {/* feedbacks section */}
      {/* clients section */}
      {/* contact section */}
    </div>
  );
}

export default App;