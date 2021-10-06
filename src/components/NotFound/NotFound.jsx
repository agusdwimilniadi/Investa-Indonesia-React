import { useHistory } from "react-router";

const ErrorPage = () => {
  const history = useHistory();
  const backButton = () => {
    history.goBack();
  };
  return (
    <>
      <br />
      <br />
      <div className="page-wrap d-flex flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <span className="display-1 d-block">404</span>
              <div className="mb-4 lead">
                The page you are looking for was not found.
              </div>
              <button onClick={backButton} className="btn btn-secondary">
                Back to Previous
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
