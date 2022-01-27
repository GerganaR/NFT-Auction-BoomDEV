import React from "react";
import Container from "@mui/material/Container";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

export default function Footer() {
  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Logo type="muted" />
        </Grid>
        <Grid item xs={4}>
          <p>Copyright</p>
        </Grid>
        <Grid item xs={4}>
          <Button className={classNames(styles.policy)}>Privacy Policy</Button>
          <Button className={classNames(styles.policy)}>Cookie Policy</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
