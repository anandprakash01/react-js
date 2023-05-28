import "./ObjClick.css";

const users = [
  { id: 1, name: "Naruto", occupation: "Hukage" },
  { id: 2, name: "Tanjuro", occupation: "Demon slayer" },
  { id: 3, name: "Peter", occupation: "SuperHero" },
  { id: 4, name: "Robert", occupation: "Strongest Avenger😁" },
];

const handelPrint = ({ name, occupation }) => {
  console.log(`Name is : ${name}`);
  console.log(`Occupation is : ${occupation}`);
};
export const ObjClick = () => {
  return (
    <main>
      {users.map((user) => {
        return (
          <div
            onClick={(event) => {
              handelPrint({ name: user.name, occupation: user.occupation }, event);
            }}
            className="card"
            key={user.id}
          >
            <p>Name: {user.name}</p>
            <p>Id: {user.occupation}</p>
          </div>
        );
      })}
    </main>
  );
};
