import usePanelState from "../utils/usePanelState";

export default function Panel({ active, children }) {
  const isActive = usePanelState();

  return isActive || active ? children : null;
}
