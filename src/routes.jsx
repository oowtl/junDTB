import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Post from "./components/blocks/PostBox";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="posts?/:tagName" element={<Post />}></Route>
    </Route>,
  ),
);

export default router;
