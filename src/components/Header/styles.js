import styled from "@emotion/styled"
import { breakpoints } from "../Layout/styles"

export const HeaderStyled = styled.header`
  background: linear-gradient(
    90deg,
    var(--color_1) 0%,
    var(--color_2) 0%,
    var(--color_3) 18%
  );
  color: var(--grey-dark);
  height: 35vh;
`

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  justify-content: flex-end;
  text-transform: uppercase;

  ${breakpoints.desktop} {
    font-size: 16px;
  }

  a {
    color: var(--grey-dark);
    text-align: center;
    text-decoration: none;
    width: 6rem;

    :hover {
      text-decoration: line-through;
      transition: 0.5s ease;
    }
  }
`
