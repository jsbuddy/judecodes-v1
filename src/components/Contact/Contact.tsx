import React, {useContext, useState} from 'react';
import * as axios from 'axios';
import {FiCheck, FiSend, FiX} from 'react-icons/fi'
import AppContext from "../../context";

function Contact() {
    const context = useContext(AppContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [btnText, setBtnText] = useState(<span><span>Send message <span
        className="icon"><FiSend/></span></span></span>);

    const reset = () => {
        setBtnText(<span><span>Send message <span className="icon"><FiSend/></span></span></span>)
    };

    const start = () => {
        setSending(true);
        setBtnText(<span>Sending.. <span className="icon sending-animation"><FiSend/></span></span>);
    };

    const sent = () => {
        setSending(false);
        setName('');
        setEmail('');
        setMessage('');
        setBtnText(<span>Message sent <span className="icon"><FiCheck/></span></span>);
        setTimeout(() => reset(), 3000)
    };

    const notsent = () => {
        setSending(false);
        setBtnText(<span>Not Sent <span className="icon"><FiX/></span></span>);
        setTimeout(() => reset(), 3000)
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (name.trim() && email.trim() && message.trim()) {
            start();
            try {
                // @ts-ignore
                const res = await axios({
                    url: '/.netlify/functions/message', method: 'POST',
                    data: JSON.stringify({name, email, message}),
                });
                if (res.data.success) sent();
                else notsent();
            } catch (e) {
                notsent();
            }
        }
    };

    return (
        <div>
            <section className='section'>
                <h3 className='section-title'><span className="colored">Get</span> in touch</h3>
                <div className='section-body'>
                    <div>
                        <ul className='info-list'>
                            <li>
                                <span className="label">Address:</span>
                                <span className="value">
                                    {`${context.address.town}, ${context.address.state}, ${context.address.country}`}
                                </span>
                            </li>
                            <li>
                                <span className="label">Phone:</span>
                                <span className="value">{context.phone}</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='info-list'>
                            <li>
                                <span className="label">Email:</span>
                                <span className="value">{context.email}</span>
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
                <h3 className='section-title'><span className="colored">Leave</span> a message</h3>
                <div className='section-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='double-column'>
                            <div>
                                <label className="input-wrap">
                                    <input type="text" name='name' placeholder={' '} value={name}
                                           onChange={e => setName(e.target.value)} disabled={sending} required/>
                                    <span className='label'>Full Name</span>
                                    <span className="box"/>
                                </label>
                            </div>
                            <div>
                                <label className="input-wrap">
                                    <input type="email" name='email' placeholder={' '} value={email}
                                           onChange={e => setEmail(e.target.value)} disabled={sending} required/>
                                    <span className='label'>Email address</span>
                                    <span className="box"/>
                                </label>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="input-wrap">
                                <textarea name="message" cols={30} rows={30} placeholder={' '} value={message}
                                          onChange={e => setMessage(e.target.value)} disabled={sending} required/>
                                <span className='label'>Message</span>
                                <span className="box"/>
                            </label>
                        </div>
                        <div className="mt-5">
                            <button className='btn icon-right mt-4' disabled={sending}>{btnText}</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
