import { useLayoutEffect, useState } from "react";

type UseAsync<T> = [
  data: T | null,
  loading: boolean,
  error: Error | null
];

export type UseAsyncResult<T> = [
  ...UseAsync<T>,
  reload: () => void
];

export const useAsync = <T>(
  func: () => (T | Promise<T>),
  deps: any[] = []
): UseAsyncResult<T> => {
  const [reload, setReload] = useState({});
  const [data, setData] = useState<UseAsync<T>>([null, true, null]);

  useLayoutEffect(() => (
    Promise.resolve()
      .then(func)
      .then(data => setData([data, false, null]))
      .catch(error => setData([null, false, error])),
    () => setData([null, true, null])
  ), [reload, ...deps]);

  return [...data, () => setReload({})];
};