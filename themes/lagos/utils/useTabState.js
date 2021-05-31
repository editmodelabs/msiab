import { useMemo, useContext } from "react";
import useConstant from "use-constant";
import TabsState from "../components/TabsStateContext";
import Elements from "../components/ElementsContext";

const useTabState = () => {
  const [activeIndex, setActive] = useContext(TabsState);
  const elements = useContext(Elements);

  const tabIndex = useConstant(() => {
    const currentIndex = elements.tabs;
    elements.tabs += 1;

    return currentIndex;
  });

  const onClick = useConstant(() => () => setActive(tabIndex));

  const state = useMemo(
    () => ({
      isActive: activeIndex === tabIndex,
      onClick,
    }),
    [activeIndex, onClick, tabIndex]
  );

  return state;
};

export default useTabState;
