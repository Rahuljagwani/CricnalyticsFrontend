import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MostWickets from "./pages/MostWickets"
import WicketsBB from "./pages/WicketsBB";
import RunsBB from "./pages/RunsBB";
import NoPage from "./pages/NoPage";
import MaxRuns from "./pages/MaxRuns";
function User()
{

    return (
        <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/MostWickets" element={<MostWickets />} />
          <Route path="/wicketsBB" element={<WicketsBB />} />
          <Route path="/runsBB" element={<RunsBB />} />
          <Route path="/MaxRuns" element={<MaxRuns/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
        </>
      );

    
}
export default User;