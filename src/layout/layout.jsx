// import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* <SideNav /> */}

      {children}
      <Footer />
    </>
  );
};

export default Layout;
