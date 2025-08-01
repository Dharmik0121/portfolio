import React, { useState, useRef } from 'react';
import { HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [message, setMessage] = useState({ message: '', status: '' });
  const [loading, setLoading] = useState(false);

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_wnp7g73',     // Replace with your EmailJS service ID
      'template_7utp9tj',    // Replace with your EmailJS template ID
      formRef.current,
      'Vt7u-E9HaO569cXaV'      // Replace with your EmailJS public key
    ).then(() => {
      setMessage({ message: 'Message sent successfully!', status: 'success' });
      setLoading(false);
      setFormData({ name: '', email: '', message: '' });
    }).catch(() => {
      setMessage({ message: 'Failed to send message. Please try again later.', status: 'error' });
      setLoading(false);
    });
  };

  return (
    <section className="w-full px-4 lg:px-0 py-24" id='Contact'>
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">Contact</h2>
        <div className="w-full tracking-wide space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="mailto:meghanidharmik15.15@gmail.com" className="text-sm hover:text-gray-400 font-medium flex items-center space-x-2">
              <HiEnvelope className='w-6 h-6' />
              <span>meghanidharmik15.15@gmail.com</span>
            </a>
            <a href="tel:+919016033329" className="text-sm hover:text-gray-400 font-medium flex items-center space-x-2">
              <HiPhone className='w-6 h-6' />
              <span>+91 9016033329</span>
            </a>
            <span className="text-sm hover:text-gray-400 font-medium flex items-center space-x-2">
              <HiMapPin className='w-6 h-6' />
              <span>Surat / Gujarat</span>
            </span>
          </div>

          <form ref={formRef} onSubmit={handelsubmit} className="max-w-md mx-auto space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                type="text"
                name='name'
                id='name'
                value={formData.name}
                onChange={handlechange}
                className="px-2 py-2 w-full bg-white dark:bg-zinc-900 border border-zinc-700 rounded-md"
                placeholder='Dharmik'
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                type="email"
                name='email'
                id='email'
                value={formData.email}
                onChange={handlechange}
                className="px-2 py-2 w-full bg-white dark:bg-zinc-900 border border-zinc-700 rounded-md"
                placeholder='dharmik@gmail.com'
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handlechange}
                cols="30"
                rows="10"
                className="px-2 py-2 w-full h-40 bg-white dark:bg-zinc-900 border border-zinc-700 rounded-md"
                placeholder='Your message'
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-1.5 text-white font-medium dark:text-black dark:hover:text-white bg-black dark:bg-white hover:bg-zinc-700 dark:hover:bg-zinc-700 flex flex-row items-center justify-center rounded-md group"
            >
              {!loading ? (
                <span>Submit</span>
              ) : (
                <div className="w-6 h-6 border border-t-2 border-t-white dark:border-t-gray-700 border-transparent group-hover:border-t-white rounded-full animate-spin duration-200"></div>
              )}
            </button>
            {message.message && (
              <div className={`text-center ${message.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {message.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
