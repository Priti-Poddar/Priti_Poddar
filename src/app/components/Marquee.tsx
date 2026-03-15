export function Marquee() {
  const skills = [
    'FULL STACK DEVELOPER',
    'DEEP LEARNING',
    'FEDERATED LEARNING',
    'ACM STUDENT MEMBER',
    'NODE.JS',
    'REACT',
    'MONGODB',
    'PYTHON',
    'TENSORFLOW',
    'EXPRESS.JS',
    'C++',
    'Javascript',
    'DSA'
  ];

  return (
    <div className="bg-[#000] py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat twice for seamless loop */}
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="text-[#F5F0E8] text-sm uppercase tracking-widest mx-6"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            {skill} ·
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
