"use client";

import { Button } from "@/components/ui/Button";
import { ToggleContext } from "@/context/Toggle.context";
import { useContext, useEffect, useId, useMemo } from "react";

interface Props {
  title: string;
  content: string;
}

export function ToggleItem({ title, content }: Props) {
  const context = useContext(ToggleContext);

  const { removeValue, setValueActive, addValue, values } = context;

  const valueId = useId();

  useEffect(() => {
    addValue({
      id: valueId,
      title,
      content,
      isActive: false,
    });

    return () => {
      removeValue(valueId);
    };
  }, []);

  const isActive = useMemo(() => {
    return values.find(({ id }) => id === valueId)?.isActive ?? false;
  }, [values]);

  return (
    <Button
      className={`${
        !isActive && "btn-secondary-inactive"
      } w-full mobile:w-auto text-nowrap`}
      variant="secondary"
      onClick={() => setValueActive(valueId)}
    >
      {title}
    </Button>
  );
}
