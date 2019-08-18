import React, { useState } from "react";
import OrganizationForm from "./organizationForm";
import VolunteerForm from "./volunteerForm";

export default function Register(props) {
  const [registerAs, setRegisterAs] = useState(null);

  const handelAfterCreateOrganization = e => {
    props.history.push("/events");
  };

  const handelAfterCreateVolunteer = e => {
    props.history.push("/events");
  };

  return (
    <div>
      <div class="text-center" style={{ marginBottom: "50px" }}>
        <button
          className="btn btn-primary btn-lg p-2 m-2"
          onClick={() => setRegisterAs("organization")}
        >
          Register As An Organization
        </button>
        <button
          className="btn btn-secondary btn-lg p-2 m-2"
          onClick={() => setRegisterAs("volunteer")}
        >
          Register As A Volunteer
        </button>
      </div>
      {registerAs === "organization" && (
        <OrganizationForm
          onAfterCreateOrganization={handelAfterCreateOrganization}
        />
      )}
      {registerAs === "volunteer" && (
        <VolunteerForm onAfterCreateVolunteer={handelAfterCreateVolunteer} />
      )}
    </div>
  );
}
