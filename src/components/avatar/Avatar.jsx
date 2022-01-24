import classNames from "classnames";
import styles from "./Avatar.module.scss";

export default function Avatar({ size = 90, url, verified = false }) {
  const defaultImageSrc = "/images/avatar.png";
  const badgeIconSrc = "/images/verified.svg";
  const imgSrc = url ? url : defaultImageSrc;

  return (
    <div
      className={classNames(styles["avatar"])}
      style={{ width: size, height: size }}
    >
      <img className={classNames(styles["image"])} src={imgSrc} />
      {verified && (
        <img className={classNames(styles["badge"])} src={badgeIconSrc} />
      )}
    </div>
  );
}
