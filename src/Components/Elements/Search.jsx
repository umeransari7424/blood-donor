import React, { useState } from "react";



function Search() {

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const personData = [
    { id: 1, name: "John Doe", phone: "123-456-7890", city: "New York", address: "123 Main St", bloodGroup: "A+" },
    { id: 2, name: "Jane Doe", phone: "987-654-3210", city: "Los Angeles", address: "456 Oak St", bloodGroup: "B-" },
    // Add more person data as needed
    { id: 3, name: "Jane Doe", phone: "987-654-3210", city: "Los Angeles", address: "456 Oak St", bloodGroup: "B-" },

  ];

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
  };

  const handleBloodGroupChange = (event) => {
    const bloodGroup = event.target.value;
    setSelectedBloodGroup(bloodGroup);
  };

  const openModal = () => {
    // Filter persons based on the selected city and blood group
    const personsInCityAndBloodGroup = personData.filter(
      (person) => person.city === selectedCity && person.bloodGroup === selectedBloodGroup
    );
    setFilteredPersons(personsInCityAndBloodGroup);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="search">
      <div className="container-fluid text-center">
        <div className="row d-flex justify-content-center">
          {/* <div className="col-md-4"></div> */}
          <div className="col-md-6 donors text-start">
            <div className="text-center">
              <h1>Search Donors</h1>
            </div>
            <div className="mt-5">
              <div>


                <label htmlFor="city">Select City: </label> &nbsp;&nbsp;
                <select id="city" className="selection" value={selectedCity} onChange={handleCityChange}>
                  <option value="">Select a city</option>
                  {/* Assume all cities are unique in your data */}
                  {[...new Set(personData.map((person) => person.city))].map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div> <br />
              <div>


                <label htmlFor="bloodGroup">Blood Group: </label>
                <select id="bloodGroup" className="selection" value={selectedBloodGroup} onChange={handleBloodGroupChange}>
                  <option value="">Select a blood group</option>
                  {[...new Set(personData.map((person) => person.bloodGroup))].map((bloodGroup) => (
                    <option key={bloodGroup} value={bloodGroup}>
                      {bloodGroup}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-center">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={openModal} disabled={!selectedCity || !selectedBloodGroup}>
                  Search
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Blood Donors
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <ul>
                  {filteredPersons.map((person) => (
                    <li key={person.id}>
                      <strong>{person.name}</strong>
                      <p>Phone: {person.phone}</p>
                      <p>Address: {person.address}</p>
                      <p>Blood Group: {person.bloodGroup}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button className="button" type="button"  data-bs-dismiss="modal" aria-label="Close">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;