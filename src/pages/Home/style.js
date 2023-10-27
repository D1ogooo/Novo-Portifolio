import styled from 'styled-components'

export const Container = styled.div`
 width: 95%;
 margin: 0 auto;
`

export const PaiMain = styled.div`
 margin-top: 100px;
 display: flex;
 align-items: center;
 justify-content: space-evenly;
`

export const ButtonLinkedin = styled.a`
 border-radius: 50px;
 text-decoration: none;

 margin: 10px;
 margin-left: 2px;
 background: #9b27dfd8;
 cursor: pointer;
 border: none;
 box-shadow: 1px 3px 4px 0px rgba(132, 19, 224, 0.5);

 display: inline-flex;
 padding: 16px 36px;
 align-items: flex-start;
 gap: 10px;

 color: #FFF;
 font-family: 'Inter';
 font-size: 13px;
 font-style: normal;
 font-weight: 600;
 line-height: normal;
`

export const ButtonGitHub = styled.a`
 border-radius: 50px;
 text-decoration: none;
 background: #9b27dfd8;
 cursor: pointer;
 border: none;
 box-shadow: 1px 3px 4px 0px rgba(132, 19, 224, 0.5);

 display: inline-flex;
 padding: 16px 36px;
 align-items: flex-start;
 gap: 10px;

 color: #FFF;
 font-family: 'Inter';
 font-size: 13px;
 font-style: normal;
 font-weight: 600;
 line-height: normal;
`

export const Left = styled.div`
 h1 {
  color: ${({ theme }) => theme.colors.LetraPrincipal};
  font-family: 'Sora';
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
 }

 p {
  padding-left: 5px;
  color: #6E7275;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
 }
`

export const Right = styled.div`
 
`