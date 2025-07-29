import React from 'react'

const skills = [
  { name: 'HTML', icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
  { name: 'CSS', icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
  { name: 'JavaScript', icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' },
  { name: 'Tailwind', icon: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000' },
  { name: 'BootStrap', icon: 'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000' },
  { name: 'React', icon: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000' },
  { name: 'Vite', icon: 'https://img.icons8.com/?size=100&id=YO3YqSaTOu5K&format=png&color=000000' },
  { name: 'RestAPI', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png' },
  { name: 'Node.js', icon: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' },
  { name: 'Express.js', icon: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' },
  { name: 'Redux', icon: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg' },
  { name: 'C', icon: 'https://img.icons8.com/?size=100&id=40670&format=png&color=000000' },
  { name: 'C++', icon: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000' },
]

function Skills() {
  return (
    <section className="w-fill px-4 lg:px-0 py-24" id="Skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">Skills</h2>
        <div className="flex items-center justify-center flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-12 py-4 flex items-center dark:bg-zinc-900 hover:scale-110 transition-all duration-200 rounded-lg shadow-md hover:shadow-xl border border-gray-100 dark:border-none"
            >
              <div className="flex items-center gap-4">
                <img src={skill.icon} width={30} alt={skill.name} />
                <h2 className="text-base font-semibold">{skill.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
