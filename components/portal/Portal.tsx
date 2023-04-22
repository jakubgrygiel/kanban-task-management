import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
`;

interface IPortalProps {
  children: ReactNode;
}

export default function Portal({ children }: IPortalProps) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(<StyledWrapper>{children}</StyledWrapper>, ref.current)
    : null;
}
