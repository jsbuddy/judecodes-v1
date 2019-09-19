import React, { useContext } from 'react';
import AppContext from '../../context';


function About() {
    const context = useContext(AppContext);
    const now: Date = new Date(Date.now());
    const dob: Date = new Date(context.dob);
    // @ts-ignore
    const ms: number = now - dob;
    const age: number = Math.floor(ms / (24 * 60 * 60 * 1000) / 365);

    return (
        <>
            <section className='section'>
                <h3 className='section-title'><span className="colored">About</span> Me</h3>
                <div className='section-body double-column'>
                    <div>
                        <p className='text-raised'>
                            <span className="text-bold">Hello, I'm {context.name}</span><br />
                            {context.about}
                        </p>
                    </div>
                    <div>
                        <ul className='info-list'>
                            <li>
                                <span className="label">Age:</span>
                                <span className="value">{age}</span>
                            </li>
                            <li>
                                <span className="label">Residence:</span>
                                <span className="value">{context.address.state}, {context.address.country}</span>
                            </li>
                            <li>
                                <span className="label">Freelance:</span>
                                <span className="value">Available</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='section'>
                <h3 className='section-title'><span className="colored">My</span> Services</h3>
                <div className='section-body'>
                    <div className="service double-column">
                        {
                            context.services.map(service => (
                                <div className="service-item" key={service.title}>
                                    <span className="icon">{service.icon}</span>
                                    <h4 className="title">{service.title}</h4>
                                    <p className="description">{service.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;