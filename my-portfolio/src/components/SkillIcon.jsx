export const SkillIcon = ({ skill }) => (
  <div className="group flex flex-col items-center justify-center gap-2 text-center">
    <i
      aria-hidden="true"
      className={`devicon-${skill.icon}-plain rounded-md bg-white/5 p-3 text-4xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/10`}
    />
    <span className="text-xs text-zinc-400 transition group-hover:text-white">
      {skill.name}
    </span>
  </div>
);
