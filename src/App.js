import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./features/chat";
import Join from "./features/join";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
);

export default App;
