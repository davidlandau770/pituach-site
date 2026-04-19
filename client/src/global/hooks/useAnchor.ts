import { MouseEvent, useCallback, useMemo, useState } from "react";

const useAnchor = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isPopupOpen = Boolean(anchorEl);

  const onOpen = useCallback(
    (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget),
    []
  );
  const onClose = useCallback(() => setAnchorEl(null), []);

  const value = useMemo(() => ({ anchorEl, isPopupOpen }), [anchorEl]);

  return { ...value, onOpen, onClose, setAnchorEl };
};

export default useAnchor;
