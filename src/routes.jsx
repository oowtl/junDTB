import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// PAGES
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />}></Route>),
);

export default router;
