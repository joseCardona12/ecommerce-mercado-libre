
import { IconSearch } from "../../../public/icons";
import Input from "../atoms/Input";

export default function SearchInput(): React.ReactNode {
  return (
    <div className="flex items-center justify-between gap-2 border border-[var(--color-gray)] rounded-[var(--border-radius-small)] p-2 text-sm bg-white">
      <Input
        className="outline-none w-full"
        placeholder="Search products, brand and more..."
      />
      <div className="flex items-center gap-2">
        <div className="bg-[var(--color-gray)] w-[1px] h-[20px]"></div>
        <IconSearch className="h-4 w-4 text-[var(--color-gray-paragraph)] cursor-pointer" />
      </div>
    </div>
  );
}
