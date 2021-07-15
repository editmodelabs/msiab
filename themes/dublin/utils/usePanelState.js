import { useContext } from "react";
import TabsState from "../components/TabsStateContext";
import Elements from "../components/ElementsContext";
import useConstant from "use-constant";

const usePanelState = () => {
  const [activeIndex] = useContext(TabsState);
  const elements = useContext(Elements);

  const panelIndex = useConstant(() => {
    const currentIndex = elements.panels;
    elements.panels += 1;

    return currentIndex;
  });

  return panelIndex === activeIndex;
};

export default usePanelState