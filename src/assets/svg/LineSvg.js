import * as React from "react"
import Svg, { Rect } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={134}
    height={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={134} height={5} rx={2.5} fill="#1C1C1E" />
  </Svg>
)

export default SvgComponent
