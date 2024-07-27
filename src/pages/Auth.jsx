import UserImg from "../asset/alan.jpg";
import "../Styles/Auth.css";
function Auth() {
  return (
    <div className="LoginContainer container-fluid">
      {/* <!-- Page content --> */}
      <div className="container-90">
        <div className="AuthCon">
          <div className="Authwrapper">
            <div className="">
              <div className="card-profile-image">
                <img src={UserImg} className="AuthImg" alt="userImg" />
              </div>
            </div>
            <div className="card-body">
              <h3>Alan W.</h3>
              <form>
                <div className="input-group">
                  <input
                    className="form-control"
                    placeholder="Email..."
                    type="Email"
                  />
                </div>
                  <button type="button" className="btn">
                    Proceed
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
