import { Container, ImageList, ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import theme from "../../theme.js";

const useStyles = makeStyles(() => ({
  "image-list": {
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(3, 1fr) !important",
    },
  },
}));

export default function Featured({ items = [] }) {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Container
      maxWidth="xl"
      className={classNames(styles["feature-section-container"])}
    >
      <ImageList
        className={classNames(classes["image-list"])}
        variant="quilted"
        cols={6}
        rowHeight={225}
        gap={30}
      >
        {items.map((item, i) => (
          <ImageListItem
            key={item.id}
            cols={i === 0 ? 3 : 1}
            rows={i === 0 ? 2 : 1}
            onClick={() => {
              router.push(`/product/${item.id}`);
            }}
          >
            <img src={item.image} className={classNames(styles["image"])} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
