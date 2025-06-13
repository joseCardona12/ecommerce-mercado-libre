import Button from "../atoms/Button";

interface IButtonImageProps {
  url_image: string;
  text: string;
  alt_image: string;
}
export default function ButtonImage({
  url_image,
  text,
  alt_image,
}: IButtonImageProps): React.ReactNode {
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline">
        <div className="w-10 h-10">
          <img src={url_image} alt={alt_image} className="w-full h-full" />
        </div>
      </Button>
      <p className="text-sm text-[var(--color-gray-paragraph)]">{text}</p>
    </div>
  );
}
