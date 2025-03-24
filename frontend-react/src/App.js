import "./App.css";
import background from "./assets/background.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Registration from "./components/Registration";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
        <h1>Anudeep's Expense Tracker</h1>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Spend smarter, save more!</h2>
                <h3>
                  Gain valuable insights into your spending habits and identify
                  areas for potential savings.
                </h3>
              </>
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/userPage/:user_id" element={<User />} />
          <Route
            path="/userPage"
            element={<h1>Wrong UserName or password!!</h1>}
          />
        </Routes>
        {/* 🔻 Add your custom footer below 🔻 */}
        <footer
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "1rem",
            fontSize: "14px",
            color: "#777",
          }}
        >
          Built with ❤️ by <strong>Anudeep Allamsetty</strong>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
