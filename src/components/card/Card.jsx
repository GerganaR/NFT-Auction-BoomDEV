import classNames from "classnames";
import styles from "./Card.module.scss";
import Avatar from "../avatar/Avatar";
import Grid from "@mui/material/Grid";
import CardMUI from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import FavoriteIcon from "@mui/icons-material/Favorite";
import millify from "millify";

export default function Card({
  name = "",
  likes = 0,
  mediaUrl = "",
  user,
  price = "",
  currency = "",
}) {
  return (
    <CardMUI className={classNames(styles["card"])}>
      <Container disableGutters className={classNames(styles["imgContainer"])}>
        <Avatar {...user} />
        <CardMedia
          className={classNames(styles["media"])}
          component="img"
          image={mediaUrl}
          alt="NFTImage"
        ></CardMedia>
      </Container>
      <CardContent className={classNames(styles["card-content"])}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={9}>
            <Typography className={classNames(styles["title"])}>
              {name}Name NFT
            </Typography>
            <Typography className={classNames(styles["price"])}>
              {price} {currency}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Chip
              className={classNames(styles["likes"])}
              variant="outlined"
              color="success"
              size="small"
              sx={{
                height: "33px",
                border: "2px solid",
                fontWeight: "bold",
                background: "rgba(36, 242, 94, 0.1)",
              }}
              icon={<FavoriteIcon />}
              label={millify(likes)}
              variant="outlined"
            ></Chip>
          </Grid>
        </Grid>
      </CardContent>
    </CardMUI>
  );
}
