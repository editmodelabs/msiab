export default function Tab({ onClick, activeTab, label }) {
  let className = "tab-list-item";
  if (activeTab === label) {
    className += " tab-list-active";
  }
  return (
    <button
      className={
        `${className}` +
        " px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-green-600 border-b-2 border-green-600"
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}
