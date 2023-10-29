import styled from "styled-components"

export const Container = styled.div`
 width: 95%;
 margin: 0 auto;
`

export const PaiMain = styled.div`
 margin-top: 6.25rem;
 display: flex;
 align-items: center;
 justify-content: space-evenly;
`

export const ButtonLinkedin = styled.a`
 border-radius: 3.125rem;
 text-decoration: none;
 margin: 0.625rem;
 margin-left: 0.125rem;
 background-color: ${(props) => props.theme.colors.background_button};
 cursor: pointer;
 border: none;
 /* box-shadow: 1px 3px 4px 0px rgba(132, 19, 224, 0.5); */

 display: inline-flex;
 padding: 1rem 2.25rem;
 align-items: flex-start;
 gap: 0.625rem;

 color: #fff;
 font-family: "Inter";
 font-size: 0.8125rem;
 font-style: normal;
 font-weight: 500;
 line-height: normal;
`

export const ButtonGitHub = styled.a`
 border-radius: 3.125rem;
 text-decoration: none;
 background-color: ${(props) => props.theme.colors.background_button};
 cursor: pointer;
 border: none;
 /* box-shadow: 0.0625rem 0.1875rem 0.25rem 0rem rgba(132, 19, 224, 0.5); */

 display: inline-flex;
 padding: 1rem 2.25rem;
 align-items: flex-start;
 gap: 0.625rem;

 color: #fff;
 font-family: "Inter";
 font-size: 0.8125rem;
 font-style: normal;
 font-weight: 500;
 line-height: normal;
`

export const Left = styled.div`
 h1 {
  color: ${({ theme }) => theme.colors.LetraPrincipal};
  font-family: "Sora";
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
 }

 p {
  padding-left: 0.3125rem;
  color: #6e7275;
  font-family: "Inter";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem;
 }
`

export const Right = styled.div``
