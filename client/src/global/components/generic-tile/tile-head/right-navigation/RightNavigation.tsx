import { Typography } from "@mui/material";
import { FC } from "react";

type RightNavigationProps = { title: string };

const RightNavigation: FC<RightNavigationProps> = ({ title }) => {
  return (
    <Typography variant="h6" fontWeight="bold">
      {title}
    </Typography>
  );
};

export default RightNavigation;
