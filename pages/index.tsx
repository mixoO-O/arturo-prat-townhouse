import type { NextPage } from 'next';
import HeaderImage from '../components/HeaderImage';

const Home: NextPage = () => {
  return (
    <div>
      <HeaderImage
        title={'Dummy Title'}
        subtitle={'Dummy subtitle'}
      />
    </div>
  );
};

export default Home;
