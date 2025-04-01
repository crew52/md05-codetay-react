import {Route, Routes} from "react-router";
import './App.css';
import HeaderTop from "./components/HeaderTop";

function App() {
  return (
      <>
        <Routes>
          <Route path={"/login"} element={<HeaderTop/>}></Route>
        </Routes>
      </>
  );
}

export default App;
