const Login = () => (
    <div className="modal fade text-dark" id="loginModal">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Login</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="row modal-body justify-content-center">
                    <div className="col-12 form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" className="form-control" placeholder="Enter your email address" id="email"/>
                    </div>
                    <div className="col-12 form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" placeholder="Enter Password" id="pwd"/>
                    </div>
                    <div className="row modal-body">
                        <div className="col-6 form-group form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input"/>{" "}Remember Me{" "}
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mx-2 mb-2">Submit</button>
                <div className="modal-footer justify-content-start">
                </div>
            </div>
        </div>
    </div>
); 


export default Login;