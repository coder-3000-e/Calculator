import './styles/contact.css';

const ContactPage = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>CONTACT US &nbsp;</h1>
        <h3>Fill out the form to get in touch!</h3>
      </div>
      <div className="body">
        <form action="#">
          <ul>
            <li>
              <p className="left">
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" placeholder="***" />
              </p>
              <p className="pull-right">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" placeholder="***" />
              </p>
            </li>

            <li>
              <p>
                <label htmlFor="email">Email <span className="req">*</span></label>
                <input type="email" name="email" placeholder="admin@gmail.com" />
              </p>
            </li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              <label htmlFor="comments">Comments</label>
              <textarea name="comments"></textarea>
            </li>

            <li>
              <input className="btn btn-submit" type="submit" value="Submit" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
