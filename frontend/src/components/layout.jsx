import Header from "./header";
import Footer from "./footer";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;
