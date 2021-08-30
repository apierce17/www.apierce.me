import React from 'react'
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { RiDiscordLine } from 'react-icons/ri';
import { useState } from 'react'
import { send } from 'emailjs-com';


import './Contact.css'

require ('dotenv').config()

const contact = {fontSize: "3.5rem",color: "var(--primary)"}

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: 'transparent',
      color: 'var(--light)',
      maxWidth: 300,
      fontSize: theme.typography.pxToRem(16),
      border: 'var(--darkgrey)',
    },
  }))(Tooltip);

function Contact() {

    function messageSent() {
        const form = document.getElementById('contact-form');
        const confirm = document.getElementById('confirm');
        const sent = document.getElementById('sent');

        if((document.getElementById("message").value.length == "") ||
           (document.getElementById("email").value.length == "") ||
           (document.getElementById("name").value.length == ""))
            {
                alert("Please make sure all fields are filled out!")
        } else {
            form.classList.add("slide-out")
            setTimeout(function(){ 
                confirm.classList.add("slide-in")
                confirm.classList.add("loading-active")
            }, 250);
            setTimeout(function(){ 
                confirm.classList.add("loading-shrinking")
            }, 2250);
            setTimeout(function(){ 
                confirm.classList.add("loading-complete")
                sent.classList.remove("hide")
                window.navigator.vibrate(300)
            }, 4250);
        }}

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_1eepnk9',
            'template_hx7kld7',
            toSend,
            process.env.REACT_APP_EMAIL_USER
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return (
        <section id="contact">
            <div className="alt-contact">
                <h1>get in touch</h1>
                <ul>
                    <li>
                    <HtmlTooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        title={
                        <React.Fragment>
                            <Typography color="inherit">ashtoncvpierce@gmail.com</Typography>
                        </React.Fragment>
                    }>
                        <a className="contact-icon" target="_blank" rel="noopener noreferrer" href="mailto:ashtoncvpierce@gmail.com"><HiOutlineMail style={contact}/></a>
                    </HtmlTooltip>
                    </li>
                    <li>
                    <HtmlTooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        title={
                        <React.Fragment>
                            <Typography color="inherit">Click the icon to go to my LinkedIn</Typography>
                        </React.Fragment>
                    }>
                        <a className="contact-icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ashton-pierce/"><AiOutlineLinkedin style={contact}/></a>
                    </HtmlTooltip>
                    </li>
                    <li>
                    <HtmlTooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        title={
                        <React.Fragment>
                            <Typography color="inherit">apierce17</Typography>
                        </React.Fragment>
                    }>
                        <a className="contact-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/apierce17"><FiGithub style={contact}/></a>
                    </HtmlTooltip>
                    </li>
                    <li>
                    <HtmlTooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        title={
                        <React.Fragment>
                            <Typography color="inherit">Ashh#1519</Typography>
                        </React.Fragment>
                    }>
                        <a className="contact-icon" target="_blank" rel="noopener noreferrer" href="https://discord.com/users/295084389782781952"><RiDiscordLine style={contact}/></a>
                    </HtmlTooltip>
                    </li>
                </ul>
            </div>
            <div className="contact-form">
                <div className="stack">
                    <form id="contact-form" name="contactForm" className="inner" onSubmit={onSubmit}>
                        <h2>Send a message:</h2>
                        <textarea 
                            type='text'
                            name='message'
                            placeholder='Your message'
                            value={toSend.message}
                            onChange={handleChange}
                            id="message"
                            required/>
                        <input
                            type='text'
                            name='reply_to'
                            placeholder='Your email'
                            value={toSend.reply_to}
                            onChange={handleChange}
                            id="email"
                            required/>
                        <input 
                            id="name" type='text'
                            name='from_name'
                            value={toSend.from_name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required/>
                        <button 
                            id="submit"
                            type="submit"
                            value="Submit"
                            text="Send"
                            onClick={messageSent}
                        >Submit</button>
                    </form>
                    <div id="confirm" className="confirm inner loading-bar"/>
                    <div id="sent" className="inner sent hide">Message Sent</div>
                </div>
            </div>
        </section>
    )
}

export default Contact
