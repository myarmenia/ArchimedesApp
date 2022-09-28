import * as React from "react"
import Svg, { Rect } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={55}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect x={0.5} y={0.5} width={54} height={59} rx={14.5} fill="#F7F7F7" />
    <Rect x={0.5} y={0.5} width={54} height={59} rx={14.5} stroke="#F7F7F7" />
  </Svg>
)

export default SvgComponent
