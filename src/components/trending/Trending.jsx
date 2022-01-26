import classNames from "classnames";
import styles from "./Trending.module.scss";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Card from "../card/Card.jsx";

export default function Trending({ cards = [] }) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container
        className={classNames(styles["trending-section-container"])}
        maxWidth="xl"
      >
        <Grid
          container
          className={classNames(styles["title-filters-container"])}
        >
          <Grid item xs={8}>
            <Typography variant="h1" component="h2">
              Trending
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <FormControl className={classNames(styles["select-form"])}>
              <Select
                className={classNames(styles["select-menu"])}
                id="time-period"
              ></Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
      <Container
        className={classNames(styles["trending-section-container"])}
        maxWidth="xl"
      >
        <Grid
          className={classNames(styles["cards-container"])}
          container
          spacing={2}
        >
          {cards.map((card) => {
            return (
              <Grid item xs={3}>
                <Card {...card} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
