import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";
export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
