import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomeLayout from "./pages/HomeLayout";
import DestinationLayout from "./pages/DestinationLayout";
import CrewLayout from "./pages/CrewLayout";
import TechnologyLayout from "./pages/TechnologyLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomeLayout />} />
      <Route path="destination" element={<DestinationLayout />} />
      <Route path="crew" element={<CrewLayout />} />
      <Route path="technology" element={<TechnologyLayout />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
