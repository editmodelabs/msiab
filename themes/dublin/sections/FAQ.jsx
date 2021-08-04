import {Chunk} from "editmode-react";
import FaqTabs from "../components/FaqTabs";

export default function Faqs() {

  return (
    <section className="py-20 2xl:py-40 bg-blue-50">
      <div className="container px-4 mx-auto">
        <div className="mb-20 text-center">
          <span className="text-lg font-bold text-blue-500"><Chunk contentKey="faq_home_section" field="Tagline"/></span>
          <h2 className="mt-8 text-7xl font-bold font-heading"><Chunk contentKey="faq_home_section" field="Headline"/></h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <FaqTabs />
        </div>
      </div>
    </section>
  );
}
