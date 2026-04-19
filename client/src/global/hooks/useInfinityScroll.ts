import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type ScrollReturnType<T> = [RefObject<HTMLDivElement>, T[] | null, () => void];

const useInfinityScroll = <T>(
  data: T[] | null,
  visibleRowCount = 50,
  rowHeight = 30
): ScrollReturnType<T> => {
  const [visibleData, setVisibleData] = useState<T[] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const bufferCount = 4;
  const totalVisibleDataWithBuffer = visibleRowCount + bufferCount * 2;

  useEffect(() => {
    handleScroll();
    if (data) setVisibleData(() => data.slice(0, visibleRowCount));
  }, [data]);

  const handleScroll = useCallback(() => {
    const current = ref.current;
    if (!data || !current) return;

    const scrollTop = current.scrollTop;
    const currentStartIndex = Math.floor(scrollTop / rowHeight) - bufferCount;
    const startIndexClamped = Math.max(0, currentStartIndex);
    const newData = data.slice(
      startIndexClamped,
      currentStartIndex + totalVisibleDataWithBuffer
    );
    setVisibleData(() => newData);
  }, [data, rowHeight, totalVisibleDataWithBuffer]);

  const value = useMemo(() => visibleData, [visibleData]);

  return [ref, value, handleScroll];
};

export default useInfinityScroll;
