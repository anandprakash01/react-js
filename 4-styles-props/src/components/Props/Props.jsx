import "./Props.css";

// Props are arguments passed into React components.
// Props are passed to components via HTML attributes.
// Just like you pass an argument to a function you can pass prop to Components
// Biggest advantage of props is to RE-USE Components

const User = (props) => {
  // const { name, age, isMarried, hobbies, location } = props;
  const { user } = props;
  // const { name, age, isMarried, hobbies, location } = user;

  // Neasted destructuring
  // const {
  //   user: { name, age, isMarried, hobbies, location },
  // } = props;

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      {user.isMarried && <p>Married: Yes</p>}
      <p>Hobby: {user.hobbies[0]}</p>
      <p>City: {user.location.city}</p>
      <p>Country: {user.location.country}</p>
    </div>
  );
};

const Card = (props) => {
  console.log(props); //Object
  const { productName, discription } = props; //destructuring of object

  return (
    // <div>
    //   <div className="card">
    //     <h2 className="title">{props.productName}</h2>
    //     <h4>{props.discription}</h4>
    //   </div>
    // </div>

    <div>
      <div className="card">
        <h2 className="title">{productName}</h2>
        <h4>{discription}</h4>
      </div>
    </div>
  );
};

// --------------Conditional Rendering via props--------------

const UserCard = ({ user, isOnline }) => {
  const indicate = {
    color: "red",
  };
  // if (!isOnline) {
  //   return <p>Not online</p>;
  // }
  return (
    <div className="user-container">
      <h2>{user}</h2>
      {/* {isOnline && <span className="green-dot"></span>} */}
      <span className="green-dot" style={isOnline ? {} : { backgroundColor: "red" }}></span>
    </div>
  );
};

// individual passed props
// const Avatar = ({ src, height, width }) => {
//   return <img className="avatar" src={src} height={height} width={width} />;
// };

// all props passed as one Object
// const Avatar = ({ image }) => {
//   const { src, height, width } = image;
//   return <img className="avatar" src={src} height={height} width={width} />;
// };
const Avatar = ({ image }) => {
  const { size, src } = image;
  const sizes = {
    s: { width: 50, height: 100 },
    m: { width: 100, height: 100 },
    xl: { width: 200, height: 200 },
  };
  const { width, height } = sizes[size] || sizes.m;
  return <img className="avatar" src={src} height={height} width={width} />;
};

// ----------------Rendering lists------------------

const List = () => {
  const listItem = [
    <li>One</li>,
    <li>Two</li>,
    <li>Three</li>,
    <li>Four</li>,
    <li>Five</li>,
    <li>Six</li>,
  ];

  const items = ["Nike", "Adidas", "Puma"];
  //   <li>Nike</li>
  //   <li>Adidas</li>
  //   <li>Puma</li>

  // method 1: create the result array using loop
  const result = [];
  //   for (const item of items) {
  //     result.push(<li>{item}</li>);
  //   }
  items.forEach((item) => {
    result.push(<li>{item}</li>);
  });

  // Method 2: (Best method) Using map fun
  const ans = items.map((item) => <li>{item}</li>);

  const phones = [
    { name: "S22 Ultra", rating: 5 },
    { name: "Iphone 13", rating: 3 },
    { name: "Pixel 7 Pro", rating: 4.9 },
  ];

  const p = phones.map((phone) => {
    return (
      <div>
        <h3>{phone.name}</h3>
        <p>{phone.rating}</p>
      </div>
    );
  });

  return (
    <main>
      <ul>{listItem}</ul>
      <ul>{result}</ul>
      <ul>{ans}</ul>
      {/* map fun in directly inside jsx */}
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <ul>{p}</ul>
    </main>
  );
};

// -----------Main Component to export---------
const Props = () => {
  return (
    <>
      <Card productName="Samsung S22 Ultra" discription="12GB RAM, 256GB Storage" />
      <Card productName="Samsung S22 Plus" discription="8GB RAM, 128GB Storage" />
      <Card productName="Google Pixel 7 Pro" />
      {/* <User
        // individual props:
        name="Anand"
        age={26}
        isMarried={false}
        hobbies={["Singing", "Sleeping"]}
        userLocation={{ country: "India", city: "Delhi" }}
      /> */}
      <User
        //Props as One Object
        user={{
          name: "Anand",
          age: 26,
          isMarried: false,
          hobbies: ["Singing", "Sleeping"],
          location: { country: "India", city: "Delhi" },
        }}
      />
      {/* ----for active user component----- */}
      <div className="active-user">
        <UserCard user="Anand" isOnline={false} />
        <UserCard user="Raj" isOnline={true} />
      </div>
      {/* -----------Dynamic Avatar component------------ */}
      {/* Sending individual props */}
      {/* <Avatar
        src="https://phantom-marca.unidadeditorial.es/9cb97d56736592dadcf4a4bc24216386/resize/1320/f/jpg/assets/multimedia/imagenes/2023/03/14/16787914742783.jpg"
        height="100px"
        width="100px"
      />
      <Avatar
        src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/02/896/500/GettyImages-1455611283.jpg?ve=1&tl=1"
        height="100px"
        width="100px"
      /> */}
      {/* Sending all props as one Object */}
      {/* <Avatar
        image={{
          width: "100px",
          height: "100px",
          src: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/02/896/500/GettyImages-1455611283.jpg?ve=1&tl=1",
        }}
      /> */}
      {/* Another way of using props */}
      <Avatar
        image={{
          size: "xl",
          src: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/02/896/500/GettyImages-1455611283.jpg?ve=1&tl=1",
        }}
      />
      <List />
    </>
  );
};

export default Props;
