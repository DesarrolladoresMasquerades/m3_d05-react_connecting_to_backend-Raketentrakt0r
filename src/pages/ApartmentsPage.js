import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  // This effect will run only once after the initial render 
  useEffect(() => {
    axios
    .get("https://ironbnb-m3.herokuapp.com/apartments")
    .then(response=>setApartments(response.data))
  }, []);

  return (
    <div>
      <h3>List of apartments</h3>

      {apartments.map((apartment) => (
        <Link to={`/apartments/${apartment._id}`}>
        <div key={apartment._id} className="card">
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.title}</h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default ApartmentsPage;
