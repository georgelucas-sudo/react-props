import React from "react";
import Card from "./Card";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Card
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        name="Beyonce"
        tel="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        img="https://th.bing.com/th/id/R.5188d42e233a95a20512a7765c03dba5?rik=t%2bOUXvGUGdPEgg&pid=ImgRaw&r=0"
        name="Chuck Norris"
        tel="+256 077783838"
        email="chuck@norris.com"
      />
      <Card
        img="https://th.bing.com/th/id/R.d9ae49b29a0d1ffe52d3e9a871b688b6?rik=qjfMOx%2bTZ6A6PA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f41500000%2fJack-Bauer-24-41568436-1616-2000.jpg&ehk=kOC974TjKHODem5Sa2EMQ0S1gaXpNMSArecUGgX0pXU%3d&risl=&pid=ImgRaw&r=0"
        name="Jack Baur"
        Tel="+256 08388383377"
        email="jack@baur.com"
      />
    </div>
  );
}

export default App;
