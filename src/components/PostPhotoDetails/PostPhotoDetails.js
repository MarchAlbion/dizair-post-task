import { StyledUser } from "../DataContainer/StyledDataContainer";
import { StyledPostContainer } from "../PostDetails/StyledPostDetails";
import avatar from "../../assets/images/avatar.png";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StyledPhotoContainer } from "./StyledPhotoDetails";

export const PostPhotoDetails = () => {
  const photos = useSelector((state) => state.photos.photos);

  const { id } = useParams();
  const SinglePhoto = photos.find((photo) => photo.id === id);
  return (
    <StyledPostContainer>
      <StyledUser>
        <img src={avatar} alt="avatar" />
        <div>
          <div id="name">Catherine Surname</div>
          <div id="username">@Catherine13</div>
        </div>
      </StyledUser>
      <StyledPhotoContainer>
        <div id="author">Author : {SinglePhoto?.author}</div>
        <img src={SinglePhoto?.download_url} alt="post-pgoto" />
      </StyledPhotoContainer>
    </StyledPostContainer>
  );
};
