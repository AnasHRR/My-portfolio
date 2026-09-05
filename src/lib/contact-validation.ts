export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactField = keyof ContactInput;

/** Error codes map to translated messages on the client. */
export type ContactErrorCode =
  | "nameRequired"
  | "nameShort"
  | "emailRequired"
  | "emailInvalid"
  | "subjectRequired"
  | "subjectShort"
  | "messageRequired"
  | "messageShort";

export type ContactErrors = Partial<Record<ContactField, ContactErrorCode>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const LIMITS = {
  name: { min: 2, max: 120 },
  email: { max: 200 },
  subject: { min: 3, max: 200 },
  message: { min: 20, max: 5000 },
} as const;

export function sanitizeContactInput(raw: unknown): ContactInput {
  const obj = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  return {
    name: str(obj.name, LIMITS.name.max),
    email: str(obj.email, LIMITS.email.max),
    subject: str(obj.subject, LIMITS.subject.max),
    message: str(obj.message, LIMITS.message.max),
  };
}

export function validateContactInput(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};

  if (!input.name) errors.name = "nameRequired";
  else if (input.name.length < LIMITS.name.min) errors.name = "nameShort";

  if (!input.email) errors.email = "emailRequired";
  else if (!EMAIL_RE.test(input.email)) errors.email = "emailInvalid";

  if (!input.subject) errors.subject = "subjectRequired";
  else if (input.subject.length < LIMITS.subject.min) errors.subject = "subjectShort";

  if (!input.message) errors.message = "messageRequired";
  else if (input.message.length < LIMITS.message.min) errors.message = "messageShort";

  return errors;
}

export function validateField(field: ContactField, input: ContactInput): ContactErrorCode | undefined {
  return validateContactInput(input)[field];
}
