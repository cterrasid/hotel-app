import styled from "@emotion/styled"
import { breakpoints } from "../../components/Layout/styles"

export const Form = styled.form`
  background-color: var(--white_smoke);
  border-radius: 20px;
  box-shadow: 8px 8px 25px var(--grey_light),
    -13px -13px 20px var(--white_smoke);
  display: grid;
  padding: 20px;
  place-items: center;
  row-gap: 15px;
  width: 90%;

  ${breakpoints.tablet} {
    width: 50%;
  }

  input[type="text"] {
    border: none;
    border-radius: 15px;
    box-shadow: inset 2px 4px 6px var(--grey_light),
      inset -8px -8px 8px var(--white_smoke);
    outline: none;
    padding: 15px 10px;
    width: 100%;

    ::placeholder {
      color: var(--grey_medium);
    }
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    width: 40%;
    height: 35px;
    border-radius: 30px;
    color: #fff;
    text-align: center;
    background: var(--color_1);
    box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #ffffff;
    transition: 0.5s;

    :hover {
      background: #2fdbb6;
    }

    :active {
      background: #1da88a;
    }
  }
`
