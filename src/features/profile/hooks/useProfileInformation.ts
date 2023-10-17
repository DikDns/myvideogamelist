import { useState, useContext } from "react";
import { UserProfileContext } from "../components/UserProfileProvider";

const defaultBio = "A gamer who hasn't set their bio yet.";

export default function useProfileInformation() {
  const user = useContext(UserProfileContext);
  const [steamUsername, setSteamUsername] = useState(
    user?.gameSocialNetwork?.steamUsername || ""
  );
  const [bio, setBio] = useState(user?.bio || defaultBio);
  const [onEdit, setOnEdit] = useState(false);

  return {
    user,
    steamUsername,
    bio,
    onEdit,
    setSteamUsername,
    setBio,
    setOnEdit,
  };
}

export type ProfileInformation = ReturnType<typeof useProfileInformation>;
