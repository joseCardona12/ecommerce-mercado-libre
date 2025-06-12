import { ISizeVariantModal } from "@/interfaces/sizeVariantModa";
import { IconClose } from "../../../../public/icons";
import Button from "../atoms/Button";
import { AnimatePresence, motion } from "framer-motion";

interface IModalProps {
  open: boolean;
  variant: "sm" | "md" | "lg";
  title: string;
  description: string;
  setOpenModal: (value: boolean) => void;
}
export default function Modal({
  open,
  variant,
  title,
  description,
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
            className={`${sizeVariant[variant]} relative bg-white rounded-[var(--border-radius-small)] p-[var(--padding-small)] shadow-sm`}
          >
            <Button
              onClick={() => setOpenModal(!open)}
              variant="outline"
              className="absolute top-2 right-2"
            >
              <IconClose className="h-4 w-4" />
            </Button>
            <div>
              <h2 className="font-medium text-lg">{title}</h2>
              <p className="text-sm text-[var(--color-gray-paragraph)]">
                {description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
