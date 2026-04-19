import { FC } from "react";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

type ExpendIconSelectorProps = { isExpends: boolean };

const ExpendIconSelector: FC<ExpendIconSelectorProps> = ({ isExpends }) => {
  return isExpends ? <UnfoldMoreIcon /> : <UnfoldLessIcon />;
};

export default ExpendIconSelector;
