import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h1>Uh oh.</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/">Return to home</Link>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}

export default ErrorPage;