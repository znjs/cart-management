import "./App.css";
import tw from "tailwind-styled-components";
import { Filter, ProductList } from "./components";
function App() {
  return (
    <AppWrapper>
      <Header>Cart Management</Header>
      <Wrapper>
        <Filter />
        <ProductList />
      </Wrapper>
    </AppWrapper>
  );
}
const Header = tw.h1`text-3xl font-bold italic`;
const AppWrapper = tw.div`App`;
const Wrapper = tw.div`flex relative`;
export default App;
