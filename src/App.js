import {Route, Routes} from "react-router";
import './App.css';
import Main from "./components/layout/Main";

function App() {
  return (
      <>
        <Routes>
          <Route path={""} element={<Main/>}></Route>
        </Routes>
      </>
  );
}

export default App;
