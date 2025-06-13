import { title } from "process";
import Line from "../atoms/line";
import Button from "../atoms/Button";
import { IconArrowRight } from "../../../public/icons";

interface ICardSectionProps {
  title: string;
  children: React.ReactNode;
}
export default function CardSection({
  title,
  children,
}: ICardSectionProps): React.ReactNode {
  return (
    <section className="pl-[var(--padding-small)] pr-[var(--padding-small)]">
      <div className="bg-white rounded-[var(--border-radius-small)]">
        <div className="p-[var(--padding-small)]">
          <h2 className="font-medium">{title}</h2>
        </div>
        <Line />
        {children}
        <Line />
        <Button
          variant="link"
          className="flex items-center justify-between w-full"
        >
          Show all offers
          <IconArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
