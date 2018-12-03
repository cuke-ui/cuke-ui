
import CodeBlock from "../codeBlock"
import ReactMarkDown from "react-markdown"
import React from "react"

const FormInfo = () => (
  <ReactMarkDown source={require('../markdown/formInfo.md')} renderers={{
    CodeBlock,
    Code: CodeBlock,
  }} />
)

export default FormInfo