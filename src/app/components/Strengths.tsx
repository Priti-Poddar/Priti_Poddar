export function Strengths() {
  const strengths = [
    {
      number: '01',
      title: 'Full Stack + AI',
      description: "Rare combo. I build the app AND the brain behind it.",
    },
    {
      number: '02',
      title: 'Research-backed',
      description: "Published researcher in Federated Learning — I don't just code, I think deeply.",
    },
    {
      number: '03',
      title: 'ACM Member',
      description: "Part of the world's largest CS community.",
    },
    {
      number: '04',
      title: 'Fast Learner',
      description: 'From Node.js to Neural Networks — I go deep, fast.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#EDE8DC]">
      <div className="max-w-7xl mx-auto">
        <p
          className="text-sm uppercase tracking-wider text-[#6B6560] mb-8"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          05 / STRENGTHS
        </p>

        <h2
          className="text-5xl md:text-6xl mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          why hire a girl who does both?
        </h2>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-[#F5F0E8] border-t-4 border-[#D4CABC] p-8 space-y-4 hover:border-[#6B21A8] transition-all"
            >
              <div
                className="text-8xl text-[#6B6560] opacity-20 leading-none"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                {strength.number}
              </div>
              <h3
                className="text-2xl font-bold text-[#1A1014]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {strength.title}
              </h3>
              <p
                className="text-[#6B6560] leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
