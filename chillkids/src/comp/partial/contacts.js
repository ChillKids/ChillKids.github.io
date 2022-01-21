import React from 'react';

function Contacts() {
  return (
    <div className="section contacts" id="section-contacts">
    <div className="content">

        <div className="titles">
            <div className="title">Contact</div>
            <div className="subtitle">Let's talk</div>
        </div>

        <div className="contact-form">
            <form id="cform" method="post">
                <div className="group-val">
                    <div className="label">Full name <strong>*</strong></div>
                       <input type="text" name="name" placeholder="Enter Your Name" />
                </div>
                <div className="group-val">
                    <div className="label">Email address <strong>*</strong></div>
                    <input type="email" name="email" placeholder="example@domain.com" />
                </div>
                <div className="group-val">
                    <div className="label">Message <strong>*</strong></div>
                    <textarea name="message" placeholder="To Write"></textarea>
                </div>
                <div className="group-bts">
                    <button type="submit" className="btn">
                        <span className="animated-button"><span>Send Message</span></span>
                        <i className="icon fas fa-chevron-right"></i>
                    </button>
                </div>
            </form>
            <div className="alert-success">
                <p>Thanks, your message is sent successfully.</p>
            </div>
        </div>

        <div className="contact-info">
            <div className="name">Jack Leung</div>
            <div className="info-list">
                <ul>
                    <li><strong>Age:</strong> 24</li>
                    <li><strong>Residence:</strong> HKG</li>
                    <li><strong>Freelance:</strong> Available</li>
                    <li><strong>Address:</strong> Provo, Utah</li>
                    <li><strong>G-mail:</strong> chikitleung.cs</li>
                </ul>
            </div>
            <div className="author">Jack Leung</div>
        </div>

        <div className="clear"></div>
    </div>
</div>
  );
}

export default Contacts;