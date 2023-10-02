function Book(props) {
  const { image, title, author, number } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={image} alt="not found" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <span className="numb">{`#${number + 1}`}</span>
    </article>
  );
}
export default Book;
