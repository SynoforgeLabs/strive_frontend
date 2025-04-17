import '../../css/home/home-price-grid.css'
import { useLocation } from 'react-router-dom';

function Pricegrid() {
  const location = useLocation();
  const isBringAFriendPage = location.pathname.includes('bring-a-friend-and-save');

  return (
    <section
      className="container-fluid section d-flex g-0 z-index-0"
      id="home-pricing-plans"
    >
      {!isBringAFriendPage && (
        <>
          <h1 className="col-8 d-flex fw-bold pricing-plans-main-h">
            Pricing Plans
          </h1>
          <span className="row col-6 d-flex pricing-plans-sub-h">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </span>
        </>
      )}

      <div className="row col-8 d-grid home-price-grid">
        <div className="grid-empty"></div>
        <div className="d-flex p-3 price-grid-heading-main" id="gold-plan">
          <h1 className="fw-bold plan-type" id="plan-t-gold">
            Gold
          </h1>
          <span className="plan-des">
            Tailored Sessions
          </span>
          <button className="btn btn-primary mt-4 p-3 fw-bold plan-gs-btn" id="plan-gs-gold-btn">
            Get started
          </button>
        </div>
        <div className="d-flex p-3 price-grid-heading-main" id="platinum-plan">
          <h1 className="fw-bold plan-type" id="plan-t-platinum">
            Platinum
          </h1>
          <span className="plan-des">
            Tailored Sessions
          </span>
          <button className="btn btn-primary mt-4 p-3 fw-bold plan-gs-btn" id="plan-gs-platinum-btn">
            Get started
          </button>
        </div>
        <div className="d-flex p-3 price-grid-heading-main" id="executive-plan">
          <h1 className="fw-bold plan-type" id="plan-t-executive">
            Executive
          </h1>
          <span className="plan-des">
            Tailored Sessions
          </span>
          <button className="btn btn-primary mt-4 p-3 fw-bold plan-gs-btn" id="plan-gs-executive-btn">
            Get started
          </button>
        </div>
        <div className="d-flex grid-row-start-main">
          <h1 className="fw-bold grid-row-main-h">
            Private Tutoring
          </h1>
          <span className="grid-row-sub-h">
            1 student per class, full price
          </span>
        </div>
        <div className="d-flex grid-row-prices" id="gold-plan">
          <h1 className="grid-row-price private-tut-price" id="grid-gold-price">
            $60
          </h1>
          <span className="grid-row-p-des" id="grid-gold-price-des">
            Per student per hour
          </span>
        </div>
        <div className="d-flex grid-row-prices" id="platinum-plan">
          <h1 className="grid-row-price private-tut-price" id="grid-platinum-price">
            $80
          </h1>
          <span className="grid-row-p-des" id="grid-platinum-price-des">
            Per student per hour
          </span>
        </div>
        <div className="d-flex grid-row-prices" id="executive-plan">
          <h1 className="grid-row-price private-tut-price" id="grid-executive-price">
            $120
          </h1>
          <span className="grid-row-p-des" id="grid-executive-price-des">
            Per student per hour
          </span>
        </div>
        <div className="d-flex grid-row-start-main">
          <h1 className="fw-bold grid-row-main-h">
            Bring 1 Friend
          </h1>
          <span className="grid-row-sub-h">
            2 Student per class, full price
          </span>
        </div>
        <div className="d-flex grid-row-prices" id="gold-plan">
          <h1 className="grid-row-price" id="grid-gold-price">
            $52.5
          </h1>
          <span className="grid-row-p-des" id="grid-gold-price-des">
            Per student per hour
          </span>
        </div>
        <div className="d-flex grid-row-prices" id="platinum-plan">
          <h1 className="grid-row-price" id="grid-platinum-price">
            $70
          </h1>
          <span className="grid-row-p-des" id="grid-platinum-price-des">
            Per student per hour
          </span>
        </div>
        <div className="d-flex grid-row-prices" id="executive-plan">
          <h1 className="grid-row-price" id="grid-executive-price">
            $105
          </h1>
          <span className="grid-row-p-des" id="grid-executive-price-des">
            Per student per hour
          </span>
        </div>
        <div className="d-flex grid-row-start-main">
          <h1 className="fw-bold grid-row-main-h">
            Bring 2 Friends
          </h1>
          <span className="grid-row-sub-h">
            3 Student per class, full price
          </span>
        </div>
        <div className="d-flex grid-row-prices" id="gold-plan">
          <h1 className="grid-row-price" id="grid-gold-price">
            $45
          </h1>
          <span className="grid-row-p-des" id="grid-gold-price-des">
            Per student per hour
          </span>
        </div>
        <div className="d-flex grid-row-prices" id="platinum-plan">
          <h1 className="grid-row-price" id="grid-platinum-price">
            $60
          </h1>
          <span className="grid-row-p-des" id="grid-platinum-price-des">
            Per student per hour
          </span>
        </div>
        <div className="d-flex grid-row-prices" id="executive-plan">
          <h1 className="grid-row-price" id="grid-executive-price">
            $90
          </h1>
          <span className="grid-row-p-des" id="grid-executive-price-des">
            Per student per hour
          </span>
        </div>
        <div className="d-flex grid-row-start-main">
          <h1 className="fw-bold grid-row-main-h">
            Bring 3 Friends
          </h1>
          <span className="grid-row-sub-h">
            4 Student per class, full price
          </span>
        </div>
        <div className="d-flex grid-row-prices grid-bottom" id="gold-plan">
          <h1 className="grid-row-price" id="grid-gold-price">
            $37.5
          </h1>
          <span className="grid-row-p-des" id="grid-gold-price-des">
            Per student per hour
          </span>
        </div>
        <div className="d-flex grid-row-prices grid-bottom" id="platinum-plan">
          <h1 className="grid-row-price" id="grid-platinum-price">
            $50
          </h1>
          <span className="grid-row-p-des" id="grid-platinum-price-des">
            Per student per hour
          </span>
        </div>
        <div className="d-flex grid-row-prices grid-bottom" id="executive-plan">
          <h1 className="grid-row-price" id="grid-executive-price">
            $75
          </h1>
          <span className="grid-row-p-des" id="grid-executive-price-des">
            Per student per hour
          </span>
        </div>
      </div>
    </section>
  );
}

export default Pricegrid;