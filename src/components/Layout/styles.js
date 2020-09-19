import styled from "@emotion/styled"

export const breakpoints = {
  tablet: "@media screen and (min-width: 768px)",
  laptop: "@media screen and (min-width: 1440px)",
}

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => props.direction};
  height: 100%;
  justify-content: center;
  padding: 20px;
  width: 100%;

  ${breakpoints.tablet} {
    max-width: 700px;
    margin: 0 auto;
  }

  ${breakpoints.desktop} {
    max-width: 1000px;
  }
`

export const Title = styled.hgroup`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 18px;
    font-style: italic;
    font-weight: normal;
  }

  :not(h1),
  :not(h2) {
    font-size: 16px;
  }
`
