import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div>
      <div className="container">
  <form action="/action_page.php">
    <label htmlFor="fname">Name</label>
    <input type="text" id="fname" name="fullname" placeholder="Your name.." />
    <label htmlFor="email">Email</label>
    <input type="text" id="email" name="email" placeholder="Your Email" />
    <label htmlFor="subject">Subject</label>
    <input type="text" id="subjext" name="subject" placeholder="Message Subject" />
    {/*<label htmlFor="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
  </select>*/}
    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" placeholder="Write something.." style={{"height":"200px"}} defaultValue={""} />
    <input type="submit" defaultValue="Submit" />
  </form>
</div>
    </div>
  )
}
