"use client";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export default function CalendlyButton({ className, style, children }) {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  // Only render once we have the rootElement to avoid hydration mismatch
  if (!rootElement) {
    return <button className={className} style={style}>{children}</button>;
  }

  return (
    <PopupButton
      url="https://calendly.com/iqraahsan262969/30min"
      rootElement={rootElement}
      text={children}
      className={className}
      style={{ border: 'none', cursor: 'pointer', ...style }}
      pageSettings={{
        hideGdprBanner: true
      }}
    />
  );
}
