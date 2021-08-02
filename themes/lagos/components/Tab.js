import Panel from "./Panel";
import useTabState from "../utils/useTabState";
import computeClassName from "../utils/computeClassName";

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();
  const add_cn = computeClassName(isActive);

  return (
    <button
      className={`${cn("tab", isActive && "active")} ${add_cn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Tab;
