import { ToggleContent } from "../content/ToggleContent";

interface Props {
  children: React.ReactNode;
}

export function ToggleWrapper({ children }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 w-full gap-1 items-center justify-center bg-gray-100 rounded-xl p-1">
        {children}
      </div>
      <ToggleContent></ToggleContent>
    </div>
  );
}
