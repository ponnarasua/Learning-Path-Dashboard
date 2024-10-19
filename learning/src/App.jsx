import { BrowserRouter, Routes,Route } from "react-router-dom";
import WebLayout from "./layout/Weblayout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Error from "./pages/Error";

const App =() => {
  return (
      <BrowserRouter>
          <Routes>
            <Route element={<WebLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
      </BrowserRouter>
  )
}
export default App