import { IconMap, IconMenu, IconShopping } from "../../../public/icons";
import Button from "../atoms/Button";
import SearchInput from "../molecules/SearchInput";

export default function HeaderMobile(): React.ReactNode {
  return (
    <header className="md:hidden bg-[var(--color-main)] p-[var(--padding-medium)] flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <div className="">
          <h2 className="font-bold">Libre</h2>
        </div>
        <div className="w-full">
          <SearchInput />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">
            <IconMenu />
          </Button>
          <Button variant="ghost">
            <IconShopping />
          </Button>
        </div>
      </div>
      <div>
        <Button variant="ghost" className="flex items-center gap-2">
          <IconMap className="h-4 w-4" />
          sent to
        </Button>
      </div>
    </header>
  );
}
