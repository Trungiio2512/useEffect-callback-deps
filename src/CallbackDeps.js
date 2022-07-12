import { useState, useEffect } from "react";

const navbars = ["posts", "comments", "albums"];
function CallbackDeps() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState(navbars[0]);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((res) => setDatas(res));
  }, [type]);
  return (
    <div>
      {navbars.map((navbar, index) => (
        <button
          key={index}
          style={
            navbar === type
              ? {
                  color: "red",
                  backgroundColor: "#ccc"
                }
              : {}
          }
          onClick={() => setType(navbar)}
        >
          {navbar}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {datas.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CallbackDeps;
