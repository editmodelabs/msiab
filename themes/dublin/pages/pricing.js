import PricingPlans from "../sections/PricingPlans";
import Layout from "../components/Layout";
import { getStaticProps } from "../utils/getStaticProps";

export default function Pricing() {
  return <PricingPlans />;
}

Pricing.getLayout = (page) => <Layout pageName="Pricing">{page}</Layout>;

export { getStaticProps };
