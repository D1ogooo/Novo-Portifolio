import { Container, ButtonLinkedin, ButtonGitHub } from "./style"
import { PaiMain, Left, Right } from "./style"
import { MeusServicos } from "./SecondHome"
import { Projetos } from "./ThirdHome"
import PrincipalImage from "../../assets/Working from anywhere-rafiki 1.svg"

function Home() {
 return (
  <>
   <Container>
    <PaiMain>
     <Left>
      <h1>
       Olá, eu sou o <br />
       Diogo maçal
      </h1>
      <p>Desenvolvedor Fullstack</p>
      <ButtonLinkedin
       target="_blank"
       href="https://www.linkedin.com/in/diogo-ma%C3%A7al-3b37b224a/"
      >
       Linkedin
      </ButtonLinkedin>
      <ButtonGitHub target="_blank" href="https://github.com/D1ogooo">
       Github
      </ButtonGitHub>
     </Left>
     <Right>
      <img src={PrincipalImage} />
     </Right>
    </PaiMain>
    <MeusServicos />
    <Projetos />
   </Container>
  </>
 )
}

export default Home
