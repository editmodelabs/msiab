import PricingPlans from "../sections/PricingPlans"
import Layout from "../components/Layout";

export default function Pricing() {
  return (
    <PricingPlans />
  );
}

Pricing.getLayout = (page) => <Layout pageName="Pricing">
  {page}</Layout>;
