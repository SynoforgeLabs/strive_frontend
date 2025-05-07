import React from 'react';
import "../../css/interview/interview-w-days.css";

function InterviewWdays() {
    return (
        <>
            <section className="row container-fluid section d-flex g-0 z-index-0 interview-w-days-main" id="interview-w-days">
                <div className="row col-9 d-flex interview-w-days-sec">
                    <h1 className="interview-w-days-heading">Interview with Days</h1>

                    <div className="interview-w-days-grid-main col-8">
                        <table className="interview-w-days-table">
                            <thead>
                                <tr>
                                    <th className="interview-w-days-th">Workshop Name</th>
                                    <th className="interview-w-days-th">Date</th>
                                    <th className="interview-w-days-th">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="interview-w-days-td">Interview 1</td>
                                    <td className="interview-w-days-td">Augest 31st Saturday</td>   
                                    <td className="interview-w-days-td">10:00 AM</td>   
                                </tr>
                                <tr>
                                    <td className="interview-w-days-td">Interview 1</td>
                                    <td className="interview-w-days-td">Augest 31st Saturday</td>   
                                    <td className="interview-w-days-td">10:00 AM</td>   
                                </tr>
                                <tr>
                                    <td className="interview-w-days-td">Interview 1</td>
                                    <td className="interview-w-days-td">Augest 31st Saturday</td>   
                                    <td className="interview-w-days-td">10:00 AM</td>   
                                </tr>
                                <tr>
                                    <td className="interview-w-days-td">Interview 1</td>
                                    <td className="interview-w-days-td">Augest 31st Saturday</td>   
                                    <td className="interview-w-days-td">10:00 AM</td>   
                                </tr>
                                <tr>
                                    <td className="interview-w-days-td">Interview 1</td>
                                    <td className="interview-w-days-td">Augest 31st Saturday</td>   
                                    <td className="interview-w-days-td">10:00 AM</td>   
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </>
    );
}

export default InterviewWdays;
