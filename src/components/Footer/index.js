import React from "react"
import { Wrapper } from "../Layout/styles"

export default function Footer() {
  return (
    <footer>
      <Wrapper>
        <small>
          Created by
          <strong>
            <a
              href="https://www.linkedin.com/in/clarette-terrasi-diaz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" Clarette "}
            </a>
          </strong>
          2020
        </small>
      </Wrapper>
    </footer>
  )
}
