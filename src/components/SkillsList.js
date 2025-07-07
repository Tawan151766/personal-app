import SkillTag from "./SkillTag";

export default function SkillsList({ skills = [] }) {
  return (
    <div className="flex gap-3 p-3 flex-wrap pr-4">
      {skills.map((skill, index) => (
        <SkillTag key={index} skill={skill} />
      ))}
    </div>
  );
}
