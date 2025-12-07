import React from 'react';
import '../styles/style.css';
import '../styles/education.css';


const educationData = [
    {
        id: 'edu1',
        year: '2022-2023',
        title: 'Higher Secondary - First Year',
        institution: 'Rasi Matric Hr Sec School',
        achievement: '87.9%',
        description: 'First year Higher Secondary with a percentage of 87.9% in Rasi Matric Hr Sec School.'
    },
    {
        id: 'edu2',
        year: '2023-2024',
        title: 'Higher Secondary - Second Year',
        institution: 'Rasi Matric Hr Sec School',
        achievement: '89.9%',
        description: 'Second year Higher Secondary with a percentage of 89.9% in Rasi Matric Hr Sec School.'
    },
    {
        id: 'edu3',
        year: '2024-2027',
        title: 'Computer Science & Engineering',
        institution: 'K.S.R. College of Engineering, Tiruchengode',
        achievement: 'CGPA: 8.5/10',
        description: 'Pursuing my second year of Computer Science and Engineering at K.S.R. College of Engineering, Tiruchengode (2024–2027).',
        details: ['Sem 1 CGPA: 8.4/10', 'Sem 2 CGPA: 8.6/10']
    },
    {
        id: 'edu4',
        year: 'Certifications',
        title: 'Professional Qualifications',
        achievement: '3+ Certifications',
        qualifications: [
            'Certified in Full Stack Development',
            'Proficient in React, Node.js, and Python',
            'Completed Data Structures and Algorithms course'
        ]
    }
];

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="container">
                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <div
                            key={edu.id}
                            className="education-card"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="education-badge">
                                <span className="badge-icon">🎓</span>
                                <span className="badge-text">{edu.achievement}</span>
                            </div>
                            <div className="education-content">
                                <div className="education-year">{edu.year}</div>
                                <h3 className="education-title">{edu.title}</h3>
                                {edu.institution && (
                                    <p className="education-institution">{edu.institution}</p>
                                )}
                                <p className="education-description">{edu.description}</p>
                                {edu.details && (
                                    <div className="education-details">
                                        {edu.details.map((detail, idx) => (
                                            <p key={idx} className="detail-item">{detail}</p>
                                        ))}
                                    </div>
                                )}
                                {edu.qualifications && (
                                    <ul className="education-qualifications">
                                        {edu.qualifications.map((qual, idx) => (
                                            <li key={idx}>{qual}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
