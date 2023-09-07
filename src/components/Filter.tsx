import { useState, useRef, useCallback } from "react";
import styles from "../styles/Filter.module.scss";
import { useAppDispatch } from "../store/store";
import { setSearchParams } from "../store/slices/filterSlice";
import debounce from "lodash.debounce";
const Filter:React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickClear = () => {
    dispatch(setSearchParams(""));
    setValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const updateSearch = useCallback(
    debounce((str: string) => {
      dispatch(setSearchParams(str));
    }, 450),
    []
  );
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearch(e.target.value);
  };
  return (
    <div className={styles.filter__container}>
    <div className={styles.filter__search}>
      <svg
        className={styles.filter__icon}
        enableBackground="new 0 0 50 50"
        height="50px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="none" height="50" width="50" />
        <circle
          cx="21"
          cy="20"
          fill="none"
          r="16"
          stroke="#000000"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeMiterlimit="10"
          strokeWidth="4"
          x1="32.229"
          x2="45.5"
          y1="32.229"
          y2="45.5"
        />
      </svg>
      <input
        value={value}
        onChange={handleChangeInput}
        ref={inputRef}
        className={styles.filter__input}
        type="text"
        placeholder="Search..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.filter__clear}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
      )}
      </div>
    </div>
  );
};

export default Filter;
