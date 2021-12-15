import Header from '../../components/HeadFootLayout/Header';
import Footer from '../../components/HeadFootLayout/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
