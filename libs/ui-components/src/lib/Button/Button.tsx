import { FC, ReactNode } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => (
  <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>{children}</button>
);
export default Button;
