
import { GlobalStyles } from "./styles/globalStyles";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
