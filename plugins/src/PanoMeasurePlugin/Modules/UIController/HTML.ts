export const MAIN_NORMAL_PATH =
  'M31.379 15.466a1.045 1.045 0 0 1-.92 1.076l-11.276.607a1.6 1.6 0 0 0-1.512 1.511l-.599 11.113a1.045 1.045 0 0 1-.92 1.075l-.164.008a1.183 1.183 0 0 1-1.123-.975l-.016-.164-.221-10.768a1.6 1.6 0 0 0-1.567-1.567l-11.3-.231-.165-.016a1.187 1.187 0 0 1-.964-.996l-.01-.127.007-.164c.061-.496.455-.876.958-.917l.118-.003 11.112-.599a1.6 1.6 0 0 0 1.498-1.37l.014-.142.607-11.276a1.045 1.045 0 0 1 1.076-.92c.573.015 1.055.46 1.13 1.019l.009.121.221 10.766a1.6 1.6 0 0 0 1.567 1.566l11.3.234a1.181 1.181 0 0 1 1.14 1.139z'
export const MAIN_DONE_PATH =
  'M27.1772552,8.15828895 C27.8664561,7.48070421 28.5574369,7.81156875 28.8336646,8.04968716 C29.1098924,8.28780557 29.3990219,9.110014 28.8256559,9.79263351 L28.7110903,9.9165024 L13.9697229,25.1399531 C13.3288458,25.7700285 12.3239388,25.8070917 11.6402346,25.2511429 L11.5159715,25.1399531 L3.7056151,18.0063788 C3.01641417,17.3287941 3.00699739,16.2207954 3.68458213,15.5315945 C4.32230894,14.8829348 5.3413021,14.8364368 6.03356826,15.3981178 L6.15936649,15.5105615 L12.6856594,21.9049888 L27.1772552,8.15828895 Z'
export const MAIN_MOUSE_ENTER_FILL = 'url(#fpm__main-b)'
export const MAIN_MOUSE_LEAVE_FILL = 'url(#fpm__main-c)'

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
const mainSvg = `
  <svg class="fpm__main-icon" width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <mask id="fpm__main-icon-mask">
        <rect id="fpm__main-icon-mask-black" x="0" y="0" width="30" height="30" fill="black"></rect>
        <rect id="fpm__main-icon-mask-white" x="0" y="0" width="0" height="30" fill="white"></rect>
      </mask>
      <linearGradient id="fpm__main-a" x1="25.371%" y1="0%" x2="109.587%" y2="172.268%">
        <stop stop-color="#FFF" offset="0%" />
        <stop stop-color="#FFF" stop-opacity=".77" offset="44.051%" />
        <stop stop-color="#FFF" stop-opacity=".201" offset="100%" />
      </linearGradient>
      <radialGradient id="fpm__main-b" fx="50%" fy="50%" r="50.864%" gradientTransform="matrix(-.98302 0 0 -1 .992 1)">
        <stop stop-color="#2D7CFF" offset="0%" />
        <stop stop-color="#2D7CFF" stop-opacity=".3" offset="100%" />
      </radialGradient>
      <radialGradient id="fpm__main-c" fx="50%" fy="50%" r="50.864%" gradientTransform="matrix(-.98302 0 0 -1 .992 1)">
        <stop stop-opacity=".4" offset="0%" />
        <stop stop-opacity=".12" offset="100%" />
      </radialGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <circle fill="url(#fpm__main-a)" cx="30" cy="30" r="30" />
      <path
        class="fpm__main-icon-path"
        d="${MAIN_NORMAL_PATH}"
        fill="${MAIN_MOUSE_LEAVE_FILL}"
        fill-rule="nonzero"
        transform="translate(14 14)"
      />
    </g>
  </svg>
`

export default `
  <style>
    .fpm__revoke {
      opacity: 0.3;
    }
    
    .fpm__revoke.enabled {
      opacity: 0.7;
    }
    
    .fpm__revoke.enabled:hover {
      opacity: 1;
    }
    
    .fpm__revoke-icon {
      width: 40px;
      height: 40px;
      margin-top: 10px;
      cursor: pointer;
    }  
  </style>
  <div class="fpm_ui-bg"></div>
  <div class="fpm_operating-space">
    <div class="fpm__ui-item fpm__revoke">
      ${revokeSvg}
      <span class="fpm__text fpm__revoke-text">撤销</span>
    </div>
    <div class="fpm__ui-item fpm__main">
      ${mainSvg}
      <span class="fpm__text fpm__main-text">添加</span>
    </div>
    <div class="fpm__ui-item fpm__exit">
      ${exitSvg}
      <span class="fpm__text fpm__exit-text">退出</span>
    </div>
  </div>
`
