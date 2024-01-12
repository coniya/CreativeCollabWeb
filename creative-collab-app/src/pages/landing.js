import { logo, google, facebook } from './resources';
import './App.css';
import './pages/loginSignup/loginSignup.css';

function App() {
  return (
    <div className="App">
      <div>
            <img src={logo} className="img" alt="logo"/>
      </div>

          <div>
            <button className="btn" onclick="logIn()">LOG IN</button>

            <button className="btn" onclick="signUp()">SIGN UP</button>

            <img src={google} className="oAuth" alt="google" onclick="googleSignIn()"/>

            <img src={facebook} className="oAuth" alt="facebook" onclick="facebookSignIn()"/>

      </div>
          <script>
              function logIn(){
                  //add code to go to log in page
              }

              function signUp(){
                  //add code to go to log in page
              }

              function googleSignIn(){
                //add code for google oAuth
              }

              function facebookSignIn(){
                //add code for facebook oAuth
              }
          </script>
    </div>
  );
}

export default App;