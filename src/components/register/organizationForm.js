import React, {useState} from 'react';

export default function OrganizationForm() {
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [website,setWebsite] = useState("");
    const [facebook,setFacebook] = useState("");
    const [twitter,setTwitter] = useState("");
    const [instagram,setInstagram] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");

    const inputHandler = (e) => {
        switch(e.target.id) {
            case "name":
                setName(e.target.value)
                break;
            case "description":
                setDescription(e.target.value)
                break;
            case "website":
                setWebsite(e.target.value)
                break;
            case "facebook":
                setFacebook(e.target.value)
                break;
            case "twitter":
                setTwitter(e.target.value)
                break;
            case "instagram":
                setInstagram(e.target.value)
                break;
            case "email":
                setEmail(e.target.value)
                break;
            case "phone":
                setPhone(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }

    const createOrganizationHandler = (e) => {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URI}/endpoint`, {
            method: 'post',
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              'Authorization': `Token ${'token'}`
            },
            body: JSON.stringify({
                name,
                description,
                website,
                facebook,
                twitter,
                instagram,
                email,
                phone,
                password
            })
        })
        .then( res => res.json() )
        .then((data) => {
            //If you need the response...
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
    }

    return (
        <div>
            <h1>Register Organization</h1>
            <form onSubmit={createOrganizationHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="nameDescription" placeholder="Enter name" value={name} onChange={inputHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" aria-describedby="descriptionDescription" placeholder="Enter description" value={description} onChange={inputHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="text" className="form-control" id="website" aria-describedby="websiteDescription" placeholder="Enter website" value={website} onChange={inputHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="facebook">Facebook</label>
                    <input type="text" className="form-control" id="facebook" aria-describedby="facebookDescription" placeholder="Enter facebook" value={facebook} onChange={inputHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="twitter">Twitter</label>
                    <input type="text" className="form-control" id="twitter" aria-describedby="twitterDescription" placeholder="Enter twitter" value={twitter} onChange={inputHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="instagram">Instagram</label>
                    <input type="text" className="form-control" id="instagram" aria-describedby="instagramDescription" placeholder="Enter instagram" value={instagram} onChange={inputHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" aria-describedby="emailDescription" placeholder="Enter email" value={email} onChange={inputHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" aria-describedby="phoneDescription" placeholder="Enter phone" value={phone} onChange={inputHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" className="form-control" id="password" aria-describedby="passwordDescription" placeholder="Enter password" value={password} onChange={inputHandler} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>           
        </div>
    )
}
