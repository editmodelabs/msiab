import usePanelState from "../utils/usePanelState";

export default Panel = ({ active, children }) => {
  const isActive = usePanelState();

  return isActive || active ? children : null;
};
