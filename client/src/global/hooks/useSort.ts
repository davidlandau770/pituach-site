import { MouseEvent, useEffect, useMemo, useState } from "react";
import { GenericDataType } from "../types/generic-table.types";
import { sortArrayOfData } from "../utils/algoMethods";
import { DirectionType, SortTableType } from "../types/sort.types";

const useSort = <T extends GenericDataType>(
  data: T[] | null,
  orderBy: keyof T = "id",
  direction: DirectionType = "asc"
) => {
  const [sortInfo, setSortInfo] = useState<SortTableType<T>>({
    direction,
    orderBy,
  });
  const [sortData, setSortData] = useState<T[] | null>(data);

  useEffect(() => {
    data &&
      setSortData(() =>
        sortArrayOfData(data, sortInfo.orderBy, sortInfo.direction)
      );
  }, [data, sortInfo]);

  const handleSort = (e: MouseEvent, key: keyof T) => {
    e.stopPropagation();
    setSortInfo((prev) => ({
      orderBy: key,
      direction: prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const value = useMemo(() => ({ sortData, sortInfo }), [sortData, sortInfo]);
  return { ...value, handleSort };
};

export default useSort;
