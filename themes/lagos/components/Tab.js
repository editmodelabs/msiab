export default function Tab({ onClick, activeTab, label }) {
  let className = "tab-list-item";
  if (activeTab === label) {
    className += " tab-list-active";
  }
  return (
    <li className={className} onClick={onClick}>
      {label}
    </li>
  );
}
