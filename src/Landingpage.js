import React from "react";
import admin from "./images/admin.jpg"
import user from "./images/user.jpg"

class Landingpage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showUser:true,
            showAdmin:true
        };
      

    }
    render(){
        return(<>
        
        <div class="flex">
                <button className="LpButton" id="admin-button" onClick={()=>{this.props.funShowAdmin(this.state.showAdmin);
                this.props.funShowUser(false);
                }}>
                    <h2>Admin</h2><img src={admin} className="Button-image"></img>
                </button>
                <button className="LpButton" id="user-button" onClick={()=>{this.props.funShowUser(this.state.showUser);
                this.props.funShowAdmin(false);
                }}>
                <h2>User</h2><img src={user} className="Button-image"></img>
            
                </button>
            
        </div>
        
        
        
        
        
        
        </>);
        
        
    }
}

export default Landingpage;