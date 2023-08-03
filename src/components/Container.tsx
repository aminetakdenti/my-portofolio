import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className=" pb-20 text-text sm:mx-3 md:mx-[10%] lg:mx-[20%]">
      {children}
    </div>
  );
}

export default Container;
