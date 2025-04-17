import React from 'react';
import '../../css/b-friend/b-friend-hdiw.css';

const BFriendHdiw = () => {
    return (
        <section className="row container-fluid section d-flex g-0 z-index-0 b-friend-hdiw-main" id="b-friend-hdiw">
            <div className="row col-8 d-flex b-friend-hdiw-sec">
                <div className="container">
                    <h1 className="b-friend-hdiw-title text-center mb-5">How does it work?</h1>

                    <div className="b-friend-hdiw-steps">
                        {/* Step 1 */}
                        <div className="b-friend-hdiw-step d-flex align-items-center mb-5">
                            <div className="b-friend-hdiw-number fw-bold me-4">1</div>
                            <div className="b-friend-hdiw-content">
                                <h3 className="b-friend-hdiw-step-title">
                                    Find a Tutor Reach out to a suitable tutor to request tutoring. We have limited spots available,- lock it in early!
                                </h3>
                            </div>
                            <div className="b-friend-hdiw-img-container me-4">
                                <img
                                    src="/Images/bfas/1.png"
                                    alt="Find a Tutor"
                                    className="b-friend-hdiw-img"
                                />
                            </div>
                            
                        </div>

                        {/* Step 2 */}
                        <div className="b-friend-hdiw-step d-flex align-items-center mb-5">
                            <div className="b-friend-hdiw-img-container me-4">
                                <img
                                    src="/Images/bfas/2.png"
                                    alt="Confirm Friends"
                                    className="b-friend-hdiw-img"
                                />
                            </div>
                            <div className="b-friend-hdiw-content">
                                <h3 className="b-friend-hdiw-step-title">
                                    Confirm Friends Confirm that your friends would like to receive tutoring with you, and fill out this form.
                                </h3>
                            </div>
                            <div className="b-friend-hdiw-number fw-bold me-4">2</div>
                        </div>

                        {/* Step 3 */}
                        <div className="b-friend-hdiw-step d-flex align-items-center">
                            <div className="b-friend-hdiw-number fw-bold me-4">3</div>
                            <div className="b-friend-hdiw-content">
                                <h3 className="b-friend-hdiw-step-title">
                                    Free Consultation Have your free academic consultation together and then start sessions!
                                </h3>
                            </div>
                            <div className="b-friend-hdiw-img-container me-4">
                                <img
                                    src="/Images/bfas/3.png"
                                    alt="Free Consultation"
                                    className="b-friend-hdiw-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BFriendHdiw;
