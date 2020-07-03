import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
export default function Layout(props) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">{props.children}</Container>
    </>
  );
}
