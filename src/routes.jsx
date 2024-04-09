import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Posts from "./pages/Posts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" index element={<Home />}></Route>
      <Route path="posts?/:tagName" element={<Posts />}></Route>
    </Route>,
  ),
);

export default router;
