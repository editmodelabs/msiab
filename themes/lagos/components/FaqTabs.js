import Panel from "./Panel";
import useTabState from "../utils/useTabState";
import Tabs from "./Tabs";
import Tab from "./Tab";
import GeneralPanelContent from "./GeneralPanel";
import PaymentPanelContent from "./PaymentsPanel";

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
        <GeneralPanelContent />
      </Panel>

      <Panel>
        <PaymentPanelContent />
      </Panel>
    </Tabs>
  );
}
