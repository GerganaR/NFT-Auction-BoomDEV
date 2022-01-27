import styles from "./HowStep.module.scss";
import classNames from "classnames";
import { Container, Grid } from "@mui/material";

export default function Step({ number = 0, title = "", description = "" }) {
  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <p className={classNames(styles.number)}> {number++}</p>
        </Grid>
        <Grid item xs={8}>
          <h2>{title.toUpperCase()}</h2>
          <p>{description}</p>
        </Grid>
      </Grid>
    </Container>
  );
}
