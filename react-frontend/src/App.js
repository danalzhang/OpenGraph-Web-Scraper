import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import DocumentationPage from "./components/DocumentationPage";
import TryMePage from "./components/TryMePage";
import "./index.css";

function App() {
  return (
    <div className="bg-indigo-700 min-h-screen overflow-hidden">
      <div>
        <NavigationBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/tryme" element={<TryMePage />} />
      </Routes>
    </div>
  );
}

export default App;
