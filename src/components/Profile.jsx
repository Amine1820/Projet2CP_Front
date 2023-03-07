import axios from "axios";
import { React } from "react";
import { useAuthHeader, useAuthUser, useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const authHeader = useAuthHeader();
  const signOut = useSignOut();
  const auth = useAuthUser();
  try {
    const config = {
      headers: { authorization: `${authHeader()}` },
    };
    const bodyParameters = {
      key: "value",
    };

     axios.post(
      "http://localhost:4000/profile",
      bodyParameters,
      config
    );
  } catch (err) {}
  let navigate = useNavigate();
  return (
    <div className="flex-col">
      Welcome to profile!!{auth().email}
      <button
        className="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={signOut}
      >
        Sign out
      </button>
      <button
        className="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={()=>navigate('/waitings_dashboard')}
      >
        WaitingsList
      </button>
    </div>
  );
};

export default Profile;
