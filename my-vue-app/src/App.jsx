import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
// const data = [
//   { id: 1, name: "jack" },
//   { id: 2, name: "lack" },
//   { id: 3, name: "sack" },
// ];
// const people = [
//   { id: 1, name: "bob", nickName: "stud" },
//   { id: 2, name: "lack" },
//   { id: 3, name: "oliver" },
// ];

// function ErrorExample() {
//   const [count, setCOunt] = useState(0);
//   const handleClick = () => {
//     setCOunt(count + 1);
//   };
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button type="button" onClick={handleClick} className="btn">
//         Click
//       </button>
//     </div>
//   );
// }

// const useStateArray = () => {
//   const [people, setPeople] = React.useState(data);
//   const removeItem = (id) => {
//     const newPeople = people.filter((person) => person.id !== id);
//     setPeople(newPeople);
//   };
//   const clear = () => {
//     setPeople([]);
//   };
//   const addAll = () => {
//     setPeople(data);
//   };
//   return (
//     <div>
//       {people.map((person) => {
//         const { id, name } = person;
//         // console.log(person);
//         return (
//           <div key={id}>
//             <h4>{name}</h4>
//             <button type="button" onClick={() => removeItem(id)}>
//               clear
//             </button>
//           </div>
//         );
//       })}
//       <button type="button" onClick={clear} style={{ margin: "2rem" }}>
//         Remove all
//       </button>
//       <button type="button" onClick={addAll} style={{ margin: "2rem" }}>
//         Add all
//       </button>
//     </div>
//   );
// };

// const useStateObject = () => {
//   const displayName = () => {
//     setPerson({
//       name: "jack",
//       age: 14,
//       hobby: "doing nothing",
//     });
//   };
//   const [person, setPerson] = useState({
//     name: "peter",
//     age: 24,
//     hobby: "reading",
//   });

//   return (
//     <>
//       <h3>{person.name}</h3>
//       <h3>{person.age}</h3>
//       <h3>{person.hobby}</h3>
//       <button className="btn" onClick={displayName}>
//         Click
//       </button>
//     </>
//   );
// };

const url = "https://api.github.com/users";
const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const users = await res.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="box">
      <h3>users</h3>
      <ul className="user">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          console.log(user);
          return (
            <li key={id}>
              <img src={avatar_url} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
