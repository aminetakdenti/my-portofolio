import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-4 h-screen sm:mx-3  md:mx-auto md:overflow-hidden">
      {children}
    </div>
  );
}

export default Container;
