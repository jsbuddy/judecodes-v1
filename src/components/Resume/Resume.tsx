import React, {useContext} from 'react';
import {IoIosAnalytics, IoIosBriefcase, IoIosCode, IoIosSchool} from 'react-icons/io';
import AppContext from "../../context";

function Resume() {
    const context = useContext(AppContext);

    return (
        <div>
            <section className="section">
                <h3 className="section-title"><span className='colored'>R</span>esume</h3>
                <div className="section-body double-column">
                    <section className='subsection'>
                        <h4 className='subsection-title'><span className="icon"><IoIosSchool/></span> Education</h4>
                        <div className="subsection-body">
                            <div className="resume-items">
                                {
                                    context.resume.education.map(education => ResumeItem(education))
                                }
                            </div>
                        </div>
                    </section>
                    <section className='subsection'>
                        <h4 className='subsection-title'><span className="icon"><IoIosBriefcase/></span> Experience</h4>
                        <div className="subsection-body">
                            <div className="resume-items">
                                {
                                    context.resume.experience.map(experience => ResumeItem(experience))
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section className="section">
                <h3 className="section-title"><span className='colored'>My</span> Skills</h3>
                <div className="section-body double-column">
                    <div>
                        <section className='subsection'>
                            <h4 className='subsection-title'><span className="icon"><IoIosCode/></span> Code</h4>
                            <div className="subsection-body">
                                {
                                    context.skills.code.map(code => SkillItem(code))
                                }
                            </div>
                        </section>
                    </div>
                    <div>
                        <section className='subsection'>
                            <h4 className='subsection-title'><span className="icon"><IoIosAnalytics/></span> Design</h4>
                            <div className="subsection-body">
                                {
                                    context.skills.design.map(design => SkillItem(design))
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Resume;


interface IResumeItem {
    present: Boolean,
    date: string,
    title: string,
    subtitle: string,
    details: string
}

interface ISkillItem {
    title: string,
    rate: number,
}

const ResumeItem = (item: IResumeItem) => (
    <div className="resume-item" key={item.title}>
        <div className={`date ${item.present && 'present'}`}>{item.date}</div>
        <div className="name">{item.title}</div>
        <div className="company">{item.subtitle}</div>
        <p className='details'>{item.details}</p>
    </div>
);

const SkillItem = (item: ISkillItem) => (
    <div className="skill" key={item.title}>
        <div className="skill-title">{item.title}</div>
        <div className="progress">
            <div className="indicator" style={{width: `${item.rate}%`}}/>
        </div>
    </div>
);