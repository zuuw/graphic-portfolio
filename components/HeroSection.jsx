"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const groups = [
    {
      delay: 0.2,
      duration: 0.7,
      fadeOutAt: null,
      letters: ["/hicm/Rect1.png", "/hicm/Head1.png"],
    },
    {
      delay: 0,
      duration: 0,
      fadeOutAt: 10,
      letters: [
        "/hicm/hello-h.png",
        "/hicm/hello-e.png",
        "/hicm/hello-l.png",
        "/hicm/hello-l2.png",
        "/hicm/hello-o.png",
        "/hicm/hello-end.png",
      ],
    },
    {
      delay: 3,
      duration: 0,
      fadeOutAt: 10,
      letters: ["/hicm/im-i.png", "/hicm/im-m.png"],
    },
    {
      delay: 3.6,
      duration: 1,
      fadeOutAt: null,
      letters: [
        "/hicm/cody-cc.png",
        "/hicm/cody-oo.png",
        "/hicm/cody-dd.png",
        "/hicm/cody-yy.png",
        "/hicm/mcl-mm.png",
        "/hicm/mcl-cc.png",
        "/hicm/mcl-ll.png",
        "/hicm/mcl-ee.png",
        "/hicm/mcl-oo.png",
        "/hicm/mcl-dd.png",
      ],
    },
    {
      delay: 6,
      duration: 0,
      fadeOutAt: null,
      letters: ["/hicm/mcl-endd.png"],
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="relative w-[1500px] h-[600px]">
        {groups.map((group, gIndex) =>
          group.letters.map((src, i) => {
            const hasFadeOut = group.fadeOutAt !== null;

            return (
              <motion.img
                key={`${gIndex}-${i}`}
                src={src}
                className="absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{
                  opacity: hasFadeOut ? [0, 1, 0] : [0, 1, 1],
                  rotate: hasFadeOut ? [0, 0, 90] : [0, 0, 0], // rotates 90deg on fade-out
                }}
                transition={{
                  delay: group.delay + i * 0.3,
                  duration: hasFadeOut
                    ? group.fadeOutAt - group.delay
                    : group.duration,
                  ease: "easeInOut",
                  times: hasFadeOut ? [0, 0.7, 1] : undefined, // fade-in (0→0.7), fade-out (0.7→1)
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
}





















// "use client";

// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const groups = [
//     {
//         delay: .2,
//         duration: .7,
//         fadeOutAt: null,
//         letters: [
//             "/hicm/Rect1.png",
//             "/hicm/Head1.png",
//         ],
//     },
//     {
//       delay: 0, // start immediately
//       duration: 0,
//       fadeOutAt: 10,
//       letters: [
//         "/hicm/hello-h.png",
//         "/hicm/hello-e.png",
//         "/hicm/hello-l.png",
//         "/hicm/hello-l2.png",
//         "/hicm/hello-o.png",
//         "/hicm/hello-end.png",
//       ],
//     },
//     {
//       delay: 3, // wait 3s before starting this group
//       duration: 0,
//       fadeOutAt: 10,
//       letters: ["/hicm/im-i.png", "/hicm/im-m.png"],
//     },
//     {
//       delay: 3.6, // "CODY" comes later
//       duration: 1,
//       fadeOutAt: null,
//       letters: [
//         "/hicm/cody-cc.png",
//         "/hicm/cody-oo.png",
//         "/hicm/cody-dd.png",
//         "/hicm/cody-yy.png",
//         "/hicm/mcl-mm.png",
//         "/hicm/mcl-cc.png",
//         "/hicm/mcl-ll.png",
//         "/hicm/mcl-ee.png",
//         "/hicm/mcl-oo.png",
//         "/hicm/mcl-dd.png",
//       ],
//     },
//     {
//       delay: 6, // "MCLEOD" last, with longer duration
//       duration: 0,
//       fadeOutAt: null,
//       letters: [
//         "/hicm/mcl-endd.png",
//       ],
//     },
//   ];


//   return (
//     <div className="flex justify-center">
//       <div className="relative w-[1500px] h-[600px]">
//         {groups.map((group, gIndex) =>
//           group.letters.map((src, i) => (
//             <motion.img
//               key={`${gIndex}-${i}`}
//               src={src}
//               className="absolute top-0 left-0 w-full h-full"
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: [0, 1, group.fadeOutAt ? 0 : 1], // fade in → visible → fade out
//                 // scale: [0.95, 1, 1],
//               }}
//               transition={{
//                 delay: group.delay + i * 0.3,
//                 duration: group.fadeOutAt
//                   ? group.fadeOutAt - group.delay // visible until fade out
//                   : group.duration,
//                 ease: "easeOut",
//                 times: group.fadeOutAt ? [0, 0.2, 1] : undefined, // ensures smooth in-out
//               }}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }



//   return (
//     <div className="flex justify-center">
//       <div className="relative w-[1500px] h-[600px]">
//         {groups.map((group, gIndex) =>
//           group.letters.map((src, i) => (
//             <motion.img
//               key={`${gIndex}-${i}`}
//               src={src}
//               className="absolute top-0 left-0 w-full h-full"
//               initial={{ opacity: 0, scale: 0.99 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{
//                 delay: group.delay + i * 0.2, // group delay + stagger for letters
//                 duration: group.duration,
//                 ease: "easeOut",
//               }}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }



// THIS IS WITH FADEOUT

// "use client";

// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const groups = [
//     {
//       delay: 0,
//       duration: 0.4,
//       fadeOutAt: 5, // seconds before fade-out starts
//       letters: [
//         "/hicm/hello-h.png",
//         "/hicm/hello-e.png",
//         "/hicm/hello-l.png",
//         "/hicm/hello-l2.png",
//         "/hicm/hello-o.png",
//         "/hicm/hello-end.png",
//       ],
//     },
//     {
//       delay: 3,
//       duration: 0.5,
//       fadeOutAt: 5, // fade out same time as HELLO
//       letters: ["/hicm/im-i.png", "/hicm/im-m.png"],
//     },
//     {
//       delay: 5,
//       duration: 0.6,
//       fadeOutAt: null, // stay visible
//       letters: [
//         "/hicm/cody-c.png",
//         "/hicm/cody-o.png",
//         "/hicm/cody-d.png",
//         "/hicm/cody-y.png",
//       ],
//     },
//     {
//       delay: 8,
//       duration: 0.7,
//       fadeOutAt: null,
//       letters: [
//         "/hicm/mcl-m.png",
//         "/hicm/mcl-c.png",
//         "/hicm/mcl-l.png",
//         "/hicm/mcl-e.png",
//         "/hicm/mcl-o.png",
//         "/hicm/mcl-d.png",
//         "/hicm/mcl-end.png",
//       ],
//     },
//   ];

//   return (
//     <div className="flex justify-center">
//       <div className="relative w-[1500px] h-[600px]">
//         {groups.map((group, gIndex) =>
//           group.letters.map((src, i) => (
//             <motion.img
//               key={`${gIndex}-${i}`}
//               src={src}
//               className="absolute top-0 left-0 w-full h-full"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{
//                 opacity: [0, 1, group.fadeOutAt ? 0 : 1], // fade in → visible → fade out
//                 scale: [0.95, 1, 1],
//               }}
//               transition={{
//                 delay: group.delay + i * 0.3,
//                 duration: group.fadeOutAt
//                   ? group.fadeOutAt - group.delay // visible until fade out
//                   : group.duration,
//                 ease: "easeOut",
//                 times: group.fadeOutAt ? [0, 0.2, 1] : undefined, // ensures smooth in-out
//               }}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
