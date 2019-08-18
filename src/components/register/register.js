import React, {useState} from 'react'
import OrganizationForm from "./organizationForm";
import VolunteerForm from "./volunteerForm";

export default function Register() {
    const [registerAs,setRegisterAs] = useState(null)
    return (
        <div>
            <div class="text-center" style={{marginBottom: "50px"}}>
                <button className="btn btn-primary btn-lg p-2 m-2" onClick={() => setRegisterAs('organization')}>Register As An Organization</button>
                <button className="btn btn-secondary btn-lg p-2 m-2" onClick={() => setRegisterAs('volunteer')}>Register As A Volunteer</button>
            </div>
            {registerAs === 'organization' && <OrganizationForm />}
            {registerAs === 'volunteer' && <VolunteerForm />}
        </div>
    )
}
