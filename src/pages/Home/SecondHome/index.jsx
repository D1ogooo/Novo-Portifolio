import { useState } from "react"
import { ButtonDetails } from "./style"
import { Title, Card, VerMais, Detail } from "./style"
import { Pai } from "./style"
import { FirstCardsInfo, DetalhesServicos } from "../../../data"
import ArrowDown from "../../../assets/arrow-down.svg"
import ArrowUp from "../../../assets/arrow-up.svg"

export function SecondHome() {
 let [open, setOpen] = useState(false)

 let option = (card_id) => {
  setOpen(open === card_id ? null : card_id)
 }

 return (
  <>
   <Title>Meus servicos</Title>
   <Pai>
    {FirstCardsInfo.map((card) => (
     <Card key={card.id}>
      <img src={card.img} />
      <p>{card.text}</p>
      <ButtonDetails onClick={() => option(card.id)}>
       <img src={open === card.id ? ArrowDown : ArrowUp} />
      </ButtonDetails>

      <Detail>
       {open === card.id &&
        DetalhesServicos.map((detail) => (
         <VerMais key={card.id}>
          <p>{detail.text}</p>
         </VerMais>
        ))}
      </Detail>
     </Card>
    ))}
   </Pai>
  </>
 )
}
