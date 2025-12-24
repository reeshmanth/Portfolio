import SectionHeading from '@/components/Helper/SectionHeading'
import SideHeading from '@/components/Helper/SideHeading'
import { skillsData } from '@/Data/data'
import SkillCard from './SkillCard'

const groups = [
  { key: 'programming', label: 'Programming Languages' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'data', label: 'Data / AI' },
  { key: 'tools', label: 'Tools' },
]

const Skills = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0f0715] py-6 custom-scrollbar">

      <SectionHeading>My Skills</SectionHeading>

      <div className="w-[80%] mx-auto mt-10 space-y-8">
        {groups.map(group => (
          <div key={group.key}>

            {/* ✅ Highlighted Side Heading */}
            <SideHeading text={group.label} />

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skillsData
                .filter(skill => skill.group === group.key)
                .map(skill => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Skills
