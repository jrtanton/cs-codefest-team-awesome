import React, {useState} from 'react'
import OrganizationForm from "./organizationForm";
import VolunteerForm from "./volunteerForm";

export default function Register() {
    const [registerAs,setRegisterAs] = useState(null)
    const toggleButtons = (
        <div>
            <button onClick={() => setRegisterAs('organization')}>Register As An Organization</button>
            <button onClick={() => setRegisterAs('volunteer')}>Register As A Volunteer</button>
        </div>
    )
    return (
        <div>
            {!registerAs && toggleButtons}
            {registerAs === 'organization' && <OrganizationForm />}
            {registerAs === 'volunteer' && <VolunteerForm />}
        </div>
    )
}
