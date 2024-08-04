import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StyledPostContainer, StyledPostDetails } from "./StyledPostDetails";
import { StyledUser } from "../DataContainer/StyledDataContainer";

import avatar from "../../assets/images/avatar.png";

export const PostDetails = () => {
  const posts = useSelector((state) => state.posts.posts);
  const { id } = useParams();
  const singlePost = posts.find((post) => post.id === Number(id));
  return (
    <StyledPostContainer >
      <StyledUser>
        <img src={avatar} alt="avatar" />
        <div>
          <div id="name">Catherine Surname</div>
          <div id="username">@Catherine13</div>
        </div>
      </StyledUser>
      <StyledPostDetails>
        <h1>{singlePost?.title}</h1>
        <p>{singlePost?.body}</p>
      </StyledPostDetails>
    </StyledPostContainer>
  );
};
