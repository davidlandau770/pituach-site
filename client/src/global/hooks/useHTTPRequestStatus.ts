import { useCallback, useMemo, useState } from "react";

export type ErrorType = null | string;
export type RequestStatusType<T> = (
  pending: boolean,
  data: T | null,
  error: ErrorType
) => void;
type ReturnType<T> = [T | null, boolean, ErrorType, RequestStatusType<T>];
type ValueType<T> = [T | null, boolean, ErrorType];

const useHTTPRequestStatus = <T>(): ReturnType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<ErrorType>(null);

  const updateReqStatus: RequestStatusType<T> = useCallback(
    (pending: boolean, data: T | null, errorMessage: ErrorType) => {
      setPending(pending);
      setError(errorMessage);
      setData(data);
    },
    [data]
  );

  const value: ValueType<T> = useMemo(
    () => [data, pending, error],
    [data, pending, error]
  );

  return [...value, updateReqStatus];
};

export default useHTTPRequestStatus;
