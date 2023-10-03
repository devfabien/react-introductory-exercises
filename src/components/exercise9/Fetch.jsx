import { useState, useEffect } from "react";
import UserDisplayComponent from "./UserDisplayComponent";

export default function Fetch() {
  const [user, setUser] = useState([]);
  const [random, setRandom] = useState(0);

  useEffect(
    function () {
      fetch("https://random-data-api.com/api/users/random_user?size=10")
        .then((res) => res.json())
        .then((data) => setUser(data));
    },
    [random]
  );

  const DATA = user.map((item) => (
    <UserDisplayComponent
      key={item.id}
      firstName={item.first_name}
      lastName={item.last_name}
      avatar={item.avatar}
      employment={item.employment.title}
      skill={item.employment.key_skill}
      userName={item.username}
      email={item.email}
      tel={item.phone_number}
      gender={item.gender}
    />
  ));

  return (
    <div className="flex flex-col items-center p-10">
      <button
        className="p-2 m-3 bg-red-500 rounded-lg text-white text-xl font-medium hover:bg-red-600 w-fit"
        onClick={() => setRandom((prevRandom) => prevRandom + 1)}
      >
        Fetch Random
      </button>
      <div className="flex flex-wrap gap-10 bg-green-300 p-2">{DATA}</div>
    </div>
  );
}
