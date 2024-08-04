import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotosThunk } from "../../store/photosSlice/getPhotosThunk";
import { getPostsThunk } from "../../store/postsSlice/getPostsThunk";
import { DataContainer } from "../DataContainer/DataContainer";
import { SinglePhoto, SinglePost } from "./StyledDataType";
import { useNavigate } from "react-router-dom";

export const ToggleDataType = ({ option }) => {
  const dispatch = useDispatch();
  const allPhotos = useSelector((state) => state.photos.photos);
  const allPosts = useSelector((state) => state.posts.posts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPhotosThunk());
    dispatch(getPostsThunk());
  }, [dispatch]);
  return (
    <>
      {option === "photos" &&
        allPhotos.map((photo, index) => (
          <DataContainer key={index} onClick={() => navigate(`/details/photo/${photo.id}`)}>
            <SinglePhoto>
              <img src={photo.download_url} alt="post-pgoto" />
            </SinglePhoto>
          </DataContainer>
        ))}

      {option === "posts" &&
        allPosts.map((post, index) => (
          <DataContainer key={index} onClick={() => navigate(`/details/post/${post.id}`)}>
            <SinglePost>{post.title}</SinglePost>
          </DataContainer>
        ))}
    </>
  );
};
