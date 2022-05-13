import React from 'react'
import emailjs from 'emailjs-com';
import "./Contact.css"

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
{/*('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY') */}
emailjs.sendForm('yitsun_chen_contact', 'template_8zp4z99', e.target, 'jnoGqkWdlUJKjbBLx')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}


{/*https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_contact_form */}
return(
  <div>
  <div className="container">
  <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
              <label for="myname">My Name</label>
                  <input type="text" className="form-control" placeholder="Name" name="from_name"/>
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
              <label for="myemail">My Email</label>
                  <input type="email" className="form-control" placeholder="Email Address" name="from_email"/>
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
              <label for="mysubject">Message Subject</label>
                  <input type="text" className="form-control" placeholder="Subject" name="from_subject"/>
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
              <label for="mymessage">My Message</label>
                  <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="from_message"></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                  <input type="submit" className="btn btn-info" value="Send Message"></input>
              </div>
          </div>
      </form>
  </div>
</div>
)
}
