import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .container {
    height: 100%;
  }
  .hero__wrapper {
    width: 100%;
    height: 100%;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      // background: linear-gradient(135deg, #030213, #08011c);
      z-index: -1;
    }
    .left {
      width: 50%;
      padding: 50px 0;
      margin-left: 8rem;
      .hero__heading {
        max-width: 450px;
        font-size: 4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: '700';
        margin: 0.2rem 0;
      }
      .hero__heading {
        color: var(--grey);
      }
      .hero__text {
        max-width: 350px;
      }
      .hero__button {
        margin-top: 1.5rem;
      }
    }
    .right {
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 100%;
      .hero__image {
        margin-top: 3rem;
        width: 70%;
        height: 100%;
      }
    }
  }

  @media only screen and (max-width: 1230px) {
    .hero__wrapper {
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column-reverse;
      padding-top: 2rem;
      padding-bottom: 2rem;
      &::after {
        width: 100%;
      }
      .right {
        position: initial;
        display: flex;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 100%;
        .hero__image {
          width: 90%;
          height: 90%;
          margin-top: 4rem;
        }
      }
      .left {
        width: 100%;
        margin-top: 1rem;
        padding: 0;
        .hero__heading {
          max-width: 330px;
          font-size: 3rem;
        }
      }
    }
  }
`;
