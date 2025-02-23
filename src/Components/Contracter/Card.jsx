import React from "react";
import styled from "styled-components";

const Card = ({imageSrc, title, subtitle}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__img">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="card__subtitle">{subtitle}</div>
        <div className="card__wrapper">
          <div className="card__title">{title}</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --main-color: #323232;
    --sub-color: #5b5b5b;
    --bg-color: #c7c7c7;
    --accent-color: #242c88;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    width: 270px;
    padding: 25px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: var(--bg-color);
    transition: all 0.2s;
    cursor: pointer;
    box-shadow: 0px 0px 5px -1.5px #000;
  }

  .card__img img {
    width: 100%;
    border-radius: 10px;
  }

  .card__title {
    color: var(--main-color);
    font-weight: 900;
    font-size: 25px;
  }

  .card__subtitle {
    color: var(--sub-color);
    font-weight: 600;
    font-size: 20px;
  }
`;

export default Card;
