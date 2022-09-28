import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.765 9.173a9.052 9.052 0 0 0 3.288 2.13l1.676-1.334a.298.298 0 0 1 .338 0l3.11 2.004a.888.888 0 0 1 .148 1.414l-1.458 1.44a1.777 1.777 0 0 1-1.614.475 15.595 15.595 0 0 1-7.622-4 15.018 15.018 0 0 1-4.12-7.48 1.68 1.68 0 0 1 .49-1.578L2.51.787a.889.889 0 0 1 1.387.142L5.969 4a.28.28 0 0 1 0 .333l-1.364 1.64a8.778 8.778 0 0 0 2.16 3.2Z"
      fill="#fff"
    />
  </Svg>
)

export default SvgComponent
