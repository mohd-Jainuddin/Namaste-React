import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    return (
      <>
        <h1>Oops!!!</h1>
        <h2>Something Went Wrongs!</h2>
        <h1>
          {err.status} : Page {err.statusText}
        </h1>
      </>
    );
}

export default Error;