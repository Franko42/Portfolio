import React from "react";

function SocialLink({ Icon, name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
    >
      <Icon className="text-4xl" />
      <span>{name}</span>
    </a>
  );
}

export default SocialLink;
