import { Grid, Button, Typography } from "@mui/material/";
import HowStep from "./Step.jsx";
import styles from "./How.module.scss";
import classNames from "classnames";

export default function How({ description, title, items = [], link }) {
  return (
    <div className={classNames(styles["wrapper"])}>
      <Grid
        container
        className={classNames(styles["grid-container"])}
        justifyContent={{ xs: "center", lg: "space-between" }}
        maxWidth="xl"
      >
        <Grid
          container
          item
          className={classNames(styles["text-container"])}
          justifyContent={{ xs: "center", lg: "unset" }}
          textAlign={{ xs: "center", lg: "unset" }}
          paddingTop={{ xs: "20px", lg: "0px" }}
          md={12}
          lg={5}
        >
          <Typography variant="h1">{title}</Typography>
          <Typography
            className={classNames(styles["description"])}
            color="textSecondary"
          >
            {description}
          </Typography>
          <Button
            href={link}
            variant="contained"
            className={classNames(styles["learn-more-btn"])}
          >
            Learn more
          </Button>
        </Grid>
        <Grid
          item
          className={classNames(styles["step-container"])}
          justifyContent={{ xs: "center", lg: "unset" }}
          paddingTop={{ xs: "20px", lg: "0px" }}
        >
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
    </div>
  );
}
