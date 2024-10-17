import { Burger } from "@/components/ui/Burger";
import { Logo } from "../logo/Logo";
import { Links } from "../links/Links";

export function Header() {
  return (
    <header className="container fixed top-0 left-0 right-0 z-20 pt-10 w-full flex items-center justify-between">
      <Logo></Logo>
      <nav className="hidden tablet:block">
        <ul className="flex gap-10 items-center font-onest">
          <Links></Links>
        </ul>
      </nav>

      <Burger className="tablet:hidden"></Burger>
    </header>
  );
}
