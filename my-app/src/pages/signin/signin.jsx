import propTypes from 'prop-types';
import "./signin.css";
import { redirect } from 'react-router-dom';
const SignIn = () => {
  sessionStorage.setItem("loginStatus", false);
  return (
      <>
          <div className='form-page-wrapper'>
            
              <form action="" onSubmit={(event) => {
                event.preventDefault();
                sessionStorage.setItem("loginStatus", true);
                console.log("redirect");
                window.location = "/home";
            }}>
              <h2>Welcome Back</h2>
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" placeholder="Ex. example@gmail.com"/>

                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" />

                  <input type="submit" value="Submit" />
              </form>

              <div className="already-user">
                    <span>Not yet registered? <a href="../signup">Sign up</a></span>
                </div>
          </div>
      </>
  )
}


  SignIn.propTypes = {
    text: propTypes.string,
    classes: propTypes.object,
    loginUser: propTypes.func,
  }
  export default SignIn;