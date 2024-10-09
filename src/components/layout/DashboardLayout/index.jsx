import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { menuItems } from "./constants";
import * as S from "./styles";

const DashboardLayout = ({ children }) => {
  return (
    <S.DashboardLayout>
      <S.Wrapper>
        <Sidebar menuItems={menuItems}></Sidebar>
        <S.Body>
          <Header></Header>
          {children}
        </S.Body>
      </S.Wrapper>
      <Footer></Footer>
    </S.DashboardLayout>
  );
};

export default DashboardLayout;
