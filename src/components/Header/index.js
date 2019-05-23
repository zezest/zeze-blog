import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { ThemeManagerContext } from '../ThemeManager'
import More from '../More'

import { 
  Header, 
  LeftContent, Menus,
  RightContent, DarkModeLabel, ModeType } from './styled'
  
const HeaderComponent = () => {
  const [isDark, toggleDark] = useContext(ThemeManagerContext)

  return (
    <Header>
      <LeftContent>
        <More />

        <Link to="/">
          {/* 10 : 3 */}
          <svg width="80" height="24" viewBox="0 0 100 30">
            <path d="M45.975 0.5H26.5C25.9477 0.5 25.5 0.947715 25.5 1.5V28.5C25.5 29.0523 25.9477 29.5 26.5 29.5H46.5C47.0523 29.5 47.5 29.0523 47.5 28.5V24.8081C47.5 24.2558 47.0523 23.8081 46.5 23.8081H32.1962L32.1963 17.3162H43.875C44.4273 17.3162 44.875 16.8685 44.875 16.3162V12.9545C44.875 12.4023 44.4273 11.9545 43.875 11.9545H32.1962L32.1963 5.95455H45.975C46.5273 5.95455 46.975 5.50683 46.975 4.95455V1.5C46.975 0.947714 46.5273 0.5 45.975 0.5Z" />
            <path d="M12.794 6.61784L0.710844 25.1603C0.70759 25.1653 0.704237 25.1705 0.700803 25.1757C0.663062 25.2334 0.615522 25.306 0.580611 25.3876C0.550288 25.4585 0.528262 25.5326 0.514972 25.6086C0.499671 25.696 0.499841 25.7828 0.499976 25.8517C0.499988 25.858 0.5 25.8641 0.5 25.8701V28.2L0.499999 28.2159C0.499984 28.3421 0.499969 28.465 0.508473 28.5691C0.517811 28.6834 0.539845 28.8183 0.608993 28.954C0.704867 29.1422 0.857847 29.2951 1.04601 29.391C1.18172 29.4602 1.31659 29.4822 1.43088 29.4915C1.53496 29.5 1.65785 29.5 1.78404 29.5H1.8H20.2H20.216C20.3421 29.5 20.465 29.5 20.5691 29.4915C20.6834 29.4822 20.8183 29.4602 20.954 29.391C21.1422 29.2951 21.2951 29.1422 21.391 28.954C21.4602 28.8183 21.4822 28.6834 21.4915 28.5691C21.5 28.465 21.5 28.3421 21.5 28.216V28.2V25.1081V25.0922C21.5 24.966 21.5 24.8431 21.4915 24.739C21.4822 24.6247 21.4602 24.4898 21.391 24.3541C21.2951 24.166 21.1422 24.013 20.954 23.9171C20.8183 23.848 20.6834 23.8259 20.5691 23.8166C20.465 23.8081 20.3421 23.8081 20.216 23.8081H20.2H9.34177C9.09201 23.8081 8.93943 23.8076 8.8311 23.7977C8.8242 23.797 8.8178 23.7964 8.81188 23.7957C8.81455 23.7904 8.81749 23.7847 8.82072 23.7786C8.87142 23.6823 8.95413 23.5541 9.09021 23.3447L21.1392 4.80095C21.1424 4.79596 21.1457 4.79084 21.1492 4.7856C21.1867 4.72801 21.2341 4.65549 21.2688 4.57405C21.299 4.50331 21.3209 4.42932 21.3342 4.35356C21.3494 4.26633 21.3492 4.17972 21.3491 4.11096C21.3491 4.10471 21.3491 4.0986 21.3491 4.09265V1.8V1.78404C21.3491 1.65785 21.3491 1.53496 21.3406 1.43089C21.3312 1.31659 21.3092 1.18172 21.2401 1.04601C21.1442 0.857847 20.9912 0.704867 20.803 0.608993C20.6673 0.539845 20.5325 0.517811 20.4182 0.508473C20.3141 0.499969 20.1912 0.499984 20.065 0.499999L20.0491 0.5H3.04528C3.03996 0.5 3.03465 0.499999 3.02933 0.499999C2.90314 0.499984 2.78025 0.499969 2.67617 0.508473C2.56187 0.517811 2.427 0.539845 2.29129 0.608993C2.10313 0.704867 1.95015 0.857847 1.85428 1.04601C1.78513 1.18172 1.76309 1.31659 1.75376 1.43089C1.74525 1.53496 1.74527 1.65786 1.74528 1.78405C1.74528 1.78936 1.74528 1.79468 1.74528 1.8V4.85405L1.74528 4.87C1.74527 4.99619 1.74525 5.11909 1.75376 5.22317C1.76309 5.33746 1.78513 5.47233 1.85428 5.60804C1.95015 5.7962 2.10313 5.94919 2.29129 6.04506C2.427 6.11421 2.56187 6.13624 2.67617 6.14558C2.78025 6.15408 2.90315 6.15407 3.02934 6.15405L3.04528 6.15405H12.5427C12.7928 6.15405 12.9456 6.15456 13.0541 6.1645C13.061 6.16514 13.0674 6.16579 13.0734 6.16645C13.0707 6.17178 13.0677 6.17751 13.0645 6.18366C13.0136 6.28 12.9306 6.40831 12.794 6.61784Z" />
            <path d="M98 0.5H79.5C78.9477 0.5 78.5 0.947715 78.5 1.5V28.5C78.5 29.0523 78.9477 29.5 79.5 29.5H98.5C99.0523 29.5 99.5 29.0523 99.5 28.5V24.8081C99.5 24.2558 99.0523 23.8081 98.5 23.8081H84.925L84.925 17.3162H96C96.5523 17.3162 97 16.8685 97 16.3162V12.9545C97 12.4023 96.5523 11.9545 96 11.9545H84.925L84.925 5.95455H98C98.5523 5.95455 99 5.50683 99 4.95455V1.5C99 0.947715 98.5523 0.5 98 0.5Z" />
            <path d="M63.794 6.61784L51.7108 25.1603C51.7076 25.1653 51.7042 25.1705 51.7008 25.1757C51.6631 25.2334 51.6155 25.306 51.5806 25.3876C51.5503 25.4585 51.5283 25.5326 51.515 25.6086C51.4997 25.696 51.4998 25.7828 51.5 25.8517C51.5 25.858 51.5 25.8641 51.5 25.8701V28.2L51.5 28.2159C51.5 28.3421 51.5 28.465 51.5085 28.5691C51.5178 28.6834 51.5398 28.8183 51.609 28.954C51.7049 29.1422 51.8578 29.2951 52.046 29.391C52.1817 29.4602 52.3166 29.4822 52.4309 29.4915C52.535 29.5 52.6579 29.5 52.784 29.5H52.8H71.2H71.216C71.3421 29.5 71.465 29.5 71.5691 29.4915C71.6834 29.4822 71.8183 29.4602 71.954 29.391C72.1422 29.2951 72.2951 29.1422 72.391 28.954C72.4602 28.8183 72.4822 28.6834 72.4915 28.5691C72.5 28.465 72.5 28.3421 72.5 28.216V28.2V25.1081V25.0922C72.5 24.966 72.5 24.8431 72.4915 24.739C72.4822 24.6247 72.4602 24.4898 72.391 24.3541C72.2951 24.166 72.1422 24.013 71.954 23.9171C71.8183 23.848 71.6834 23.8259 71.5691 23.8166C71.465 23.8081 71.3421 23.8081 71.216 23.8081H71.2H60.3418C60.092 23.8081 59.9394 23.8076 59.8311 23.7977C59.8242 23.797 59.8178 23.7964 59.8119 23.7957C59.8146 23.7904 59.8175 23.7847 59.8207 23.7786C59.8714 23.6823 59.9541 23.5541 60.0902 23.3447L72.1392 4.80095C72.1424 4.79596 72.1457 4.79084 72.1492 4.7856C72.1867 4.72801 72.2341 4.65549 72.2688 4.57405C72.299 4.50331 72.3209 4.42932 72.3342 4.35356C72.3494 4.26633 72.3492 4.17972 72.3491 4.11096C72.3491 4.10471 72.3491 4.0986 72.3491 4.09265V1.8V1.78404C72.3491 1.65785 72.3491 1.53496 72.3406 1.43089C72.3312 1.31659 72.3092 1.18172 72.2401 1.04601C72.1442 0.857847 71.9912 0.704867 71.803 0.608993C71.6673 0.539845 71.5325 0.517811 71.4182 0.508473C71.3141 0.499969 71.1912 0.499984 71.065 0.499999L71.0491 0.5H54.0453C54.04 0.5 54.0346 0.499999 54.0293 0.499999C53.9031 0.499984 53.7802 0.499969 53.6762 0.508473C53.5619 0.517811 53.427 0.539845 53.2913 0.608993C53.1031 0.704867 52.9502 0.857847 52.8543 1.04601C52.7851 1.18172 52.7631 1.31659 52.7538 1.43089C52.7453 1.53496 52.7453 1.65786 52.7453 1.78405C52.7453 1.78936 52.7453 1.79468 52.7453 1.8V4.85405L52.7453 4.87C52.7453 4.99619 52.7453 5.11909 52.7538 5.22317C52.7631 5.33746 52.7851 5.47233 52.8543 5.60804C52.9502 5.7962 53.1031 5.94919 53.2913 6.04506C53.427 6.11421 53.5619 6.13624 53.6762 6.14558C53.7802 6.15408 53.9031 6.15407 54.0293 6.15405L54.0453 6.15405H63.5427C63.7928 6.15405 63.9456 6.15456 64.0541 6.1645C64.061 6.16514 64.0674 6.16579 64.0734 6.16645C64.0707 6.17178 64.0677 6.17751 64.0645 6.18366C64.0136 6.28 63.9306 6.40831 63.794 6.61784Z" />
          </svg>
        </Link>
  
        <Menus>
          <li>
            <Link to="/devlog/all.html">devlog</Link>
          </li>
        </Menus>
      </LeftContent>

      <RightContent>
        <p>{isDark ? 'dark mode' : 'light mode'}</p>
        <DarkModeLabel>
          <input type="checkbox" 
            checked={isDark}
            onChange={() => toggleDark()} />
          <ModeType isDark={isDark}>
            <div />
          </ModeType>
        </DarkModeLabel>
      </RightContent>
    </Header>
  )
}

export default HeaderComponent