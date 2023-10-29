import styled from "styled-components"

export const Container = styled.div`
 width: 95%;
 margin: 0 auto;
 margin-top: 1.5rem;
`

export const HeaderS = styled.header`
 ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4.125rem;
 }

 li {
  list-style: none;
 }

 a {
  text-decoration: none;
  color: #6e7275;
  font-family: "Inter";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
 }
`

export const SwitchTheme = styled.div`
 background-color: #fff;
 padding: 0.625rem;
 border-radius: 1.5625rem;
 width: 3.0625rem;
 height: 3.125rem;

 cursor: pointer;
 svg {
  width: 1.875rem;
  height: 1.875rem;
 }
`

export const Pai = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`

export const Logo = styled.div`
 background-color: #fff;
 padding: 0.3125rem;
 border-radius: 1.25rem 0.125rem 1.25rem 0.125rem;

 img {
  width: 2.25rem;
  height: 2.25rem;
 }
`
