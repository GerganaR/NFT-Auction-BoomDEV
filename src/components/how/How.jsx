import styles from "./How.module.scss";
import classNames from "classnames";
import HowStep from "./HowStep.jsx";
import { Container, Grid, Button } from "@mui/material";

export default function How({
  description = "",
  title = "",
  items = [],
  link = "",
}) {
  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>{title}</h1>
          <p> {description}</p>
          <Button variant="contained">Learn more</Button>
        </Grid>
        <Grid item xs={4}>
          {items.map((item, index) => {
            return (
              <Grid item xs={12}>
                {<HowStep number={index} {...item} />}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
