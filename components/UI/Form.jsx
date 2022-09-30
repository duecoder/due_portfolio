import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import isEmail from "validator/lib/isEmail";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import classes from '../../styles/form.module.css'
import { SiBootstrap, SiGithub, SiJavascript, SiNextdotjs, SiPython, SiTypescript } from 'react-icons/si'

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    if (!name.value) {
      toast.error('Your need to tell me your name!')
      valid = false;
    }

    if (!isEmail(email.value) || !email.value) {
      toast.error('Your email is not valid!')
      valid = false;
    }

    if (!message.value) {
      toast.error('You need to tell me what you need!')
      valid = false;
    }

    if (valid) {
      emailjs.sendForm('service_regetms', 'template_x1ehdkh', form.current, 'Xg0wgmPZ8qpufWOez')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      toast.success('Your message has been sent!')
      name.value = '';
      email.value = '';
      message.value = '';
    }
  };

  return (
    <form id='form' ref={form} className={`${classes.form}`} onSubmit={sendEmail}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" id='name' name='user_name'/>
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" id='email' name='user_email'/>
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" id='message' name='message'/>
      </div>

      <button className="primary__btn" type='submit'>Send</button>
      <ToastContainer
        className={`${classes.toast__container}`}
        progressClassName='toastProgress'
        toastStyle={{ background: 'var(--lightGrey)', color: "white" }}
      />
    </form>
  )
}

export default Form
