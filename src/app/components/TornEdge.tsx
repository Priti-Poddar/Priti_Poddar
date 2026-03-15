// // TornEdge.tsx
// // Place this between <Hero /> and <About /> in your App/page file

// export function TornEdge({ colorb }) {
//   return (
//     <div
//       className="relative w-full overflow-hidden leading-none -mb-1"
//       style={{ height: "80px" }}
//     >
//       <svg
//         viewBox="0 0 1440 80"
//         xmlns="http://www.w3.org/2000/svg"
//         // xmlns="P:\Projects\Portfolio\src\imports\tornpaper.svg"
//         preserveAspectRatio="none"
//         className="w-full h-full"
//       >
//         {/*
//           Top fill = Hero background = #0A0A14 (deep-midnight)
//           The torn shape is filled with the ABOUT section color.
//           Since both sections share the same bg, we flip the trick:
//           — The SVG background (rect) is deep-midnight
//           — The torn path punches through to reveal deep-midnight again
//           — BUT with a lavender/violet mid-layer for drama

//           Actually: top = #0A0A14, torn edge bottom = #1A1A2E (dark-navy)
//           This creates a visible color shift between the two sections.
//         */}

//         {/* Background = Hero color */}
//         <rect width="1440" height="80" fill="#F5F0E8" />

//         {/* Torn shape filled with About section color */}
//         <path
//           d="
//     M0,50
//     Q9,46 18,52 Q27,57 36,50
//     Q45,44 54,49 Q63,54 72,50
//     Q81,45 90,51 Q99,56 108,49
//     Q117,43 126,48 Q135,53 144,50
//     Q153,46 162,52 Q171,57 180,50
//     Q189,44 198,49 Q207,54 216,50
//     Q225,45 234,51 Q243,56 252,49
//     Q261,43 270,48 Q279,53 288,50
//     Q297,46 306,52 Q315,57 324,50
//     Q333,44 342,49 Q351,54 360,50
//     Q369,45 378,51 Q387,56 396,49
//     Q405,43 414,48 Q423,53 432,50
//     Q441,46 450,52 Q459,57 468,50
//     Q477,44 486,49 Q495,54 504,50
//     Q513,45 522,51 Q531,56 540,49
//     Q549,43 558,48 Q567,53 576,50
//     Q585,46 594,52 Q603,57 612,50
//     Q621,44 630,49 Q639,54 648,50
//     Q657,45 666,51 Q675,56 684,49
//     Q693,43 702,48 Q711,53 720,50
//     Q729,46 738,52 Q747,57 756,50
//     Q765,44 774,49 Q783,54 792,50
//     Q801,45 810,51 Q819,56 828,49
//     Q837,43 846,48 Q855,53 864,50
//     Q873,46 882,52 Q891,57 900,50
//     Q909,44 918,49 Q927,54 936,50
//     Q945,45 954,51 Q963,56 972,49
//     Q981,43 990,48 Q999,53 1008,50
//     Q1017,46 1026,52 Q1035,57 1044,50
//     Q1053,44 1062,49 Q1071,54 1080,50
//     Q1089,45 1098,51 Q1107,56 1116,49
//     Q1125,43 1134,48 Q1143,53 1152,50
//     Q1161,46 1170,52 Q1179,57 1188,50
//     Q1197,44 1206,49 Q1215,54 1224,50
//     Q1233,45 1242,51 Q1251,56 1260,49
//     Q1269,43 1278,48 Q1287,53 1296,50
//     Q1305,46 1314,52 Q1323,57 1332,50
//     Q1341,44 1350,49 Q1359,54 1368,50
//     Q1377,45 1386,51 Q1395,56 1404,49
//     Q1413,44 1422,48 Q1431,52 1440,50
//     L1440,90 L0,90 Z
//   "
//           fill={colorb}
//         />

//         <defs>
//           <linearGradient id="tearGlow" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
//             <stop offset="50%" stopColor="#F472B6" stopOpacity="0.6" />
//             <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.8" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// }


interface TornEdgeProps {
  colorTop: string;   // background rect color (section above)
  colorBottom: string; // torn path fill color (section below)
  flip?: boolean;      // true = torn edge faces DOWN (use at bottom of a section)
}

export function TornEdge({ colorTop, colorBottom, flip = false }: TornEdgeProps) {
  return (
    <div
      className="relative w-full overflow-hidden leading-none -mb-1"
      style={{
        height: "80px",
        transform: flip ? "scaleY(-1)" : "none",
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <rect width="1440" height="80" fill={colorTop} />

        <path
          d="
            M0,50
            Q9,46 18,52 Q27,57 36,50
            Q45,44 54,49 Q63,54 72,50
            Q81,45 90,51 Q99,56 108,49
            Q117,43 126,48 Q135,53 144,50
            Q153,46 162,52 Q171,57 180,50
            Q189,44 198,49 Q207,54 216,50
            Q225,45 234,51 Q243,56 252,49
            Q261,43 270,48 Q279,53 288,50
            Q297,46 306,52 Q315,57 324,50
            Q333,44 342,49 Q351,54 360,50
            Q369,45 378,51 Q387,56 396,49
            Q405,43 414,48 Q423,53 432,50
            Q441,46 450,52 Q459,57 468,50
            Q477,44 486,49 Q495,54 504,50
            Q513,45 522,51 Q531,56 540,49
            Q549,43 558,48 Q567,53 576,50
            Q585,46 594,52 Q603,57 612,50
            Q621,44 630,49 Q639,54 648,50
            Q657,45 666,51 Q675,56 684,49
            Q693,43 702,48 Q711,53 720,50
            Q729,46 738,52 Q747,57 756,50
            Q765,44 774,49 Q783,54 792,50
            Q801,45 810,51 Q819,56 828,49
            Q837,43 846,48 Q855,53 864,50
            Q873,46 882,52 Q891,57 900,50
            Q909,44 918,49 Q927,54 936,50
            Q945,45 954,51 Q963,56 972,49
            Q981,43 990,48 Q999,53 1008,50
            Q1017,46 1026,52 Q1035,57 1044,50
            Q1053,44 1062,49 Q1071,54 1080,50
            Q1089,45 1098,51 Q1107,56 1116,49
            Q1125,43 1134,48 Q1143,53 1152,50
            Q1161,46 1170,52 Q1179,57 1188,50
            Q1197,44 1206,49 Q1215,54 1224,50
            Q1233,45 1242,51 Q1251,56 1260,49
            Q1269,43 1278,48 Q1287,53 1296,50
            Q1305,46 1314,52 Q1323,57 1332,50
            Q1341,44 1350,49 Q1359,54 1368,50
            Q1377,45 1386,51 Q1395,56 1404,49
            Q1413,44 1422,48 Q1431,52 1440,50
            L1440,80 L0,80 Z
          "
          fill={colorBottom}
        />
      </svg>
    </div>
  );
}