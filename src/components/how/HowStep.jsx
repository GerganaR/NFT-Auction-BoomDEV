import React, { useState } from "react";
import Container from "@mui/material/Container";
import styles from "./HowStep.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";

export default function HowStep({ number = 0, title = "", description = "" }) {
  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <p className={classNames(styles.number)}>{number++}</p>
        </Grid>
        <Grid item xs={8}>
          <h1>{title}</h1>
          <p>{description}</p>
        </Grid>
      </Grid>
    </Container>
  );
}
