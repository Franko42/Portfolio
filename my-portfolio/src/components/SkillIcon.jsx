
export const SkillIcon = ({ skill }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 group cursor-default">
      <i
        className={`devicon-${skill.icon}-plain text-white text-4xl transition-all duration-300 
                   group-hover:scale-110 hover:bg-white/10 bg-white/5 rounded-md p-3`}
      />

      <span className="text-xs text-zinc-400 group-hover:text-white transition">
        {skill.name}
      </span>
    </div>
  );
};