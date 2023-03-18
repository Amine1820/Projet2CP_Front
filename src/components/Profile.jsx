import axios from "axios";
import { Buffer } from "buffer";
import { React, useEffect, useState } from "react";
import { useAuthHeader, useAuthUser, useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const authHeader = useAuthHeader();
  const signOut = useSignOut();
  const auth = useAuthUser();
  let navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    //request configuration with jwt token
    const config = {
      headers: { authorization: `${authHeader()}` },
      responseType: "buffer",
    };
    const bodyParameters = {
      key: "value",
    };
    axios
      .get("http://localhost:3030/getImage", config, bodyParameters)
      .then((response) => {
        let jsObj = JSON.parse(response.data);
        console.log(jsObj.data);
        const contentType = "image/png";
        const uintArray = new Uint8Array(jsObj.data);
        const blob = new Blob([uintArray], {
          type: "image/png",
        });
        const url = URL.createObjectURL(blob);
        console.log('blob size',blob.size);
        console.log(url);
        setImageSrc(url);
      });
    axios.post("http://localhost:4000/profile", bodyParameters, config);
  }, []);

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
        onClick={() => navigate("/waitings_dashboard")}
      >
        WaitingsList
      </button>
      <img src={imageSrc} alt="image"></img>
    </div>
  );
};

export default Profile;
