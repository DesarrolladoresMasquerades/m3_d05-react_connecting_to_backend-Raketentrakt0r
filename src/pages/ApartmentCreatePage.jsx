import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ApartmentCreatePage(){
    const [formData, setFormData] = useState({
        title: "Loading data...",
        pricePerDay: 0,
      });
      const params = useParams(); // same as req.params.apartmentId
      const navigate = useNavigate();
      function handleCreate(event) {
        event.preventDefault();
        axios
          .post(
            `https://ironbnb-m3.herokuapp.com/apartments/`,
            formData
          )
          .then((newData) => navigate(`/`))
          .catch((error) => navigate(`/apartments/create`));
      }
      function handleInput(event) {
        const inputName = event.target.name;
        const value = event.target.value;
        setFormData((formData) => {
          return { ...formData, [inputName]: value };
        });
      }
      return (
        <div className="AddApartmentPage">
          <h3>Create apartment </h3>
          <form onSubmit={handleCreate}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={handleInput}
              value={formData.title}
            />
            <label>Price per Day</label>
            <input
              type="number"
              name="pricePerDay"
              onChange={handleInput}
              value={formData.pricePerDay}
            />
            <button type="submit">Save Changes</button>
          </form>
        </div>
      );
    }




















