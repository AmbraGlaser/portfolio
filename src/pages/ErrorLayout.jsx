import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  // const error = useRouteError();
  // const errorMessage = error.message;

  return (
    <>
      <h1 className="text-h2">
        Deze pagina bestaat helaas niet of is verwijderd.
      </h1>
      {/* <p className="text-p">Error bericht: {errorMessage}</p> */}
      <p className="text-h2">
        Ga{" "}
        <Link className=" hover:text-white" to="/">
          terug
        </Link>{" "}
        naar de startpagina.
      </p>
    </>
  );
};

export default ErrorPage;
