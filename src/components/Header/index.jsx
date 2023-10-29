import { HeaderS, Logo, SwitchTheme, Pai } from './style'
import { Container } from './style'
// import { Switch } from '../Switch';
import { DarkTheme } from '../../styles/theme';
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Icon from '../../assets/bx-expand-horizontal.svg'

function Header({handleTheme, actualTheme}) {
 return (
  <>
   <HeaderS>
    <Container>
    <Pai>
     <Logo>
      <img src={Icon}/>
     </Logo>
     <ul>
      <li><a href="#">Sobre mim</a></li>
      <li><a href="#">Meus servicos</a></li>
      <li><a href="#">Projetos</a></li>
      <li><a href="#">Contato</a></li>
      <li><a href="#">Minhas habilidades</a></li>
     </ul>
     <SwitchTheme onClick={handleTheme}>
    {actualTheme === DarkTheme ? 
   (<IoMoonOutline onClick={handleTheme}/>):(<IoSunnyOutline />)}
    </SwitchTheme>
     {/* <Switch/> */}
     </Pai>
    </Container>
   </HeaderS>
  </>
 )
}

export default Header