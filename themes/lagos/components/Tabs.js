import { useState } from "react";

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {
          (children,
          map((child) => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          }))
        }
      </ol>
      <div className="tab-content">
        {children.map((child) => {
          child.props.label !== activeTab ? undefined : child.props.children;
        })}
      </div>
    </div>
  );
}
