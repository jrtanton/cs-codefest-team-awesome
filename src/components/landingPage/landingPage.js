import React from 'react'

export default function LandingPage(props) {
    return (
        <div className="text-center">
            <h1 className="display-1">Voulenteerly</h1>
            <div className="card-group">
                <div className="card text-white bg-primary m-3" style={{maxWidth: '35rem'}}>
                    <div className="card-header"></div>
                    <div className="card-body">
                        <h3 className="card-title">Volunteer Your Help</h3>
                        <p className="card-text">Want to help your local community? Sign up as a volunteer to find an organization to lend your assistance to make your community a better place to live.</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-light btn-lg p-3 m-2" onClick={() => props.history.push('/events')}>Volunteer</button>
                    </div>
                </div>
                <div className="card text-white bg-secondary m-3" style={{maxWidth: '35rem'}}>
                    <div className="card-header"></div>
                    <div className="card-body">
                        <h3 className="card-title">Organize Your Event</h3>
                        <p className="card-text">Specify skills needed, recruit volunteers, and get connected to jumpstart your event. Sign up to create your organization's profile!</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-light btn-lg p-3 m-2" onClick={() => props.history.push('/create-event')}>Organize</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
