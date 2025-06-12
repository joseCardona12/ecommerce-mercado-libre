import CreateAccount from "../molecules/CreateAccount";
import SubscribeMovie from "../molecules/SubscribeMovie";

export default function CreateAccountSection(): React.ReactNode {
  return (
    <section className="md:hidden pl-[var(--padding-small)] pr-[var(--padding-small)] flex flex-col gap-4">
      <CreateAccount text_button="Create account" />
      <SubscribeMovie />
    </section>
  );
}
