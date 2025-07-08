import SkillIcon from "./SkillIcon";

export default function SkillsList({ skills = [] }) {
  return (
    <div className="flex  gap-4 p-3 lg:p-6 flex-wrap pr-4 lg:pr-6 justify-start mb-15 lg:mb-0">
      {skills.map((skill, index) => (
        <SkillIcon key={index} skill={skill} />
      ))}
    </div>
  );
}
