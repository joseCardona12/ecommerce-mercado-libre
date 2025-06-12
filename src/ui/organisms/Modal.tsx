import { ISizeVariantModal } from "@/interfaces/sizeVariantModa";
import Button from "../atoms/Button";
import { AnimatePresence, motion } from "framer-motion";
import { IconClose } from "../../../public/icons";

interface IModalProps {
  open: boolean;
  variant: "sm" | "md" | "lg";
  title: string;
  description: string;
  setOpenModal: (value: boolean) => void;
  children: React.ReactNode;
}
export default function Modal({
  open,
  variant,
  title,
  description,
  children,
  setOpenModal,
}: IModalProps): React.ReactNode {
  const sizeVariant: ISizeVariantModal = {
    sm: "w-[40vw] h-auto",
    md: "w-[50vw]",
    lg: "w-[80vw]",
  };
  return (
    <AnimatePresence>
      {open && (
        <div className="w-full h-[100vh] flex justify-center items-center absolute top-0 left-0 bg-black/10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className={`${sizeVariant[variant]} relative bg-white rounded-[var(--border-radius-small)] p-[var(--padding-medium)] shadow-sm flex flex-col gap-4`}
          >
            <Button
              onClick={() => setOpenModal(!open)}
              variant="outline"
              className="absolute top-4 right-4"
            >
              <IconClose className="h-4 w-4" />
            </Button>
            <div>
              <h2 className="font-medium text-lg">{title}</h2>
              <p className="text-sm text-[var(--color-gray-paragraph)]">
                {description}
              </p>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
