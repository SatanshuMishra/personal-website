import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

function Reveal({ children, width = "fit-content" }: Props) {
  // const ref = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    // FIRE ANIMATION
    if (inView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#0362fc",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
}

export default Reveal;
