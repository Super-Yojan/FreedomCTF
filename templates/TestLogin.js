  render() 
  {
      return (
          <React.Fragment>
            <div className="total">
              <div className="something">
                <div className="login88">
                  <h1>Login</h1>
                </div>
              </div>

              <form>
                <label className="log" id="uname">Team Name or Email</label>
                
                  <i className="fa fa-user icon"></i>
                  <input type="text" id="username" placeholder="Username"></input>

                <label className="log" id="upassword">Password</label>

                  <i className="fa fa-key icon"></i>
                  <input type="password" id="password" placeholder="Password"></input>

                <div>
                  <input className="buttonlog" type="submit" width="100px" value="Login"></input>
                  <br></br>
                  <a href="#">Forgot?</a>
                  <p><a href="#">Create an Account</a></p>
                </div>
              </form>
              </div>
          </React.Fragment>
        )

      }
