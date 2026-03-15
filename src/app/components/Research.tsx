export function Research() {
  const papers = [
    {
      status: "📖 Book Chapter — Communicated",
      statusColor: "#F59E0B",
      blockColor: "#6B21A8",
      title: "Federated Learning for Distributed IoT Security",
      abstract:
        "I contributed to a research book chapter that explores security vulnerabilities, attacks, and defense mechanisms in Internet of Things (IoT) environments, with a focus on machine learning and deep learning techniques for anomaly detection and malware classification to enhance IoT security.",
      tags: [
        "Federated Learning",
        "Internet of Things",
        "Cybersecurity",
        "Machine Learning",
        "Deep Learning",
        "Intrusion Detection",
        "Malware Detection",
      ],
    },
    {
      status: "🔬 Federated Learning Paper — Pending Publication",
      statusColor: "#14B8A6",
      blockColor: "#EC4899",
      title:
        "A Robust Framework to Prevent Gradient Leakage for Privacy-Preserving Federated Learning",
      abstract:
        "Contributed to a research paper proposing a robust framework to prevent gradient leakage in privacy-preserving federated learning, enhancing data security by protecting sensitive information during distributed model training.",
      tags: [
        "Federated Learning",
        "Privacy - Preserving AI",
        "Machine Learning",
        "Data Security",
        "Gradient Leakage Protection"
      ],
    },
  ];

  return (
    <section id="research" className="py-24 px-6 bg-red-back">
      <div className="max-w-7xl mx-auto">
        <p
          className="font-[Luckiest_Guy] text-[clamp(4rem,10vw,5rem)] leading-[0.9] text-foreground text-center uppercase items-center"
          style={{ fontFamily: "Luckiest Guy, cursive" }}
        >
          Research & Publications
        </p>
        <h2
          className="text-2xl md:text-3xl mb-16 text-center"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Contributions to academic knowledge
        </h2>

        {/* Research Cards */}
        <div className="space-y-8">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="border-4 border-[#1A1014] rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow bg-[#F5F0E8]"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left colored block */}
                <div
                  className="md:w-48 p-8 flex flex-col items-center justify-center text-white"
                  style={{ backgroundColor: paper.blockColor }}
                >
                  <div
                    className="text-6xl font-bold transform -rotate-12"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    ✦
                  </div>
                  <div
                    className="text-sm uppercase tracking-wider mt-4 text-center"
                    style={{ fontFamily: "Space Mono, monospace" }}
                  >
                    Research
                  </div>
                </div>

                {/* Right content */}
                <div className="flex-1 p-8 space-y-4">
                  {/* Status badge */}
                  <div
                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-[#1A1014]"
                    style={{
                      backgroundColor: paper.statusColor,
                      fontFamily: "Space Mono, monospace",
                    }}
                  >
                    {paper.status}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl md:text-3xl font-bold text-[#1A1014]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {paper.title}
                  </h3>

                  {/* Abstract */}
                  <p
                    className="text-[#6B6560] leading-relaxed"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {paper.abstract}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {paper.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 border-2 border-[#D4CABC] rounded-full text-sm text-[#1A1014]"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
