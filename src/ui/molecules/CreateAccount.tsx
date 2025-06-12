import Button from "../atoms/Button";

interface ICreateAccountProps {
  text_button: string;
}
export default function CreateAccount({
  text_button,
}: ICreateAccountProps): React.ReactNode {
  return (
    <div className="bg-white p-[var(--padding-small)] border border-[var(--color-gray)] rounded-[var(--border-radius-small)] flex flex-col gap-4">
      <h2 className="font-medium text-center">
        Create an account and improve your experience!
      </h2>
      <Button variant="default">{text_button}</Button>
      <p className="text-sm text-center ">
        Do you have an account?{" "}
        <span className="text-[var(--color-blue)]">Enter</span>
      </p>
    </div>
  );
}
