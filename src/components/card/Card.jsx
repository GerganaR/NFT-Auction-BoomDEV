import {
  Card as MUICard,
  CardContent,
  CardMedia,
  Container,
  Box,
  Chip,
} from "@mui/material/";
import classNames from "classnames";
import styles from "./Card.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "../avatar/Avatar";
import millify from "millify";

export default function Card({
  name,
  likes = 0,
  mediaUrl,
  owner,
  price,
  currency,
}) {
  return (
    <MUICard>
      <CardContent className={classNames(styles["card-content"])}>
        {owner && (
          <Avatar verified={owner.verified} url={owner.avatar.url} size={33} />
        )}
        <Container disableGutters className={classNames(styles.imgContainer)}>
          <CardMedia
            component="img"
            image={mediaUrl}
            alt="card media"
            className={classNames(styles.media)}
          />
        </Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography
              className={classNames(styles.title)}
              sx={{ fontWeight: "900", marginBottom: "5px" }}
            >
              {name}
            </Typography>
            <Typography
              className={classNames(styles.price)}
              sx={{ fontWeight: "700", fontSize: "0.9rem" }}
            >
              {price} {currency}
            </Typography>
          </Grid>

          <Chip
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
            onClick={() => {}}
            className={classNames(styles.likes)}
          />
        </Grid>
      </CardContent>
    </MUICard>
  );
}
