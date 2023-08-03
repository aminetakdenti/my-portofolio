import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className=" mx-[5%] pb-20 text-text md:mx-[10%] lg:mx-[20%]">
      {children}
    </div>
  );
}

export default Container;
