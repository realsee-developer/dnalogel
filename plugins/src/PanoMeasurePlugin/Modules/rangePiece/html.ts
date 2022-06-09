
export default `
  <style>
  .range-piece__container {
    position: absolute;
    top: 39%;
    left: 50%;
    margin-left: -54px;
    width: 108px;
    height: 108px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: pieceContainer 0.3s ease-in-out;
    animation-fill-mode: forwards;
  }
  .range-piece__content {
    width: 100%;
    height: 100%;
    background-image: url('//vrlab-static.ljcdn.com/release/web/piece.d7228ab9.png');
    opacity: 0.4;
    background-size: 100%;
    background-repeat: no-repeat;
    transition: linear transform 0.1s;
  }
  .range-piece__content--active {
    animation: dotting ease-in-out 0.5s;
  }
  .range-piece__aim {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    opacity: 0;
    position: absolute;
  }
  @keyframes dotting {
    0% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(0.8);
    }
    100% {
      opacity: 0.4;
      transform: scale(1);
    }
  }
  @keyframes pieceContainer {
    from {
      top: 49%;
    }
    to {
      top: 39%;
    }
  }
  </style>
  <div class="range-piece__container">
    <div class='range-piece__content'></div>
    <div class="range-piece__aim"></div>
  </div>
`
