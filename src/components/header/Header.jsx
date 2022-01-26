import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from "../logo/Logo.jsx";
import Avatar from "../avatar/Avatar.jsx";
import Link from "../link/Link.jsx";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import classNames from "classnames";
import styles from "./Header.module.scss";
import User from "../user/User.jsx";
import Card from "../card/Card.jsx";
import Trending from "../trending/Trending.jsx";
import Auctions from "../auctions/Auctions.jsx";

export default function Header() {
  return (
    <div>
      <div className={classNames(styles["header-container"])}>
        <Grid
          container
          maxWidth="xl"
          className={classNames(styles["grid-container"])}
        >
          <Grid item md={2} display={{ xs: "none", md: "flex" }}>
            <Link href="/">
              <Logo />
            </Link>
          </Grid>
          <Grid item xs={12} md={5} paddingX={{ xs: "10px", md: "0" }}>
            <TextField
              className={classNames(styles["search-bar"])}
              fullWidth
              placeholder="Find items, users and activities"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" color="secondary">
                    <SearchIcon className={classNames(styles["search-icon"])} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid
            item
            container
            className={classNames(styles["button-container"])}
            xs={12}
            md={5}
            justifyContent={{ xs: "center", md: "flex-end" }}
          >
            <Link href="/">
              <Button className={classNames(styles["button"])} variant="text">
                Home
              </Button>
            </Link>
            <Link href="/activity">
              <Button className={classNames(styles["button"])} variant="text">
                Activity
              </Button>
            </Link>
            <Link href="/explore">
              <Button variant="contained" size="large">
                Explore
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
      <div>
        <Trending></Trending>
        <Auctions></Auctions>
        <Card></Card>
      </div>
    </div>
  );
}
