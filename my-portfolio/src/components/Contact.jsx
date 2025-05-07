import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-4 text-white">Contact Me</h3>
        <p className="mb-6 mt-4 text-gray-200">Feel free to reach out for collaborations or just a friendly hello!</p>
        <div className='mt-4'>
        <a href="mailto:youremail@example.com" className="bg-blue-600 text-white text-xl px-6 py-2 rounded hover:bg-blue-700 transition">Say Hello</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;