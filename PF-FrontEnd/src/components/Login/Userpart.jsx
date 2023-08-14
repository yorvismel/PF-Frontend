import React from "react";
import "./Login"
import { useAuth0 } from "@auth0/auth0-react";
const Userpart = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="profile-container">
      <img className="profile-picture" src={user.picture} alt={user.name} />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-nickname">Nickname: {user.nickname}</p>
    </div>
    )
  );
};
export default Userpart