import { useCallback, useEffect, useMemo, useState } from "react";
import { FilterInterface } from "../types/filter.types";

const useFilter = <T>(
  initialData: T[] | null,
  initialOptions?: FilterInterface[]
) => {
  const [options] = useState<FilterInterface[]>(() =>
    initialOptions ? initialOptions : []
  );

  const [data, setData] = useState<T[] | null>(initialData);
  const [selectedOptions, setSelectedOptions] = useState<FilterInterface[]>([]);
  const [filteredData, setFilterData] = useState<T[] | null>(initialData);

  useEffect(() => {
    setData(initialData);
    setFilterData(initialData);
  }, [initialData]);

  const onFilterData = useCallback(
    (data: T[], key: keyof T, values: FilterInterface["value"]) => {
      if (!data.length) return [];
      if (typeof values === "string")
        return data.filter((item) => item[key] === values);

      const filterData: T[] = [];
      values.forEach((value) => {
        const filterDataByValue = data.filter((item) => item[key] === value);
        filterData.push(...filterDataByValue);
      });
      return filterData;
    },
    []
  );

  const filterDataBySelectedOptions = useCallback(
    (data: T[], mySelectedOptions: FilterInterface[]) => {
      if (!mySelectedOptions.length || !data.length) return data;

      let filtered = data;

      mySelectedOptions.forEach(({ key, value }) => {
        filtered = onFilterData(filtered, key as keyof T, value);
      });

      return filtered;
    },
    [onFilterData]
  );

  useEffect(() => {
    if (data) {
      setFilterData(filterDataBySelectedOptions(data, selectedOptions));
    }
  }, [data, selectedOptions, filterDataBySelectedOptions]);

  const resetSelectedOption = useCallback(() => setSelectedOptions([]), []);

  const removeFilterByLabel = useCallback(
    (newFilter: FilterInterface) =>
      setSelectedOptions((prev) =>
        prev.filter((filter) => filter.label !== newFilter.label)
      ),
    []
  );

  const removeFilterByKey = useCallback(
    (key: string) =>
      setSelectedOptions((prev) => prev.filter((filter) => filter.key !== key)),
    []
  );

  const addOrRemoveFilter = useCallback((propsFilter: FilterInterface) => {
    setSelectedOptions((prev) => {
      if (!prev.length) return [propsFilter];

      const filterIndex = prev.findIndex(
        (existingFilter) => existingFilter.key === propsFilter.key
      );
      if (filterIndex === -1) return [...prev, propsFilter];

      const PREV_FILTER_VALUE = prev[filterIndex].value;
      const PROPS_FILTER_VALUE = propsFilter.value;

      if (typeof PREV_FILTER_VALUE === "string") {
        if (PREV_FILTER_VALUE === PROPS_FILTER_VALUE)
          return prev.filter((filter) => filter.key !== propsFilter.key);

        if (
          typeof PROPS_FILTER_VALUE === "string" &&
          PREV_FILTER_VALUE !== PROPS_FILTER_VALUE
        ) {
          prev[filterIndex].value = [PREV_FILTER_VALUE, PROPS_FILTER_VALUE];
          return [...prev];
        }
      }

      if (Array.isArray(PREV_FILTER_VALUE)) {
        if (typeof PROPS_FILTER_VALUE === "string") {
          const valueIndex = PREV_FILTER_VALUE.findIndex(
            (value) => value === PROPS_FILTER_VALUE
          );
          if (valueIndex === -1) {
            PREV_FILTER_VALUE.push(PROPS_FILTER_VALUE);
            return [...prev];
          } else {
            PREV_FILTER_VALUE.splice(valueIndex, 1);
            if (!PREV_FILTER_VALUE.length)
              return prev.filter((f) => f.key !== propsFilter.key);

            return [...prev];
          }
        }
      }

      return [...prev];
    });
  }, []);

  const value = useMemo(
    () => ({ filteredData, options, selectedOptions }),
    [filteredData, options, selectedOptions]
  );

  return {
    ...value,
    resetSelectedOption,
    removeFilterByLabel,
    removeFilterByKey,
    addOrRemoveFilter,
  };
};

export default useFilter;
