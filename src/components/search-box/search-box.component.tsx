// import { Component } from "react";
// import { ChangeEventHandler } from "react";
// We can also define our own definition instead the function definition above
import { ChangeEvent } from "react";
import "./search-box.styles.css";

// const variable: string = 'string'
// const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {};

// interface ISearchBoxProps {
//   className: string;
//   placeholder?: string;
// }

// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void;
// }

type SearchBoxProps = {
  className: string;
  // we use ? in placeholder to not be a required argument
  // I don't know if this is still optional chaining or not
  placeholder?: string;
  // Since we are not returning anything from this onChangeHandler, we specify void otherwise could be a string, boolean, number etc
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

/* 
class SearchBox extends Component {
  render() {
    return (
      <input
      className={`search-box ${this.props.className}`}
      type="search"
      placeholder={this.props.placeholder}
      onChange={this.props.onChangeHandler}
      />
      );
    }
  }
  
  */
export default SearchBox;
