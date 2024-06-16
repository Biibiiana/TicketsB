import { useEffect, useState } from "react";
// import { AuthContext } from "../../context/auth.context";
import service from "../services/config";
import SyncLoader from "react-spinners/SyncLoader";

export default function MyProfile() {
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const { payload } = useContext(AuthContext);

  const getData = async () => {
    const response = await service.get("/user/myProfile");
    setProfile(response.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading === true) {
    return (
      <div className="spinnerContainer">
        <SyncLoader speedMultiplier={1} color={"blue"} size={40} />
      </div>
    );
  }
  return (
    <div className="profileContainer">
      <h2 className="mainTitle">
        Hello {profile.username} {profile.lastName}
      </h2>
      <h3>This is your profile</h3>
      <h4>Personal data:</h4>
      <li>
        <strong>Name: </strong>
        <p className="capitalize">{profile.username}</p>
      </li>
      <li>
        <strong>Email: </strong>
      </li>

      <p>{profile.email}</p>
    </div>
  );
}