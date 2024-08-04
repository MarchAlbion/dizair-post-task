
import { GlobalStyles } from "./styles/globalStyles";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPhotosThunk } from "./store/photosSlice/getPhotosThunk";
import { getPostsThunk } from "./store/postsSlice/getPostsThunk";

function App() {
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotosThunk());
    dispatch(getPostsThunk());
  }, [dispatch]);
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
