
export default function SkillPill({ skill, level }) {
    const totalBars = 5;
    const filledBars = Math.round((level / 100) * totalBars);
  
    return (
      <div className="inline-flex items-center bg-gray-500 px-4 py-2 rounded-full shadow-sm text-sm font-medium gap-3 outline-2 outline-violet-300">
        <span className="text-white">{skill}</span>
        {/* Battery */}
        <div className="flex items-center gap-0.5 border border-gray-400 px-1 py-0.5 rounded-sm relative">
          {/* Bars */}
          {Array.from({ length: totalBars }).map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-4 mx-0.5 ${
                idx < filledBars ? "bg-blue-300" : "bg-gray-300"
              }`}
            />
          ))}
          {/* Battery cap */}
        </div>
      </div>
    );
  }
  