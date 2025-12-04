import React from 'react';
import '../styles/style.css';

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="container">

                <div className="education-grid">
                    {/* Education Card 1 */}
                    <div className="education-card">
                        <div className="year">2022-2023</div>
                        <p>
                            First year Higher Secondary with a percentage of 87.9% in Rasi Matric Hr Sec School.
                        </p>
                    </div>

                    <div className="education-card">
                        <div className="year">2023-2024</div>
                        <p>
                            Second year Higher Secondary with a percentage of 89.9% in Rasi Matric Hr Sec School.
                        </p>
                    </div>

                    {/* Education Card 2 */}
                    <div className="education-card">
                        <div className="year">2024-2027</div>
                        <p>
                            Pursuing my second year of Computer Science and Engineering at K.S.R. College of Engineering, Tiruchengode (2024–2027).
                        </p>
                        <p>Sem 1 CGPA: 8.4/10</p>
                        <p>Sem 2 CGPA: 8.6/10</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
