import "./App.css";
import tw from "tailwind-styled-components";
function App() {
  return (
    <div className="App">
      <Header>Title</Header>
    </div>
  );
}
const Header = tw.h1`text-3xl font-bold italic`;
export default App;
