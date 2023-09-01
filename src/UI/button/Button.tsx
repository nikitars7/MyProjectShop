import styles from './Button.module.scss'
interface ButtonProps {
  children: React.ReactNode;
  handleClick?:() => void;
}
const Button: React.FC<ButtonProps> = ({ children, handleClick }) => {
  return <button onClick={handleClick} className={styles.Button}>{children}</button>;
};

export default Button;
