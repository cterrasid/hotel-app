import React from "react"
import Header from "../Header"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"
import { Wrapper } from "./styles"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Gatsby Hotel</title>
      </Helmet>
      <Header />
      <Wrapper direction="unset">{children}</Wrapper>
      <Global
        styles={css`
          :root {
            --white: #ffffff;
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
            font-size: 16px;
            font-size: 1.6rem;
            line-height: 1.5;
            font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
            margin: 0;
            padding: 0;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
    </>
  )
}
