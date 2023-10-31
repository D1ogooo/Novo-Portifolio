import styled from "styled-components"

export const Title = styled.h1`
 margin-top: 12.5rem;
 text-align: center;
 color: ${({ theme }) => theme.colors.title};
 font-weight: 300;
 font-family: "Sora";
`

export const Pai = styled.div`
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 gap: 30px;
 align-items: center;
 margin-bottom: 12.5rem;
 height: 29.6875rem;
`
export const Card = styled.section`
 background-color: ${({ theme }) => theme.colors.card};
 text-align: center;
 padding-top: 3.7rem;
 border-radius: 6px 36px;
 margin-top: -2.25rem;
 padding-left: 50px;
 padding-right: 50px;
 width: 16rem;
 height: 280px;
 /* height: 310px;  é bom para usar mais para frente*/
 img {
  height: 56px;
  width: 56px;
 }

 p {
  color: ${({ theme }) => theme.colors.Title};
  text-align: center;
  font-family: "Inter";
  font-size: 0.9rem;
  width: 10rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3rem;
  /* transition: 500ms all; */
 }

 #button_open {
  cursor: pointer;
 }

 @media (max-width: 1280px) {
  margin-top: 2.25rem;
 }
`

export const Detail = styled.div`
 width: 198px;
 max-height: 90px;
 overflow-y: auto;
 transition: 0.3s all;
`

export const VerMais = styled.div`
 margin-top: 5px;

 p {
  color: ${({ theme }) => theme.colors.detail_text};
 }
`

export const ButtonDetails = styled.button`
 border: none;
 background: none;
 
 img {
  width: 22px;
  height: 22px;
  cursor: pointer;
 }
`
