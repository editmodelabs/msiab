import { useState } from "react";
import Tab from "./Tab";

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="tab-list max-w-3xl mx-auto">
        <div className="lex flex-wrap px-4 text-center lg:-mx-4 lg:space-x-4 text-base lg:text-xl">
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </div>
      </div>
      <div className="tab-content">
        {children.map((child) => {
          child.props.label !== activeTab ? undefined : child.props.children;
        })}
      </div>
    </>
  );
}
