import LoginPage from "./components/pages/login/LoginPage";
import {Routes, Route } from "react-router-dom"
import OrderPage from "./components/pages/login/order/OrderPage";
import ErrorPage from "./components/pages/login/error/ErrorPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/orderpage" element={<OrderPage />} />
        <Route path="*" element= {<ErrorPage />} />
      </Routes>
    </div>
    )
}

export default App;
