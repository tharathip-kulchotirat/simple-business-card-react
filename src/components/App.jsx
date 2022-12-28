import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <Card
        name={contacts[0].name}
        degree={contacts[0].degree}
        img={contacts[0].imgURL}
        linkedin={contacts[0].linkedin}
        github={contacts[0].github}
        email={contacts[0].email}
        facebook={contacts[0].facebook}
        instagram={contacts[0].instagram}
        content={contacts[0].content}
        contentTitle={contacts[0].contentTitle}
      />
    </div>
  );
}

export default App;
