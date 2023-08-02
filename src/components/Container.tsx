import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-4 h-screen overflow-hidden overflow-x-hidden sm:mx-3 md:mx-auto">
      {children}
    </div>
  );
}

export default Container;
