import React from "react";

function SocialLink({ Icon, name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-md p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
    >
      <Icon className="text-4xl text-white/70 group-hover:text-white" />
      <span>{name}</span>
    </a>
  );
}

export default SocialLink;
