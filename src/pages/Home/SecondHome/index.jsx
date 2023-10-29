import { Title, Card } from "./style"
import { Pai } from "./style"
import { FirstCardsInfo } from "../../../data"

export function SecondHome() {
 return (
  <>
   <Title>Meus servicos</Title>
   <Pai>
    {FirstCardsInfo.map((card, index) => (
     <Card key={index}>
      <img src={card.img} />
      {/* <hr /> */}
      {/* &#b655eebc */}
      <p>{card.text}</p>
     </Card>
    ))}
   </Pai>
  </>
 )
}
