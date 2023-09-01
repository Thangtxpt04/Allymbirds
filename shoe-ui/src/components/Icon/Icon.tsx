import styles from "./Icon.module.scss";
import classNames from "classNames/bind";

const cx = classNames.bind(styles);
type Props = {
  className: string;
};

const Icon = ({ className }: Props) => {
  const classes = cx("icon", {
    [className]: className,
  });

  return <i className={classes}></i>;
};

export default Icon;
