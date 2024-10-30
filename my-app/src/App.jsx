import Navbar from "./Components/Navbar.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InvoiceList from "./Components/InvoiceList";
import InvoiceDetail from "./Components/InvoiceDetails";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState(false);
  function fun() {
    setList(!list);
  }
  return (
    <>
      <Navbar />
      <div className= "flex">
        <Sidebar fun={fun} />
        {list && (
          <div className="flex-1 h-screen">
            <Router>
              <div className="p-10">
                <Routes>
                  <Route path="/" element={<InvoiceList />} />
                  <Route path="/invoice/:id" element={<InvoiceDetail />} />
                </Routes>
              </div>
            </Router>
          </div>
        )}
      </div>
    </>
  );
}
