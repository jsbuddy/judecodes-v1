import React, { useContext } from 'react';
import { FiArrowRight, FiDownload, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaBehance } from 'react-icons/fa'
import './Profile.scss';
// @ts-ignore
import Typed from "react-typed";
import { Link } from "react-router-dom";
import AppContext from "../../context";

function Profile() {
    const context = useContext(AppContext);

    return (
        <>
            <div className="profile-back" />
            <div className={'profile'}>
                <div className="slide" style={{ backgroundImage: `url(${context.cover})` }} />
                <div className={'avatar'}>
                    <img src={context.avatar} alt="Avatar" />
                </div>
                <span className={'name'}>{context.name}</span>
                <span className={'short'}>
                    <Typed
                        strings={context.tags}
                        typeSpeed={20}
                        backSpeed={10}
                        backDelay={5000}
                        loop>
                    </Typed>
                </span>
                <div className="social-items">
                    <a target={'_blank'} href={context.social.facebook} className="icon"><FiFacebook /></a>
                    <a target={'_blank'} href={context.social.twitter} className="icon"><FiTwitter /></a>
                    <a target={'_blank'} href={context.social.behance} className="icon"><FaBehance /></a>
                    <a target={'_blank'} href={context.social.instagram} className="icon"><FiInstagram /></a>
                    <a target={'_blank'} href={context.social.github} className="icon"><FiGithub /></a>
                    <a target={'_blank'} href={context.social.linkedIn} className="icon"><FiLinkedin /></a>
                </div>
                <div className="links">
                    <a href={context.cv} className="link">Download CV<span className="icon"><FiDownload /></span></a>
                    <Link to={'/contact'} className="link">Contact Me <span
                        className="icon"><FiArrowRight /></span></Link>
                </div>
            </div>
        </>
    );
}

export default Profile;