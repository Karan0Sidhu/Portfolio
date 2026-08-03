import React, { useState } from 'react';
import EditText from './EditText'; // Adjust import path
import Button from './Button';     // Adjust import path
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_h7cizz6', 'template_tiazfrl', {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }, 'mUlvG4mozNmA3DNw2')
    .then(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    })
    .catch((error) => {
      alert('Failed to send message. Please try again later.');
      console.error(error);
    });
  };

  return (
    <section id="contact" className="bg-white py-20">
      {/* Use px-6 on mobile, px-28 on large screens, flex-col on mobile, flex-row on large */}
      <div className="px-6 md:px-28 flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <EditText
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="h-14"
            />
            
            <EditText
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="h-14"
            />
            
            <EditText
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              className="h-14"
            />
            
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="w-full h-36 md:h-35 px-3 py-4 font-sora text-base border border-primary rounded resize-none focus:outline-none focus:ring-2 focus:ring-accent"
            />
            
            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" className="bg-primary text-white px-8 py-4 whitespace-nowrap">
                Get In Touch
              </Button>
              
              {/* Social Buttons */}
              {[{
                href: 'https://www.linkedin.com/in/karan-sidhu-04116420b/',
                alt: 'LinkedIn',
                src: '/images/linkedin.svg',
                onClick: null,
              }, {
                href: 'https://github.com/Karan0Sidhu',
                alt: 'GitHub',
                src: '/images/img_social_icons.svg',
                onClick: null,
              }, {
                href: null,
                alt: 'Copy Email',
                src: '/images/img_social_icons_black_900.svg',
                onClick: () => navigator.clipboard.writeText('karan02sidhu@gmail.com'),
              }, {
                href: null,
                alt: 'Copy Phone',
                src: '/images/img_group_3.svg',
                onClick: () => navigator.clipboard.writeText('780-782-0840'),
              }].map(({ href, alt, src, onClick }, i) => (
                <button
                  key={i}
                  type="button"
                  className="w-14 h-14 border-2 border-primary rounded flex items-center justify-center hover:bg-primary hover:bg-opacity-10 hover:text-white transition-all"
                  style={{ backgroundColor: 'transparent' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.3)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                  onClick={onClick ? onClick : () => href && window.open(href, '_blank')}
                  aria-label={alt}
                >
                  <img src={src} alt={alt} className="w-6 h-6" />
                </button>
              ))}
            </div>
          </form>
        </div>

        {/* Text section */}
        <div className="flex-1">
          <div className="mb-8">
            {/* Adjust text size smaller on mobile */}
            <div className="flex flex-wrap gap-2 mb-6 text-4xl md:text-5xl font-extrabold font-sora text-primary">
              <span>Let's</span>
              <span>Talk</span>
              <span>for</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-primary mb-6">
              Something special
            </h2>
          </div>
          
          <p className="text-sm md:text-base font-normal font-sora text-secondary leading-6 mb-6">
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>
          
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-semibold font-sora text-primary break-words">
              Karan02sidhu@gmail.com
            </p>
            <p className="text-2xl md:text-3xl font-semibold font-sora text-primary break-words">
              780-782-0840
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
