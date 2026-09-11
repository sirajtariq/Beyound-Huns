import Layout from '../components/layout/Layout';
import HomeHero from '../components/home/HomeHero';
import HomeIntro from '../components/home/HomeIntro';
import HomeServices from '../components/home/HomeServices';
import HomeWhy from '../components/home/HomeWhy';
import HomeSectors from '../components/home/HomeSectors';
import HomeClients from '../components/home/HomeClients';
import HomeCommitment from '../components/home/HomeCommitment';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <HomeIntro />
      <HomeServices />
      <HomeWhy />
      <HomeSectors />
      <HomeClients />
      <HomeCommitment />
      <HomeCTA />
    </Layout>
  );
}

