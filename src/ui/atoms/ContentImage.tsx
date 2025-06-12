interface IContentImageProps {
  url: string;
  alt: string;
  url_view: string;
}
export default function ContentImage({
  url,
  alt,
  url_view,
}: IContentImageProps): React.ReactNode {
  return (
    <div className="w-full bg-[var(--color-gray-light)] rounded-[var(--border-radius-small)] h-full">
      <img
        className="rounded-[var(--border-radius-small)] w-full h-full object-cover object-center"
        src={url}
        alt={alt}
      />
    </div>
  );
}
