import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Error from "./components/Error";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products/:slug" element={<ProductPage />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
