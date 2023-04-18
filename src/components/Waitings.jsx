import axios from "axios";
import { React, useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const Waitings = () => {
  const [waitings, setWaitings] = useState([]);
  let navigate = useNavigate();
  const authHeader = useAuthHeader();
  useEffect(() => {
    try {
      const config = {
        headers: { authorization: `${authHeader()}` },
      };
      var bodyParameters = {
        key: "value",
      };
      axios
        .get("http://localhost:3030/waitings_dashboard", config, bodyParameters)
        .then((res) => setWaitings(res.data));
    } catch (err) {
      navigate("/");
    }
  }, []);
  const accept = (e) => {
    try {
      const config = {
        headers: { authorization: `${authHeader()}` },
      };
      var bodyParameters = {
        email: e,
      };
      axios.post("http://localhost:3030/acceptUser", bodyParameters, config);
    } catch (err) {
      navigate("/");
    }
  };
  const refuse = (e) => {
    try {
      const config = {
        headers: { authorization: `${authHeader()}` },
      };
      var bodyParameters = {
        email: e,
      };
      axios.post("http://localhost:3030/refuseUser", bodyParameters, config);
    } catch (err) {
      navigate("/");
    }
  };
  if (waitings === null) {
    return <div>Waiting List: 0</div>;
  } else {
    return (
      <div className="text-white">
        Waiting List: {waitings.length}
        <table className="mx-auto">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Actions</th>
              <th>Gender</th>
              <th>Motivation</th>
            </tr>
          </thead>
          <tbody>
            {waitings.map((item) => {
              return (
                <tr className="border-2 space-y-10" key={item.id}>
                  <td className="border-2">{item.firstname}</td>
                  <td className="border-2">{item.lastname}</td>
                  <td className="border-2 px-2">{item.email}</td>
                  <td className="border-2 px-2">{item.phone}</td>
                  <td className="border-2 px-2">{item.gender}</td>
                  <td className="border-2 px-2">{item.motivation}</td>
                  <td>
                    <button
                      onClick={() => accept(item.email)}
                      className="bg-green-500 text-white p-2 rounded-full "
                    >
                      Accept
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => refuse(item.email)}
                      className="bg-red-500 text-white p-2 rounded-full "
                    >
                      Refuse
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Waitings;
