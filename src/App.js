import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage/HomePage"
import ContactPage from "./ContactPage/ContactPage"
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage/>} />
      <Route path="/contact" exact element={<ContactPage />} />
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;
