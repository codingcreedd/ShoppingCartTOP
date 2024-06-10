const Error = () => {
  return (
    <div>
        <h1>Oops, this router does not exist!</h1>
        <Link to="/">
            You can go back to the home page by clicking here!
        </Link>
    </div>
  );
};

export default Error