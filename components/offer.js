import React from 'react'

import PropTypes from 'prop-types'

const Offer = (props) => {
  return (
    <>
      <div className="offer-offer">
        <img alt="image" src={props.Image} className="offer-image" />
        <div className="offer-content">
          <div className="offer-details">
            <span className="offer-text">{props.Location}</span>
            <span className="offer-text1">{props.Guides}</span>
          </div>
          <span className="offer-text2">{props.Description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .offer-offer {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .offer-image {
            object-fit: cover;
          }
          .offer-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-direction: column;
          }
          .offer-details {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .offer-text {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .offer-text1 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .offer-text2 {
            max-width: 400px;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .offer-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Offer.defaultProps = {
  Image: 'f8ae1ece-a597-4603-a6d6-066768a42c4c',
  Guides: '3 Local guides',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  Location: 'Crete, Greece',
}

Offer.propTypes = {
  Image: PropTypes.string,
  Guides: PropTypes.string,
  Description: PropTypes.string,
  Location: PropTypes.string,
}

export default Offer
