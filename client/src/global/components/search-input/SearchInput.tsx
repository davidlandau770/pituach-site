import type { ChangeEvent, CSSProperties, FC } from "react";
import { SEARCH_INPUT_STYLE } from "./search-input.style";

type SearchInputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  width?: CSSProperties["width"];
  containerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
};

const SearchInput: FC<SearchInputProps> = ({
  onChange,
  placeholder,
  width = "100%",
  containerStyle,
  inputStyle,
}) => {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid white",
        width,
        paddingInline: "8px",
        ...containerStyle,
      }}
    >
      <input
        type="text"
        style={{ ...SEARCH_INPUT_STYLE, ...inputStyle }}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
