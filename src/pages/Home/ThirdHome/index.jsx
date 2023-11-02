import { Card, LinksPai, ButtonLinkedin, ButtonGitHub } from "./style"
import { CardProjetos } from "../../../data"
import { Swiper, SwiperSlide } from "swiper/react"
import exemplo from "../../../assets/Working from anywhere-rafiki 1.svg"

export function Projetos() {
 return
 ;<>
  <Swiper>
   {CardProjetos.map((card) => (
    <SwiperSlide key={card.id}>
     <img src={card.img} />
     <hr />
     <LinksPai>
      <ButtonLinkedin target="_blank" href={card.linkLinkedin}>
       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
      </ButtonLinkedin>

      <ButtonGitHub target="_blank" href={card.linkGithub}>
       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
      </ButtonGitHub>

      {/* {card.
     <ButtonLinkProjeto>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
     </ButtonLinkProjeto>
     } */}
     </LinksPai>
     <p>{card.text}</p>
    </SwiperSlide>
   ))}
  </Swiper>
 </>
}

// <Card>
//  <img src={exemplo} />
//  <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
//   cumque nemo voluptate, cupiditate sequi tempore qui quibusdam ex error
//   accusamus quas facere repudiandae assumenda fugit dolore voluptates maiores
//   quia!
//  </p>
// </Card>
