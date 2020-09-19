import React from "react"
import Header from "../Header"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"
import { Wrapper } from "./styles"
import Footer from "../Footer"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Layout</title>
      </Helmet>
      <Header />
      <Wrapper direction="column">{children}</Wrapper>
      <Footer />
      <Global
        styles={css`
          :root {
            --white: #ffffff;
            --white_smoke: #fdfdfd;
            --grey_light: #f3f5f7;
            --grey_medium: #cbced1;
            --grey-dark: #505050;
            --color_1: #98ffca;
            --color_2: #aafebc;
            --color_3: #d5fffb;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html {
            font-size: 62.5%;
          }

          body {
            background-color: var(--white);
            color: var(--grey-dark);
            font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
            font-size: 1.6rem;
            font-size: 16px;
            line-height: 1.5;
            margin: 0;
            padding: 0;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
            color: var(--grey-dark);
          }
        `}
      />
    </>
  )
}
