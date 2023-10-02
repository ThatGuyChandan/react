import React from "react";
import ReactDom from "react-dom/client";
import { books } from "./books";
import "./index.css";
import Book from "./boook";
// const Image =
//   "https://m.media-amazon.com/images/I/71vfo4cJCjL._AC_UY327_FMwebp_QL65_.jpg";
// const Title = "How To Not Be Ok";
// const Author = "Nobody";

function Booklist() {
  return (
    <>
      <h1>Best sellers</h1>
      <section className="booklist">
        {/* <EventExample /> */}
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Booklist />);

// const EventExample = () => {
//   const handleFormInput = (e) => {
//     console.log(e.target);
//     console.log(e.target.value);
//     console.log(e.target.name);
//   };
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log("submitted");
//   };
//   const handleFormClick = () => {
//     console.log("btn clicked");
//   };
//   return (
//     <section>
//       <form onSubmit={handleFormSubmit}>
//         <h2>form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: "irem 0" }}
//         />
//       </form>
//       <button onClick={handleFormClick}>click here</button>
//     </section>
//   );
// };
