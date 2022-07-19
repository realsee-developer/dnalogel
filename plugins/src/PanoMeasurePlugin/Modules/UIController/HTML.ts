import { endIconImage, startIconImage } from "./mobileHTML"

const revokeSvg = `
  <svg class="fpm__revoke-icon" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="47.631%" y1="55.183%" x2="2.967%" y2="86.323%" id="fpm__revoke-a">
        <stop stop-color="#FFF" offset="0%" />
        <stop stop-color="#FFF" stop-opacity=".5" offset="100%" />
      </linearGradient>
      <linearGradient x1="5.297%" y1="43.016%" x2="38.238%" y2="79.932%" id="fpm__revoke-b">
        <stop stop-color="#FFF" offset="0%" />
        <stop stop-color="#FFF" stop-opacity="0" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M13.388 7.108c.552 0 1.005.42 1.06.957l.006.11v1.224c0 .921.745 1.667 1.666 1.667h7.184c5.804 0 10.509 4.616 10.509 10.309 0 5.595-4.544 10.15-10.21 10.305l-.3.004H8.924c-.917 0-1.66-.729-1.66-1.628 0-.846.658-1.541 1.5-1.62l.16-.008h14.38c3.972 0 7.191-3.158 7.191-7.053 0-3.81-3.08-6.916-6.933-7.049l-.257-.004H10.029l-.109-.005H8.212c-.245 0-.482-.085-.67-.237l-.09-.082a1.066 1.066 0 0 1-.065-1.422l.079-.086 5.175-5.077c.2-.195.468-.305.747-.305z"
      fill="url(#fpm__revoke-a)"
      fill-rule="nonzero"
      stroke="url(#fpm__revoke-b)"
      stroke-width=".5"
    />
  </svg>
`
const exitSvg = `
  <svg class="fpm__exit-icon width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="36.288%" y1="73.736%" x2="54.242%" y2="97.166%" id="fpm__exit-a">
        <stop stop-color="#FFF" offset="0%" />
        <stop stop-color="#FFF" stop-opacity=".5" offset="100%" />
      </linearGradient>
      <linearGradient x1="100%" y1="47.234%" x2="24.047%" y2="47.234%" id="fpm__exit-b">
        <stop stop-color="#FFF" offset="0%" />
        <stop stop-color="#FFF" stop-opacity=".005" offset="99.535%" />
        <stop stop-color="#FFF" stop-opacity="0" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M22 7a1.5 1.5 0 0 1 .144 2.993L22 10h-9a1.5 1.5 0 0 0-1.493 1.356l-.007.144v17a1.5 1.5 0 0 0 1.356 1.493L13 30h9a1.5 1.5 0 0 1 .144 2.993L22 33h-9a4.5 4.5 0 0 1-4.495-4.288L8.5 28.5v-17a4.5 4.5 0 0 1 4.288-4.495L13 7h9zm6.317 7.755a1 1 0 0 1 .7.286l4.856 4.764a1 1 0 0 1-.7 1.713h-5.856V21.5h-8.032a1.5 1.5 0 1 1 0-3h6.365c.92 0 1.666-.746 1.667-1.667v-1.078a1 1 0 0 1 1-1z"
      fill="url(#fpm__exit-a)"
      fill-rule="nonzero"
      stroke="url(#fpm__exit-b)"
      stroke-width=".5"
    />
  </svg>
`

export default `
  <style>
    .fpm__other-btn {
      height: 40px;
      width: 88px;
      background: rgba(0, 0, 0, 0.15);
      border-radius: 20px;
      overflow: hidden;    
    }

    .fpm__other-content {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .fpm__revoke {
      opacity: 0.3;
    }  
    .fpm__revoke.enabled {
      opacity: 0.85;
    }    
    .fpm__revoke.enabled:hover {
      opacity: 1;
    }
    
    .fpm__revoke-icon {
      width: 24px;
      height: 24px;
      margin-right: 4px;
      cursor: pointer;
    }
    
    .fpm__main-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .fpm__main-btn-text {
      position: absolute;
      font-weight: 500;
      font-size: 14px;
      color: #FFFFFF;
      text-align: center;
      text-shadow: 0 2px 8px rgba(0,0,0,0.50);
      transition: all 200ms ease-in-out;
    }
    .fpm__main-text__hide {
      transform: scale(0.8) translateY(4px);
      opacity: 0;
    }
    .fpm__main-text__show {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    .fpm__main__start {
      background-image: url(${startIconImage});
    }
    .fpm__main__end {
      background-image: url(${endIconImage});
    }
    
  </style>
  <div class="fpm_ui-bg"></div>
  <div class="fpm_operating-space">
    <div class="fpm__other-btn">
      <div class="fpm__other-content fpm__revoke">
        ${revokeSvg}
        <span class="fpm__text fpm__revoke-text">撤销</span>
      </div>
    </div>
    <div class="fpm__main fpm__main-btn">
      <div class="fpm__main-icon fpm__main__start"></div>
      <div class="fpm__main-text fpm__main-btn-text">开始</div>
    </div>
    <div class="fpm__other-btn">
      <div class="fpm__other-content fpm__exit">
        ${exitSvg}
        <span class="fpm__text fpm__exit-text">退出</span>
      </div>
    </div>
  </div>
`
