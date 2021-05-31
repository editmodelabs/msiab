import computeClassName from "../utils/computeClassName";

export default function Tab({ onClick, activeTab, label }) {
  const className = computeClassName(activeTab, label);

  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}
