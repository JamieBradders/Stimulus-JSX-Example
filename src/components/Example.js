import React from "jsx-dom";

/**
 * Example Component
 */

export function Example(props) {
  if (props.title && props.handle) {
    return (
      <div className="app">
        <h1>Title: {props.title}</h1>
        <h2>Handle: {props.handle}</h2>

        <button type="button" data-action="click->view#handleClick">
          Click To Call Stimulus Action!
        </button>
      </div>
    );
  }

  return <p>Add something</p>;
}

export const renderExample = (data = {}) => {
  return <Example title={data.product.title} handle={data.product.handle} />;
};
