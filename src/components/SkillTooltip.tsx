import React, { useState } from "react";
type Props = {
  skill: {
    name: string;
    level: number;
    description?: string;
    experience?: string;
    projects?: number;
  };
  children: React.ReactNode;
};
export const SkillTooltip = ({
  skill,
  children
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  return <div className="relative" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible && <div className="absolute z-50 w-64 p-4 mt-2 -translate-x-1/2 left-1/2 bg-neutral-800 rounded-lg shadow-xl">
          <div className="text-sm text-gray-300">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-white">{skill.name}</span>
              <span className="text-blue-400">{skill.level}%</span>
            </div>
            {skill.description && <p className="mb-2">{skill.description}</p>}
            {skill.experience && <p className="text-gray-400">Experience: {skill.experience}</p>}
            {skill.projects && <p className="text-gray-400">Projects: {skill.projects}+</p>}
          </div>
          <div className="absolute w-3 h-3 bg-neutral-800 rotate-45 -top-1.5 left-1/2 -translate-x-1/2" />
        </div>}
    </div>;
};