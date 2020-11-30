import React, { useState } from 'react';

function useToolTip() {
  const [tooltipVisibility, setTooltipVisibility] = useState<boolean>(false);

  function toggleTooltip() {
    setTooltipVisibility((prev) => !prev);
  }

  return { tooltipVisibility, toggleTooltip };
}

export default useToolTip;
