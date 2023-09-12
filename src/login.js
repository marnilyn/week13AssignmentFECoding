import React, {Component} from "react";


export default class Login extends Component {
    render() {
        return (
        <form className="container">
        <div className="card w-50">
                <div className="card-header bg-dark text-white">
                    <h3>Login:</h3>
                </div>
                <div>
                    <input type="text" class="form-control" id="userName" placeholder="Username"></input>
                </div>
                <div>
                    <input type="text" class="form-control" id="password" placeholder="Password"></input>
                </div>
                <button type="submit" class="btn btn-primary btn-customized mt-4">Sign in</button>
            </div>
        </form>
        )
    }
}
