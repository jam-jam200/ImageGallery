import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetImages from "./GetImages";
import Profile from "./Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetImages />}></Route>
          <Route path="/:username" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
