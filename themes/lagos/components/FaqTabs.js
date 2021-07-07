import Panel from "./Panel";
import useTabState from "../utils/useTabState";
import Tabs from "./Tabs";
import Tab from "./Tab";
import GeneralPanelContent from "./GeneralPanel";
import PaymentPanelContent from "./PaymentsPanel";
import { Chunk, useGetChunk } from "editmode-react";

export default function FaqTabs() {
  const primaryColor = useGetChunk("primary_color");
  return (
    <Tabs>
      <div className="border-b">
        <div className="mb-16 max-w-xl mx-auto px-4 text-center">
          <span
            className="text-primary font-bold"
            style={{ color: primaryColor }}
          >
            <Chunk contentKey="faq_section_heading_before" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading leading-tight">
            <Chunk contentKey="faq_section_heading" />
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap px-4 text-center lg:-mx-4 lg:space-x-4 text-base lg:text-xl">
            <Tab>
              <Chunk
                contentKey="faq_tab_one_name"
                style={{ color: primaryColor }}
              />
            </Tab>
            <Tab>
              <Chunk
                contentKey="faq_tab_two_name"
                style={{ color: primaryColor }}
              />
            </Tab>
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
