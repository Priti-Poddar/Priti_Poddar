


import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      color: "chart-1",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "💛" },
        { name: "Tailwind CSS", icon: "🌊" },
      ],
    },
    {
      name: "Backend",
      color: "chart-2",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚂" },
        { name: "MongoDB", icon: "🍃" },
        { name: "REST APIs", icon: "🌐" },
        { name: "Socket.io", icon: "🔌" },
        {name: "mySQL", icon: "🐬"}
      ],
    },
    {
      name: "AI/ML",
      color: "chart-3",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Deep Learning", icon: "🤖" },
        { name: "Federated Learning", icon: "🔐" },
        { name: "NumPy", icon: "📊" },
        { name: "Pandas", icon: "🐼" },
      ],
    },
    {
      name: "Tools",
      color: "chart-4",
      skills: [
        { name: "Git", icon: "📦" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" },
        { name: "Jupyter Notebook", icon: "📊" },
        { name: "Docker", icon: "🐳" },
      ],
    },
  ];

  const getBorderColor = (color: string) => {
    switch (color) {
      case "chart-1":
        return "border-l-chart-1";
      case "chart-2":
        return "border-l-chart-2";
      case "chart-3":
        return "border-l-chart-3";
      default:
        return "border-l-chart-4";
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p
          className="font-[Luckiest_Guy] text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-[#B94040] text-center uppercase items-center"
          style={{ fontFamily: "Luckiest Guy, Baloo 2, cursive" }}
        >
          TECH STACK
        </p>
        <h2
          className="text-2xl md:text-6xl mb-16 text-center"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Tools & technologies I work with
        </h2>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3
                className="text-xl font-semibold mb-6 text-slate-gray"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className={`
                      group flex items-center gap-3 px-6 py-3 rounded-full 
                      bg-dark-navy/50 border-l-4 ${getBorderColor(
                        category.color
                      )}
                      border-y border-r border-electric-lavender
                      backdrop-blur-sm hover:bg-dark-navy/80 
                      hover:shadow-lg hover:shadow-${category.color}/20
                      transition-all duration-300 hover:scale-105
                      cursor-default
                    `}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-foreground font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
