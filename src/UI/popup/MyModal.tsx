import styles from './MyMydal.module.scss'
import classNames from 'classnames'
type MyModalProps = {
  children:React.ReactNode,
  isVisible:boolean,
  setIsVisible:(isVisible:boolean)=> void;
}
const MyModal:React.FC<MyModalProps> = ({children,isVisible,setIsVisible}) => {
  const rootClasses = [styles.myModal];
  const contentClasses = [styles.myModal__content];
  if(isVisible){
    rootClasses.push(styles.active)
    contentClasses.push(styles.open)
  }
  return (
    <div className={classNames(rootClasses)} onClick={()=> setIsVisible(!isVisible)} >
      <div className={classNames(contentClasses)} onClick={(e:React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        {children}
      </div>
      </div>
  )
}

export default MyModal