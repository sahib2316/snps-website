import React from "react";
// import db from "./firebaseConfig";
import { useState } from "react";

// import { ReactDOM } from "react";

export default function MyComponent(props) {
  const [logoUrl, setLogoUrl] = useState("");

  const [uniqueName, setUniqueName] = useState("");

  // const [object, setObject] = useState({});

  const handleUrlChange = function (e) {
    setLogoUrl(e.target.value);
  };

  const handleNameChange = function (e) {
    setUniqueName(e.target.value);
  };

  const addWebsiteLogo = function () {
    // setObject({
    //   url: logoUrl,
    //   unique: uniqueName,
    // });

    const websiteLogo = {
      url: "./assets/images/" + logoUrl,
      unique: uniqueName,
    };

    db.collection("WebsiteLogo")
      .doc("WebsiteLogo")
      .set(websiteLogo)
      .then(function (querySnapshot) {
        alert("successful till here");
      });
  };

  return (
    <>
      {/* <div>
        <h1>Small changes in your attitude can lead to .....</h1>
        <p>{props.para}</p>
      </div> */}

      {/* ad slides  */}
      <div className="container my-5 pl-0 ">
        <h3>Add Website Logo</h3>
        <hr />
      </div>
      <div className="container bg-secondary mb-5 ">
        <div className="row ">
          {/* <!-- label div --> */}
          <div className=" col-md-2 border-input bg-light pr-0 mx-3 mt-2">
            <h5 className="mb-0">
              Add Website Logo(URL)
              <br />
              <button
                className="btn btn-primary ml-5"
                id="add-logo"
                onClick={addWebsiteLogo}
              >
                <i className="fa-solid fa-circle-plus"></i>
              </button>
            </h5>
          </div>
          {/* <!-- End label div --> */}
          {/* <!-- input div --> */}
          <div className="col-md-9 form-group mt-3">
            <label htmlFor="logoUrl">
              <strong>Logo URL</strong>
            </label>
            <input
              type="url"
              className="form-control"
              name="logoUrl"
              id="logoUrl"
              value={logoUrl}
              onChange={handleUrlChange}
            />
          </div>
          {/* <!--End input div --> */}
        </div>
        {/* <!-- name of slide --> */}
        <div className="text-center">
          <div>
            <label htmlFor="urlName">
              <strong>Give a unique URL name</strong>
            </label>
          </div>
          <div className="pb-3">
            <input
              type="text"
              name="urlName"
              id="urlName"
              value={uniqueName}
              onChange={handleNameChange}
            />
          </div>
        </div>
      </div>
      {/* <!--End of add slides --> */}
    </>
  );
}
