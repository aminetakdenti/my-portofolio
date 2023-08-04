import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "w-fit" | "w-full" | string;
}

function Reveal({ children, width = "w-fit" }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (inView) {
      // fire the animation
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [inView]);

  return (
    <div className={`${width} relative `}>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, translateY: 75 },
          visible: { opacity: 1, translateY: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.4, duration: 0.25 }}
        className="relative"
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
        transition={{ duration: 0.5 }}
        className=" absolute bottom-0 left-0 right-0 top-0  z-50 bg-gradient-to-r from-accent to-primary "
      ></motion.div>
    </div>
  );
}

export default Reveal;
