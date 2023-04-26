import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledWrapper = styled.div`
  z-index: ${({ theme }) => theme.zLevels.level5};
  position: fixed;
  inset: 0;
  color: ${({ theme }) => theme.colors.mainText};
`;

interface IPortalProps {
  children?: ReactNode;
}

export default function Portal({ children }: IPortalProps) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current && children
    ? createPortal(<StyledWrapper>{children}</StyledWrapper>, ref.current)
    : null;
}
