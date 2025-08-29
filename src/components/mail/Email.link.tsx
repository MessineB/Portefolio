"use client";
import { MouseEvent } from "react";

interface EmailLinkProps {
  email: string;
  subject?: string;
  body?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Essaie d'ouvrir le client mail via mailto:
 * Si rien ne se passe (pas de handler), fallback vers Gmail.
 */
export function EmailLink({ email, subject, body, className, children }: EmailLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);
    const mailtoHref = `mailto:${email}${params.toString() ? `?${params.toString()}` : ""}`;

    // Mémorise l’état de focus avant tentative
    const hadFocus = document.hasFocus();

    // Tente d’ouvrir le client mail par défaut
    window.location.href = mailtoHref;

    // Après un court délai, si on a toujours le focus,
    // on suppose qu’aucun client n’a géré mailto → fallback Gmail
    window.setTimeout(() => {
      const stillFocused = document.hasFocus();
      if (stillFocused === hadFocus) {
        const gmailUrl = new URL("https://mail.google.com/mail/");
        gmailUrl.searchParams.set("view", "cm");
        gmailUrl.searchParams.set("to", email);
        if (subject) gmailUrl.searchParams.set("su", subject);
        if (body) gmailUrl.searchParams.set("body", body);
        window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
      }
    }, 700);
  }

  return (
    <a href={`mailto:${email}`} onClick={handleClick} className={className}>
      {children ?? email}
    </a>
  );
}
