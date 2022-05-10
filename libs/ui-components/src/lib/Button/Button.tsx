import styles from './Button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <div className={'bg-indigo-300'}>
      <h1>Welcome to Button! yay</h1>
    </div>
  );
}

export default Button;
