import { useState } from "react";
import "./style.css";

export const ObjuseState = () => {
  const [name, setName] = useState("Anand");
  const [age, setAge] = useState("-1");
  const [city, setCity] = useState("Benglore");
  const [country, setCountry] = useState("INDIA");

  const changes = {
    // name: setName("Thor"),//this will not work
    name() {
      setName("Thor");
    },
    age() {
      setAge("1500");
    },
    city() {
      setCity("Assgaurd");
    },
    country() {
      setCountry("Assgaurd");
    },
  };
  const handleChange = (event) => {
    const field = event.target.name;
    changes[field]; // this will not work❌
    changes[field]();
  };

  return (
    <main className="obj">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Country: {country}</p>
      <button onClick={handleChange} name="name">
        Change Name
      </button>
      <button onClick={handleChange} name="age">
        Change Age
      </button>
      <button onClick={handleChange} name="city">
        Change City
      </button>
      <button onClick={handleChange} name="country">
        Change Country
      </button>
    </main>
  );
};
