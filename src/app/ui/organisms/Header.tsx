"use client";

import { useState } from "react";
import Button from "../atoms/Button";
import SearchInput from "../molecules/SearchInput";
import Modal from "./Modal";

export default function Header(): React.ReactNode {
  const [isOpenAddress, setIsOpenAddress] = useState<boolean>(false);
  return (
    <header className="flex flex-col gap-4 pl-[var(--padding-extra-big)] pt-[var(--padding-small)] pb-[var(--padding-small)] pr-[var(--padding-extra-big)] bg-[var(--color-main)]">
      <div className="flex items-center justify-between">
        <div>Mercado libre</div>
        <div className="w-[70%]">
          <SearchInput />
        </div>
        <div className="w-[20%]">Envío gratis</div>
      </div>
      <div>
        <Button
          variant="outline"
          onClick={() => setIsOpenAddress(!isOpenAddress)}
        >
          Sent to
        </Button>
      </div>
      <Modal
        title="Test"
        description="test moda"
        open={isOpenAddress}
        setOpenModal={setIsOpenAddress}
        variant="sm"
      />
    </header>
  );
}
