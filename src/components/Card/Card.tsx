import { useRef } from "react";
import "./index.css";
const codeInputFields = new Array(4);

export const Card = () => {
  const cardInputRef = useRef<(HTMLInputElement | null)[]>([]);
  const codeChangeHandler =
    (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length === e.target.maxLength) {
        i < 3
          ? cardInputRef.current[i + 1]?.focus()
          : cardInputRef.current[i]?.blur();
      }
      if (e.target.value.length > e.target.maxLength) {
        e.target.value = e.target.value.slice(0, e.target.maxLength);
        e.preventDefault();
      }
    };
  const keyBoardHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  };

  return (
    <div className="card">
      <h1 className="card__name">Bank card</h1>
      <div className="card__number">
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
      </div>
    </div>
  );
};
