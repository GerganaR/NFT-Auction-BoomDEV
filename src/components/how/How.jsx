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
          <Button href={link} variant="contained">
            Learn more
          </Button>
        </Grid>
        <Grid item xs={4}>
          {items.map((el, i) => (
            <HowStep
              key={i}
              number={i + 1}
              title={el.title}
              description={el.description}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
