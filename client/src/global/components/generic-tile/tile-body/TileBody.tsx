import { Grid2 as Grid, SxProps, Theme } from "@mui/material";
import { FC, ReactNode } from "react";

type TileBodyProps = { children: ReactNode; bodyStyle?: SxProps<Theme> };

const TileBody: FC<TileBodyProps> = ({ children, bodyStyle }) => {
  return (
    <Grid display="flex" flexGrow={1} sx={bodyStyle}>
      {children}
    </Grid>
  );
};

export default TileBody;
