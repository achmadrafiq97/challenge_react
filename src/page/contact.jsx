import React from 'react';

class Contact extends React.Component {
    render() {
        return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5" id="img-contact">
                <div id="img-blue-background">
                    <img className="img-contact-alterra" src={require("../assets-final-project-fe/logo-ALTA-v2@2x.png")} alt=""/>
                </div>
            </div>
            <div className="contact_header col-md-6">
                <h1>Contact Us</h1>
                <form>
                    <div className="form-group">
                        <label for="fullName">Full Name</label><span className="required">*</span>
                        <input type="text" className="form-control" id="fullName" placeholder="Full Name" required/>
                    </div>
                    <div className="form-group">
                        <label for="emailaddress">Email Address</label><span className="required">*</span>
                        <input type="text" className="form-control" id="emailaddress" placeholder="example@alterra.id" required/>
                    </div>
                    <div className="form-group">
                        <label for="phonenumber">Phone Number</label><span className="required">*</span>
                        <input type="text" className="form-control" id="phonenumber" placeholder="085554447900" required/>
                    </div>
                    <div className="form-group">
                        <label for="Role">Role</label>
                        <select className="form-control" id="Role">
                            <option>Software Engineer</option>
                            <option>Quality Engineer</option>
                            <option>Fullstack Engineer</option>
                        </select>
                    </div>
                    <div className="form-group">
                            <label for="Message">Message</label>
                            <textarea className="form-control" id="Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
        );
    }
}

export default Contact;