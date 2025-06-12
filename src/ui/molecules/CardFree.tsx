import Button from "../atoms/Button";

interface ICardFreeProps {
  url_image: string;
  title: string;
  description: string;
  alt_image: string;
  text_button: string;
}
export default function CardFree({
  url_image,
  title,
  description,
  alt_image,
  text_button,
}: ICardFreeProps): React.ReactNode {
  return (
    <div className=" bg-white rounded-[var(--border-radius-small)] p-[var(--padding-small)] border border-[var(--color-gray)] flex flex-col justify-between gap-6 w-full">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="w-[100px] h-[100px] flex justify-center items-center object-cover">
          <img className="w-full h-full" src={url_image} alt={alt_image} />
        </div>
        <h3 className="font-bold text-[var(--color-blue)] text-center">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-gray-paragraph)] text-center">
          {description}
        </p>
      </div>
      <Button variant="default" className="text-sm">
        {text_button}
      </Button>
    </div>
  );
}
