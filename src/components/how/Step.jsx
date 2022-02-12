import { Card, Typography, Container, Grid } from "@mui/material/";
import styles from "./Step.module.scss";
import classNames from "classnames";

export default function HowStep({ number, title, description }) {
  return (
    <Card className={classNames(styles["card"])}>
      <Grid container>
        <Grid item className={classNames(styles["number-container"])}>
          <Typography>{number}</Typography>
        </Grid>
        <Grid item className={classNames(styles["info-container"])}>
          <Typography variant={"h5"}>{title.toUpperCase()}</Typography>
          <Typography color="textSecondary">{description}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
