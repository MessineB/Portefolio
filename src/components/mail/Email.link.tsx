"use client";

import { MouseEvent } from "react";

interface EmailLinkProps {
  email: string;
  className?: string;
  children?: React.ReactNode;
}

export function EmailLink({ email, className, children }: EmailLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    // Tente d'ouvrir le client mail
    const isGmailPreferred = !window.navigator?.msSaveOrOpenBlob; 

    // Vérifie si on est dans un environnement sans gestionnaire mail
    const noMailClient =
      /iPad|iPhone|iPod|Android/i.test(navigator.userAgent) &&
      !/Gmail|Outlook|Yahoo/i.test(navigator.userAgent);

    if (noMailClient) {
      e.preventDefault();
      window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, "_blank");
    }
  }

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={className}
    >
      {children || email}
    </a>
  );
}
