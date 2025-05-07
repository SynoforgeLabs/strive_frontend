import React from 'react';
import '../../css/b-friend/b-friend-hero.css';

const BFriendHero = () => {
  return (
        <section className="row container-fluid section d-flex g-0 z-index-0 b-friend-hero-main" id="b-friend-hero">
        <div className="row col-9 d-flex b-friend-hero-sec">
            <div className="b-friend-hero-pattern"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <div className="b-friend-hero-content container-fluid text-end">
                            <h1 className="b-friend-hero-title display-5 fw-bold text-white mb-4">
                                Bring a Friend and Save!
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BFriendHero;