import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useUserData } from "./components/context/UserContext";
import { AuthLoading } from "./components/Loading";
import Register from "./pages/register";
import Album from "./pages/Album";
import Playlist from "./pages/Playlist";
import PageNotFound from "./pages/PageNotFound";
import Admin from "./pages/Admin";

const App = () => {
  const { isAuth, loading } = useUserData();
  return (
    <>
      {loading ? (
        <AuthLoading />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/album/:id" element={<Album />} />
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route
              path="/playlist"
              element={isAuth ? <Playlist /> : <Login />}
            />
            <Route
              path="/register"
              element={isAuth ? <Home /> : <Register />}
            />
            <Route
              path="/admin/dashboard"
              element={isAuth ? <Admin /> : <Login />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
