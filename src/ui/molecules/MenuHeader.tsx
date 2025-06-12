import { IHeaderData, ISubcategory } from "@/interfaces/headerData";
import { HEADER_DATA } from "@/utils/constants/headerData";
import Link from "next/link";
import { IconArrowDown } from "../../../public/icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IMenuHeaderProps {
  data: IHeaderData[];
}
export default function MenuHeader({
  data,
}: IMenuHeaderProps): React.ReactNode {
  const [showCategories, setShowCategories] = useState<boolean>(false);
  return (
    <nav className="">
      <ul className="flex items-center gap-6">
        {data.map((item: IHeaderData, index: number) => (
          <li
            className="cursor-pointer transition-colors duration-200"
            key={index}
          >
            {item.categories ? (
              <span
                className="relative"
                onClick={() => setShowCategories(!showCategories)}
              >
                <p className="hover:text-[var(--color-gray-paragraph)] flex items-center gap-2">
                  {item.name} {<IconArrowDown className="w-4 h-4" />}
                </p>
                <AnimatePresence>
                  {showCategories && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.1, ease: "easeInOut" }}
                      className="absolute z-100 top-10 left-0 bg-white shadow-sm p-[var(--padding-small)] rounded-[var(--border-radius-small)] w-[300px]"
                    >
                      <ul className="flex flex-col gap-2">
                        {item.categories.map(
                          (sub: ISubcategory, index: number) => (
                            <li className="" key={index}>
                              {sub.name}
                            </li>
                          )
                        )}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </span>
            ) : (
              <Link href="/" className="flex items-center gap-1">
                {item.name}{" "}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
