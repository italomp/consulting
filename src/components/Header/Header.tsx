import { Button } from '../../App.styles';
import { Container, Nav, NavOption } from './Header.styled';

interface Option {
   label: string
   callback: () => void
}

interface HeaderProps {
   items: Option[]
}

const Header = ({ items }: HeaderProps) => {
   return (
      <Container>
         <div
            style={{
               fontSize: '26px',
               fontWeight: '500',
               display: 'flex',
               alignItems: 'center'
            }}>
            MigoNe
         </div>
         <Nav>
            {items?.map((item, index) => (<NavOption key={index}>{item?.label}</NavOption>))}
         </Nav>
         <div style={{
            display: 'flex',
            alignItems: 'center'
         }}>
            <Button>
               Whatsapp
            </Button>
         </div>
      </Container>
   )
};

export default Header;
