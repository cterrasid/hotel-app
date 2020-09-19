import React from "react"
import Layout from "../components/Layout"
import { Title } from "../components/Layout/styles"

const home = {
  title: "Home Title",
  subtitle: "Aqui va un subtítulo",
}

export default function IndexPage() {
  return (
    <Layout>
      <Title textAlign="center" isMainTitle={false}>
        <h1>{home.title}</h1>
      </Title>
    </Layout>
  )
}
