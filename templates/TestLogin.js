<!-- Delete all the comments as it is written using html comment and import css file. Also you might have to add a tag for the whole thing-->

 <!-- important include this is render tag that is used for react-->
   
<div className="something">        
    <div className="login">
        <h1>Login</h1>
    </div>
</div>    
    
<!-- This div className= something is necessary so put background color.
It seems that using one div does not work and at that time we were
using same css file for all the page so I added second div-->    
    
<div className="total">
    <!-- now this div is to center all of the stuff and to add border-->

     <form>
           
            <label className="log" id="uname"> Team Name Or Email</label>

            <span className="add-icon">
                <i className="fa fa-user icon"></i>
                <input type="text" id="username" placeholder="Username"/>
                
                <!-- put "/" in the end of the react or close the tag with </input>-->
            </span>
    
    <!-- Now i added this div because W3SCHOOL told me that 
    Using div in this situation is better same for the other ones-->        
            
            
            <label className="log" id="upassword"> Password</label>
            
            <span className="add-icon">
                <i className="fa fa-key icon"></i>
                <input type="password" id="password" placeholder="Password"/>
            </span>       

                        
            <span>
                <input className="buttonlog" type="submit" Width="100px" value="Login"/>
                <br/>
                <a href="#">Forgot?</a>
                <p><a href="Register.html">Create an Account</a></p>
            </span>
        <!-- I added this DIV because it looks organized
            You can remove it if you want-->
        
        </form>
</div>
