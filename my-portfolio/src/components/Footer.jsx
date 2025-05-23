import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t py-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Franco Argüello. All rights reserved.
    </footer>
  );
};

export default Footer;
