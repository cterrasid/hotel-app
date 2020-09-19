import React from "react"
import Layout from "../../components/Layout"
import { Title } from "../../components/Layout/styles"
import { Form } from "./styles"

export default function Login() {
  return (
    <Layout>
      <Title textAlign="center" isMainTitle={false}>
        <h1>Login</h1>
      </Title>
      <Form>
        <input
          type="text"
          id="firstName"
          placeholder="Nombre"
          name="firstName"
        />
        <input
          type="text"
          id="lastName"
          placeholder="Apellido"
          name="lastName"
        />
        <button type="button">Save</button>
      </Form>
    </Layout>
  )
}
