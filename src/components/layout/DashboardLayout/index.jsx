import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
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
