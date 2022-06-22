import React from "jsx-dom";

export function Fact({ data }) {
  if (data) {
    return (
      <article className="app">
        <p>
          <strong>Fact!</strong>
          <br />
          {data.fact}
        </p>
      </article>
    );
  }

  return <p>Add something</p>;
}

export const renderFact = (data = []) => {
  return <Fact data={data[0]} />;
};
