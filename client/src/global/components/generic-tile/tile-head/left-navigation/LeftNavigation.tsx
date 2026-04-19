import { MouseEventHandler, ReactNode } from "react";
import { Grid2 as Grid, IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import ExpendIconSelector from "./expend-icon-selector/ExpendIconSelector";
import {
  FilterInfoInterface,
  FilterInterface,
} from "../../../../types/filter.types";
import ReplayIcon from "@mui/icons-material/Replay";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { GenericDataType } from "../../../../types/generic-table.types";
import { VIEW_TILE_ICONS } from "../../../../styles/icons/tile-icons.style";
import { useNavigate } from "react-router-dom";
import { DeleteRounded, PublishedWithChanges } from "@mui/icons-material";

type LeftNavigationProps<T extends GenericDataType> = {
  to?: string;
  onAdd?: MouseEventHandler<HTMLButtonElement>;
  onSearch?: MouseEventHandler<HTMLButtonElement>;
  isExpanded: boolean;
  children?: ReactNode;
  onFilter?: (filter: FilterInterface) => void;
  filterInfo?: FilterInfoInterface;
  // onColumn?: (
  //   e: ChangeEvent<HTMLInputElement>,
  //   columnData: ColumnInterface
  // ) => void;
  // columnInfo?: ColumnInfoInterface;
  onReset?: () => void;
  selectedRows?: T[];
  allocationOrders?: boolean;
  onSendSelected?: (rows: T[]) => void;
  // selectionType?: "checkbox" | "radio";
  onShipAssign?: (row: T) => void;
  status?: boolean;
  onDelete?: (selected: T[]) => void;
};

const LeftNavigation = <T extends GenericDataType>({
  to,
  onAdd,
  onSearch,
  isExpanded,
  children,
  onFilter,
  filterInfo,
  onReset,
  selectedRows,
  allocationOrders,
  onSendSelected,
  onShipAssign,
  status,
  onDelete,
}: LeftNavigationProps<T>) => {
  const navigate = useNavigate();

  return (
    <Grid container alignItems="center" flexDirection="row" gap={1}>
      {children && <Grid>{children}</Grid>}
      {onSearch && (
        <Grid>
          <IconButton onClick={onSearch} sx={{ p: 0 }}>
            <SearchIcon />
          </IconButton>
        </Grid>
      )}
      {onDelete && selectedRows && selectedRows.length > 0 && (
        <Tooltip title="מחיקה" arrow>
          <IconButton
            onClick={() => onDelete(selectedRows)}
            sx={VIEW_TILE_ICONS}
          >
            <DeleteRounded />
          </IconButton>
        </Tooltip>
      )}
      {allocationOrders && selectedRows && selectedRows.length > 0 && (
        <Tooltip title="שיוך הזמנות למסלול" arrow>
          <IconButton
            sx={VIEW_TILE_ICONS}
            onClick={() => {
              onSendSelected?.(selectedRows);
            }}
          >
            <CompareArrowsIcon />
          </IconButton>
        </Tooltip>
      )}
      {onShipAssign && selectedRows && selectedRows.length > 0 && (
        <Tooltip title="שיוך ספינה למסלול" arrow>
          <IconButton
            sx={VIEW_TILE_ICONS}
            onClick={() => onShipAssign(selectedRows[0])}
          >
            <DirectionsBoatIcon />
          </IconButton>
        </Tooltip>
      )}
      {onFilter && filterInfo && (
        <Tooltip title="איפוס סינון" arrow>
          <IconButton onClick={onReset} sx={VIEW_TILE_ICONS}>
            <ReplayIcon />
          </IconButton>
        </Tooltip>
      )}
      {status && selectedRows && selectedRows.length > 0 && (
        <Tooltip title="שינוי סטטוס" arrow>
          <IconButton
            onClick={() => onSendSelected?.(selectedRows)}
            sx={VIEW_TILE_ICONS}
          >
            <PublishedWithChanges />
          </IconButton>
        </Tooltip>
      )}
      {onAdd && (
        <Tooltip title="הוספה" arrow>
          <IconButton onClick={onAdd} sx={VIEW_TILE_ICONS}>
            <AddIcon />
          </IconButton>
        </Tooltip>
      )}
      {/* {onColumn && columnInfo && <span>column icon</span>} */}
      {to && (
        <Tooltip title={isExpanded ? "הגדלה" : "הקטנה"} arrow>
          <IconButton
            onClick={() => navigate(to)}
            sx={{
              ...VIEW_TILE_ICONS,
              ...(isExpanded && { border: "none" }),
            }}
          >
            <ExpendIconSelector isExpends={isExpanded} />
          </IconButton>
        </Tooltip>
      )}
    </Grid>
  );
};

export default LeftNavigation;
