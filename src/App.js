import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./component/pages/NotFound";
import Members from "./component/member/Members";
import AddMember from "./component/member/AddMember";
import EditMember from "./component/member/EditMember";
import Member from "./component/member/Member";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/member/add" element={<AddMember />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/member/edit/:id" element={<EditMember />} />
          <Route path="/member/:id" element={<Member />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
