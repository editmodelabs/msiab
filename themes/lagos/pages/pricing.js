import PricingSection from "../components/Pricing";
import withEditmode, { getStaticProps } from "../components/withEditmode";

function Pricing() {
  return <PricingSection />;
}

export { getStaticProps };

export default withEditmode(Pricing);
