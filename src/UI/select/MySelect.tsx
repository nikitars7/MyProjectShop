import React, { ChangeEvent } from 'react'
import { RateList, SortValueEnum } from '../../utils/RateList'
import { useAppDispatch } from '../../store/store'
import { setSortBy } from '../../store/slices/filterSlice'
import styles from './MySelect.module.scss'
interface MySelectProps {
   options:RateList[],
   defaultValue:string,
   value:string,
   onChange:(e:string) => void,
}
const MySelect:React.FC<MySelectProps> = ({options ,defaultValue,value,onChange}) => {
   const dispatch = useAppDispatch()
   const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
   onChange(e.target.value)
   dispatch(setSortBy((e.target.value) as SortValueEnum))
   };
  return (
  <div className={styles.select__wrapper}>
   <select value={value} onChange={handleChange} className={styles.select}>
      <option disabled value=''>{defaultValue}</option>
       {options.map(option => 
         <option key={option.sortValue}value={option.sortValue}>{option.name}</option>)}
   </select>
 </div>
  )
}

export default MySelect;