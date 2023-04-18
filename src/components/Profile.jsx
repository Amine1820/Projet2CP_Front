import axios from "axios";
import { Buffer } from "buffer";
import { React, useEffect, useState } from "react";
import { useAuthHeader, useAuthUser, useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { Image } from "cloudinary-react";
const Profile = () => {
  const authHeader = useAuthHeader();
  const signOut = useSignOut();
  const auth = useAuthUser();
  let navigate = useNavigate();
  const [imageSelected, setImageSelected] = useState("");
  const [imagePublicId, setImagePublicId] = useState("");

  const formatted = (str) => {
    return str.substring(str.indexOf(":") + 3, str.length - 4);
  };
  //request configuration with jwt token
  let config = {
    headers: { authorization: `${authHeader()}` },
    responseType: "buffer",
  };
  let bodyParameters = {
    key: "value",
  };
  useEffect(() => {
    axios
      .get("http://localhost:3030/getImage", config, bodyParameters)
      .then((response) => {
        setImagePublicId(formatted(response.data));
      });
  }, []);
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "hjtuncd9");
    try {
      axios
        .post(
          "https://api.cloudinary.com/v1_1/dibcmwnvo/image/upload",
          formData
        )
        .then((res) => {
          setImagePublicId(res.data.public_id);
          console.log(imagePublicId);
          //store the public id in the db
          config = {
            headers: { authorization: `${authHeader()}` },
            responseType: "buffer",
          };
          bodyParameters = {
            key: "value",
            link: res.data.public_id,
          };
          axios.post("http://localhost:3030/setPhoto", bodyParameters, config);
        });
    } catch (err) {}
  };
  return (
    <div className="flex-col">
      Welcome to profile!!{auth().email}
      <button
        className="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        onClick={() => signOut()}
      >
        Sign out
      </button>
      <button
        className="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => navigate("/addBlog")}
      >
        Add Blog
      </button>
      <button
        className="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => navigate("/waitings_dashboard")}
      >
        WaitingsList
      </button>
      <input
        type="file"
        onChange={(e) => {
          setImageSelected(e.target.files[0]);
        }}
      />
      <button
        className="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        onClick={() => uploadImage()}
      >
        Update photo
      </button>
      {imagePublicId != null && (
        <Image
          cloudName="dibcmwnvo"
          public_id={imagePublicId}
          className="rounded-full"
        />
      )}
    </div>
  );
};

export default Profile;
