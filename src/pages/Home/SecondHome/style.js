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
 padding-top: 5rem;
 border-radius: 6px 36px;
 margin-top: -2.25rem;
 padding-left: 50px;
 padding-right: 50px;
 width: 16rem;
 height: 250px;
 /* height: 310px;  é bom para usar mais para frente*/

 img {
  height: 56px;
  width: 56px;
 }

 p {
  color: ${(props) => props.theme.colors.Title};
  text-align: center;
  font-family: "Inter";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5625rem;
 }

 @media (max-width: 1280px) {
  margin-top: 2.25rem;
 }
`
