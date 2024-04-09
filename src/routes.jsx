import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Content from "./pages/Content";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" index element={<Home />}></Route>
      <Route path="posts?/:tagName" element={<Posts />}></Route>
      <Route path="content/:contentTitle" element={<Content />}></Route>
    </Route>,
  ),
);

export default router;
