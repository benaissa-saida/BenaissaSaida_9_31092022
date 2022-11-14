import Layout from '../components/Layout';
import Banner from '../components/Banner';
import coverHome from '../assets/coverHome.png';
import Cards from '../components/Cards';
import logements from '../datas/logements';

function Home() {
   return (
      <Layout>
         <Banner className="banner-container">
            <img className="ks-cover-img" src={coverHome} alt="background" />
            <h1 className="ks-motto">Chez vous, partout et ailleurs</h1>
         </Banner>
         <Cards data={logements} />
      </Layout>
   );
}

export default Home;