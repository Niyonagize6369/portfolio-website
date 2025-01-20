import React from "react";



import { Input } from "postcss";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.6.0/css/fontawesome.min.css"
  integrity="sha384-NvKbDTEnL+A8F/AA5Tc5kmMLSJHUO868P+lDtTpJIeQdGYaUIuLr4lVGOEA1OcMy"
  crossorigin="anonymous"
></link>;

function ContactMe(){
  return (
    <section className="ContactMe">
      <div className="content">
        <h2>Cntact Me</h2>
        <p>if you want more information sent me a message via email.</p>
      </div>
      <div className="container">
        <div className="contactinfo">
          <div className="box">
            <div className="icon">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>Kigali,Rwanda,Gishushu</p>
            </div>

            <div className="icon">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>0783350275</p>
            </div>

            <di>
              <div className="icon">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>niyonagizerachel10@gmail.com</p>
              </div>
            </di>
                  </div>
                  
                  <div className="contactform">
                      <form>
                          <h2>send Message</h2>
                          <div className="inputbox">
                        <input type="text" name="" required="required">
                        <span>Full Name</span>
                          </div>

                           <div className="inputbox">
                        <input type="text" name="" required="required">
                        <span>Email</span>
                          </div>
                           <div className="inputbox">
                        <input type="text" name="" required="required">
                        <span>Full Name</span>
                          </div>
                           <div className="inputbox">
                        <input type="text" name="" required="required">
                        <span>type your Message....</span>
                          </div>
                      </form>
                  </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;