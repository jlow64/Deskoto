import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Layout = styled.div`
  flex-direction: column;
  height: 100svh;
  width: 100vw;
  /* general font will be Quicksand */
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
`;

function App() {
  return (
    <Layout>
      <Navbar />
      <Outlet />
      <Footer />
    </Layout>
  );
}

export default App;
