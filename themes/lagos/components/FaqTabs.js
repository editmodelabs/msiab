import Panel from "./Panel";
import useTabState from "../utils/useTabState";
import Tabs from "./Tabs";
import computeClassName from "../utils/computeClassName";
import General from "./GeneralTab";
import Payment from "./PaymentsTab";

const cn = (...args) => args.filter(Boolean).join(" ");

export const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();
  const add_cn = computeClassName(isActive);

  return (
    <button
      className={cn("tab", isActive && "active") + add_cn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default function FaqTabs() {
  return (
    <Tabs>
      <div class="border-b">
        <div class="mb-16 max-w-xl mx-auto px-4 text-center">
          <span class="text-green-600 font-bold">
            Dolor sit amet consectutar
          </span>
          <h2 class="text-4xl lg:text-5xl font-bold font-heading">
            Frequently Asked Questions
          </h2>
        </div>
        <div class="max-w-3xl mx-auto">
          <div class="flex flex-wrap px-4 text-center lg:-mx-4 lg:space-x-4 text-base lg:text-xl">
            <Tab>General</Tab>

            <Tab>Payments</Tab>
          </div>
        </div>
      </div>

      <div className="tab-progress" />

      <Panel>
        <General />
      </Panel>

      <Panel>
        <Payment />
      </Panel>
    </Tabs>
  );
}
