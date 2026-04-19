import { Divider, Grid2 as Grid } from "@mui/material";
import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import LeftNavigation from "./left-navigation/LeftNavigation";
import RightNavigation from "./right-navigation/RightNavigation";
import {
  FilterInfoInterface,
  FilterInterface,
} from "../../../types/filter.types";
import { GenericDataType } from "../../../types/generic-table.types";

type TileHeadProps<T extends GenericDataType> = {
  to?: string;
  title?: string;
  onAdd?: () => void;
  onSearch?: MouseEventHandler<HTMLButtonElement>;
  onFilter?: (filter: FilterInterface) => void;
  filterInfo?: FilterInfoInterface;
  isExpanded?: boolean;
  children?: ReactNode;
  divider?: boolean;
  headStyle?: CSSProperties;
  onReset?: () => void;
  selectedRows?: T[];
  allocationOrders?: boolean;
  onSendSelected?: (rows: T[]) => void;
  onShipAssign?: (row: T) => void;
  status?: boolean;
  onDelete?: (selected: T[]) => void;
};

const TileHead = <T extends GenericDataType>({
  title,
  to,
  onAdd,
  onSearch,
  onFilter,
  filterInfo,
  isExpanded = false,
  children,
  divider = true,
  headStyle,
  onReset,
  selectedRows,
  allocationOrders,
  onSendSelected,
  onShipAssign,
  status,
  onDelete,
}: TileHeadProps<T>) => {
  return (
    <Grid
      data-testid="tile-head"
      display="flex"
      flexGrow={0}
      sx={{ ...headStyle, direction: "rtl", color: "#ccc" }}
    >
      <Grid container flexDirection="column" width="100%">
        <Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid>{title && <RightNavigation title={title} />}</Grid>
            <Grid>
              <LeftNavigation
                onFilter={onFilter}
                isExpanded={isExpanded ?? false}
                children={children}
                filterInfo={filterInfo}
                onAdd={onAdd}
                onSearch={onSearch}
                to={to}
                onReset={onReset}
                selectedRows={selectedRows}
                allocationOrders={allocationOrders}
                onSendSelected={onSendSelected}
                onShipAssign={onShipAssign}
                status={status}
                onDelete={onDelete}
              />
            </Grid>
          </Grid>
        </Grid>
        {divider && (
          <Grid sx={{ my: 1 }}>
            <Divider sx={{ color: "white" }} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default TileHead;
