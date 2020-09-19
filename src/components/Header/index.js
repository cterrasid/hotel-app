import React from "react"
import { Link } from "gatsby"
import { HeaderStyled, Navigation } from "./styles.js"
import { Title, Wrapper } from "../Layout/styles"

const header = {
  title: "Main Title",
  subtitle: "Aqui va un subtítulo",
  nav: [
    { title: "Home", route: "/" },
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
            <Link href={el.route}>{el.title}</Link>
          ))}
        </Navigation>

        <Title isMainTitle={true}>
          <h1>{header.title}</h1>
          <h2>{header.subtitle}</h2>
        </Title>
      </Wrapper>
    </HeaderStyled>
  )
}
