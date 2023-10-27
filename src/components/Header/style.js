import styled from "styled-components";

export const Container = styled.div`
 width: 95%;
 margin: 0 auto;
 margin-top: 24px;
`

export const HeaderS = styled.header`
 ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 66px;
 }

 li {
  list-style: none;
 }

 a {
  text-decoration: none;
  color: #6E7275;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
 }
`

export const SwitchTheme = styled.div`
 background-color: #fff;
 padding: 10px;
 border-radius: 25px;
 width: 49px;
 height: 50px;

 cursor: pointer;
 svg {
  width: 30px;
  height: 30px;
 }
`

export const Pai = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`

export const Logo = styled.div`
 background-color: #fff;
 padding: 5px;
 border-radius: 20px 2px 20px 2px;

 img {
  width: 36px;
  height: 36px;
 }
`
