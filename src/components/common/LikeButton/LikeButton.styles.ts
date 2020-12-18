import styled from "styled-components";

const LikeButton = styled.div`
  svg {
    cursor: pointer;
    overflow: visible;
    width: 60px;
    position: absolute;
    right: 60px;
  }

  svg #heart {
    transform-origin: center;
    animation: animateHeartOut 0.3s linear forwards;
  }

  svg #main-circ {
    transform-origin: 29.5px 29.5px;
  }

  .checkbox {
    display: none;
  }

  .checkbox:checked + label svg #heart {
    transform: scale(0.2);
    fill: #e2264d;
    animation: animateHeart 0.3s linear forwards 0.25s;
  }

  .checkbox:checked + label svg #main-circ {
    transition: all 2s;
    animation: animateCircle 0.3s linear forwards;
    opacity: 1;
  }

  .checkbox:checked + label svg #grp1 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }

  .checkbox:checked + label svg #grp1 #oval1 {
    transform: scale(0) translate(0, -30px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp1 #oval2 {
    transform: scale(0) translate(10px, -50px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp2 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }

  .checkbox:checked + label svg #grp2 #oval1 {
    transform: scale(0) translate(30px, -15px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp2 #oval2 {
    transform: scale(0) translate(60px, -15px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp3 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }

  .checkbox:checked + label svg #grp3 #oval1 {
    transform: scale(0) translate(30px, 0px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp3 #oval2 {
    transform: scale(0) translate(60px, 10px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp4 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }

  .checkbox:checked + label svg #grp4 #oval1 {
    transform: scale(0) translate(30px, 15px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp4 #oval2 {
    transform: scale(0) translate(40px, 50px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp5 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }

  .checkbox:checked + label svg #grp5 #oval1 {
    transform: scale(0) translate(-10px, 20px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp5 #oval2 {
    transform: scale(0) translate(-60px, 30px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp6 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }

  .checkbox:checked + label svg #grp6 #oval1 {
    transform: scale(0) translate(-30px, 0px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp6 #oval2 {
    transform: scale(0) translate(-60px, -5px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp7 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }

  .checkbox:checked + label svg #grp7 #oval1 {
    transform: scale(0) translate(-30px, -15px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp7 #oval2 {
    transform: scale(0) translate(-55px, -30px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }

  .checkbox:checked + label svg #grp2 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }

  .checkbox:checked + label svg #grp3 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }

  .checkbox:checked + label svg #grp4 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }

  .checkbox:checked + label svg #grp5 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }

  .checkbox:checked + label svg #grp6 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }

  .checkbox:checked + label svg #grp7 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }

  @keyframes animateCircle {
    40% {
      transform: scale(10);
      opacity: 1;
      fill: #dd4688;
    }
    55% {
      transform: scale(11);
      opacity: 1;
      fill: #d46abf;
    }
    65% {
      transform: scale(12);
      opacity: 1;
      fill: #cc8ef5;
    }
    75% {
      transform: scale(13);
      opacity: 1;
      fill: transparent;
      stroke: #cc8ef5;
      stroke-width: 0.5;
    }
    85% {
      transform: scale(17);
      opacity: 1;
      fill: transparent;
      stroke: #cc8ef5;
      stroke-width: 0.2;
    }
    95% {
      transform: scale(18);
      opacity: 1;
      fill: transparent;
      stroke: #cc8ef5;
      stroke-width: 0.1;
    }
    100% {
      transform: scale(19);
      opacity: 1;
      fill: transparent;
      stroke: #cc8ef5;
      stroke-width: 0;
    }
  }

  @keyframes animateHeart {
    0% {
      transform: scale(0.2);
    }
    40% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes animateHeartOut {
    0% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default LikeButton;
