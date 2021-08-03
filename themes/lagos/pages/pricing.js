import Layout from "../components/Layout";
import PricingSection from "../components/Pricing";
import { getStaticProps } from "../components/withEditmode";

export default function Pricing() {
  return <PricingSection />;
}

Pricing.getLayout = (page) => <Layout pageName="Pricing">{page}</Layout>;

export { getStaticProps };
