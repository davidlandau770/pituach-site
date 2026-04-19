import type { CSSProperties, FC, ReactNode } from "react";
import { Grid, Paper, type SxProps, type Theme } from "@mui/material";

type GenericTileProps = { sx?: CSSProperties; children: ReactNode };

const GenericTile: FC<GenericTileProps> = ({ sx, children }) => {
  const GENERIC_TILE_STYLE: SxProps<Theme> = {
    bgcolor: "#4b4b4b",
    borderRadius: "12px",
    p: 1.5,
    border: "solid 1px #999",
    width: "100%",
    ...sx,
  };

  return (
    <Paper sx={GENERIC_TILE_STYLE}>
      <Grid container sx={{ flexDirection: "column" }}>
        {children}
      </Grid>
    </Paper>
  );
};

export default GenericTile;
