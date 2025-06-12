import { ReactElement } from "react";

interface ICircleElementCardProps {
  icon: ReactElement;
  isFree?: boolean;
  text: string;
}
export default function CircleElementCard({
  icon,
  isFree,
  text,
}: ICircleElementCardProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div
        className={`relative w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white border ${
          isFree ? "border-[var(--color-green)]" : "border-[var(--color-gray)]"
        } hover:shadow-sm cursor-pointer transition-shadow duration-300`}
      >
        {icon}
        {isFree && (
          <div
            className={`absolute top-9 left-0 flex justify-center items-center bg-[var(--color-green)] text-white w-full rounded-full h-[20px]`}
          >
            <p className="text-[.7rem] text-white">FREE</p>
          </div>
        )}
      </div>
      <p className="text-sm text-[var(--color-text-paragraph)]">{text}</p>
    </div>
  );
}
