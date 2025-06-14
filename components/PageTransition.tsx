"use client";

// import { animate } from "motion";
// import { useMotionValue } from "motion/react";
// import { motion } from "motion/react";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
import { unstable_ViewTransition as ViewTransition } from "react";

// export default function PageTransition() {
//   const pathname = usePathname();
//   const y = useMotionValue(0);

//   useEffect(() => {
//     const transitionDiv = document.getElementById(
//       "transition-div"
//     ) as HTMLElement;
//     const height = window.innerHeight;
//     animate([
//       [
//         transitionDiv,
//         { display: "flex", backdropFilter: "blur(24px)" },
//         { duration: 0 },
//       ],
//       [y, 0, { duration: 0.6 }],
//       [y, -height, { duration: 1, delay: 0.5 }],
//       [
//         transitionDiv,
//         { display: "none", backdropFilter: "blur(0px)" },
//         { duration: 0.5 },
//       ],
//     ]);
//   }, [y, pathname]);

//   return (
//     <motion.div
//       id="transition-div"
//       className="w-full h-screen absolute inset-0 z-40 backdrop-blur-lg"
//     >
//       <motion.div
//         style={{ y }}
//         className="w-full h-screen absolute top-0 left-0 bg-black z-50 -translate-y-[100%]"
//       ></motion.div>
//     </motion.div>
//   );
// }

export default function PageTransition() {
  return (
    <ViewTransition name="overlay">
      <div className="absolute bg-black w-full h-screen -top-[100%] left-0 z-50"></div>
    </ViewTransition>
  );
}
