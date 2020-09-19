import React from "react"
import { HeaderStyled, Navigation } from "./styles.js"
import { Title, Wrapper } from "../Layout/styles"

const header = {
  title: "Main Title",
  subtitle: "Aqui va un subtítulo",
  nav: [
    { title: "Login", route: "/login" },
    { title: "Register", route: "/register" },
  ],
}

export default function Header() {
  return (
    <HeaderStyled>
      <Wrapper direction="column">
        <Navigation>
          {header.nav.map(el => (
            <a href={el.route}>{el.title}</a>
          ))}
        </Navigation>

        <Title>
          <h1>{header.title}</h1>
          <h2>{header.subtitle}</h2>
        </Title>
      </Wrapper>
    </HeaderStyled>
  )
}
