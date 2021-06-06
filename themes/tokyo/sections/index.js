import dynamic from 'next/dynamic';

const Header = dynamic(
  () => import('./Header'),
  { ssr: false }
)
const Feature = dynamic(
  () => import('./Feature'),
  { ssr: false }
)
const HowTo = dynamic(
  () => import('./HowTo'),
  { ssr: false }
)
const Testimonial = dynamic(
  () => import('./Testimonial'),
  { ssr: false }
)
const Faqs = dynamic(
  () => import('./Faqs'),
  { ssr: false }
)
const Footer = dynamic(
  () => import('./Footer'),
  { ssr: false }
)

export {
  Header,
  Feature,
  HowTo,
  Testimonial,
  Faqs,
  Footer
}
