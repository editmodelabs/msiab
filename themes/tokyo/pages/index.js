import dynamic from 'next/dynamic';

const Home = dynamic(
  () => import('./Home'),
  { ssr: false }
)
export default function NoSSRComponent() {
  return <Home />
}