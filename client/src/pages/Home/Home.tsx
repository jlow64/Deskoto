/*
Page will be simple, showing off a special promotion or item. Will 
show the navbar for page navigation and also show the footer with privacy
notes and another area of page navigation.
*/
import { HomeContainer } from './style';
import Popular from 'components/Popular';

const Home = () => {
  return (
    <HomeContainer>
      <Popular />
    </HomeContainer>
  );
};

export default Home;
