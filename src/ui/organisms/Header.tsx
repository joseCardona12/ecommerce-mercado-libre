"use client";

import { useState } from "react";
import Button from "../atoms/Button";
import SearchInput from "../molecules/SearchInput";
import Modal from "./Modal";
import { IconMap, IconShopping } from "../../../public/icons";
import MenuHeader from "../molecules/MenuHeader";
import {
  HEADER_DATA,
  HEADER_DATA_CREATE_ACCOUNT,
} from "@/utils/constants/headerData";

export default function Header(): React.ReactNode {
  const [isOpenAddress, setIsOpenAddress] = useState<boolean>(false);
  return (
    <header className="hidden md:flex flex-col gap-4 pl-[var(--padding-extra-big)] pt-[var(--padding-small)] pb-[var(--padding-small)] pr-[var(--padding-extra-big)] bg-[var(--color-main)]">
      <div className="flex items-center justify-between w-full">
        <div>
          <h2 className="font-bold">Mercado Libre</h2>
        </div>
        <div className="w-[50%]">
          <SearchInput />
        </div>
        <div className="w-[30%]">Envío gratis</div>
      </div>
      <div className="flex items-center justify-between w-full">
        <Button
          variant="ghost"
          onClick={() => setIsOpenAddress(!isOpenAddress)}
        >
          <div className="flex gap-2">
            <IconMap />
            Sent to
          </div>
        </Button>
        <div className="w-[50%] ">
          <MenuHeader data={HEADER_DATA} />
        </div>
        <div className="w-[30%] flex items-center gap-2">
          <IconShopping className="h-4 w-4" />
        </div>
      </div>
      <Modal
        title="Choose where receive your shopping"
        description="test moda"
        open={isOpenAddress}
        setOpenModal={setIsOpenAddress}
        variant="sm"
        children={<>Hello</>}
      />
    </header>
  );
}
