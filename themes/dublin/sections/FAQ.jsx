import {Chunk, ChunkCollection, ChunkFieldValue} from "editmode-react";
import {useState} from "react";
import GeneralPanelContent from "../components/FaqTabs";

export default function Faq() {

  return (
    <section class="py-20 2xl:py-40 bg-blue-50">
      <div class="container px-4 mx-auto">
        <div class="mb-20 text-center">
          <span class="text-lg font-bold text-blue-500"><Chunk contentKey="faq_section_heading_before"/></span>
          <h2 class="mt-8 text-7xl font-bold font-heading"><Chunk contentKey="faq_section_heading"/></h2>
        </div>
        <div class="max-w-4xl mx-auto">
          <GeneralPanelContent />
        </div>
      </div>
    </section>
  );
}
