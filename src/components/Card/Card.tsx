import { useRef } from "react";
//import "./index.css";
const codeInputFields = new Array(4);

export const Card = () => {
  const cardInputRef = useRef<(HTMLInputElement | null)[]>([]);
  const codeChangeHandler =
    (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length === 4) {
        console.log(e.target.value);
        cardInputRef.current[i]?.nextElementSibling
          ? cardInputRef.current[i + 1]?.focus()
          : cardInputRef.current[i]?.blur();
      }
    };

  const keyBoardHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  };

  return (
    <div className="card">
      {codeInputFields.fill(0).map((_, i) => (
        <input
          className="card__number--input"
          type="number"
          onKeyDown={keyBoardHandler}
          placeholder="XXXX"
          ref={(el) => (cardInputRef.current[i] = el)}
          name={`code-${i}`}
          key={i}
          maxLength={4}
          onChange={codeChangeHandler(i)}
        />
      ))}
      <div className="card__owner">Name Surname</div>
    </div>
  );
};
