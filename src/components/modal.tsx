import { ReactNode } from "react";

export default function Modal({
  title,
  desc,
  actions,
}: {
  title: string;
  desc: string;
  actions: ReactNode;
}) {
  return (
    <div className="fixed min-w-screen min-h-screen max-w-screen bg-fadedBlack top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      <div className="w-[300px] bg-white flex flex-col items-center rounded-[5px] p-6">
        <h2 className="text-3xl text-primaryGreen font-semibold">{title}</h2>
        <p className="my-6">{desc}</p>
        {actions}
      </div>
    </div>
  );
}
