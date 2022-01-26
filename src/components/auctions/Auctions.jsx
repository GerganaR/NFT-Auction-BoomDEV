import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Card from "../card/Card";
import classNames from "classnames";
import styles from "./Auctions.module.scss";

export default function Auctions({
  cards = [],
  filters = [],
  setLiveAuctionsFilterValue,
}) {
  const [priceRange, setPriceRange] = useState("");

  const handleChange = (event) => {
    setPriceRange(event.target.value);
    setLiveAuctionsFilterValue(event.target.value);
  };

  return (
    <div className={classNames(styles["wrapper"])}>
      <Container
        className={classNames(styles["auction-container"])}
        maxWidth="xl"
      >
        <Grid
          container
          className={classNames(styles["auction-header"])}
          justifyContent={{ xs: "center", md: "space-between" }}
        >
          <Typography variant="h2">🔥 Live Auctions</Typography>
          <FormControl className={classNames(styles["dropdown-form"])}>
            <InputLabel
              className={classNames(styles["label-text"])}
              id="price-range-label"
            >
              Price range
            </InputLabel>
            <Select
              labelId="price-range-label"
              value={priceRange}
              onChange={handleChange}
            >
              {filters.map((el) => (
                <MenuItem key={el.value} value={el.value}>
                  {el.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          container
          className={classNames(styles["card-container"])}
          justifyContent={{ xs: "center", md: "space-between" }}
        >
          {cards.map((card) => (
            <Card key={card.id} timeLeft={card.auction_end} {...card} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
