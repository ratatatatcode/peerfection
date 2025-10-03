// Fixed size for all auth pages
// No form element here
import { ReactNode } from 'react';

type FormProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function AuthForm({ title, subtitle, children }: FormProps) {
  return <></>;
}
