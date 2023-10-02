import { useEffect, useState } from "react";
import List from "../../tutorial/05-leverage-javascript/starter/List";
import "./App.css";
// const url = "https://api.github.com/users/QuincyLarson";
// function MultipleReturnsFetchData() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);

//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await fetch(url);
//         const user = await res.json();
//         setUser(user);
//       } catch (error) {
//         setIsError(true);
//         console.log(error);
//       }
//       setIsLoading(false);
//     };
//     fetchUser();
//   }, []);
//   if (isLoading) {
//     return <h2>Loading</h2>;
//   }
//   if (isError) {
//     return <h2>Tere was an error</h2>;
//   }
//   const { avatar_url, name, company, bio } = user;

//   return (
//     <>
//       <img src={user.avatar_url} alt="{user.name}" />
//       <h2>{user.name}</h2>
//     </>
//   );
// }

// const CleanupFunction = () => {
//   const [toggle, setToggle] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setToggle(!toggle)}>toggle</button>
//       {toggle && <RandomComponent />}
//     </div>
//   );
// };

// const RandomComponent = () => {
//   useEffect(() => {
//     const someFunc = () => {};
//     window.addEventListener("scroll", someFunc);
//   }, []);
//   return <h1>bye bye</h1>;
// };
export const App = () => {
  return (
    <div>
      <h1>leverage javascript</h1>
      <List />
    </div>
  );
};

export default App;
