import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Layout from "./000-layout";
import Catalog from "./010-catalog";
import Form from "./100-form";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") navigate("/catalog", { replace: true });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="catalog" element={<Catalog />} />
        <Route path="smartphone" element={<Form />}>
          <Route path=":id" element={<Form />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
