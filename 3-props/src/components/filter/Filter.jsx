import React from "react";
import "./filter.css";

const Filter = () => {
  const student = [
    {
      id: 1,
      name: "Anand",
      score: 90,
    },
    {
      id: 2,
      name: "Praveen",
      score: 50,
    },
    {
      id: 3,
      name: "Anurag",
      score: 70,
    },
    {
      id: 4,
      name: "Ana de armas",
      score: 60,
    },
    {
      id: 5,
      name: "Raja",
      score: 80,
    },
  ];

  return (
    <>
      <main className="container">
        {student.map(st => (
          <div className="card">
            <h3>{st.name}</h3>
            <p>{st.score}</p>
          </div>
        ))}
      </main>
      {/* rendering filtered score above 70 using filter method and map method*/}
      <main className="container">
        {student
          .filter(st => st.score >= 70)
          .map(st => (
            <div className="card">
              <h3>{st.name}</h3>
              <p>{st.score}</p>
            </div>
          ))}
      </main>
    </>
  );
};

export default Filter;
