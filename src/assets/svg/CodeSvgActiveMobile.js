import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={250}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={55} height={60} rx={15} fill="#FF414C" fillOpacity={0.1} />
    <Path
      d="M32.716 37.368V39H23.5v-1.632h3.684V25.644c0-.352.012-.708.036-1.068l-3.06 2.628a.75.75 0 0 1-.312.168.869.869 0 0 1-.288 0 .746.746 0 0 1-.252-.096.637.637 0 0 1-.168-.156l-.672-.924 5.124-4.428h1.74v15.6h3.384Z"
      fill="#FF414C"
    />
    <Rect
      x={65}
      width={55}
      height={60}
      rx={15}
      fill="#FF414C"
      fillOpacity={0.1}
    />
    <Path
      d="M97.716 37.368V39H88.5v-1.632h3.684V25.644c0-.352.012-.708.036-1.068l-3.06 2.628a.75.75 0 0 1-.312.168.869.869 0 0 1-.288 0 .746.746 0 0 1-.252-.096.637.637 0 0 1-.168-.156l-.672-.924 5.124-4.428h1.74v15.6h3.384Z"
      fill="#FF414C"
    />
    <Rect
      x={130}
      width={55}
      height={60}
      rx={15}
      fill="#FF414C"
      fillOpacity={0.1}
    />
    <Path
      d="M162.716 37.368V39H153.5v-1.632h3.684V25.644c0-.352.012-.708.036-1.068l-3.06 2.628a.75.75 0 0 1-.312.168.869.869 0 0 1-.288 0 .746.746 0 0 1-.252-.096.637.637 0 0 1-.168-.156l-.672-.924 5.124-4.428h1.74v15.6h3.384Z"
      fill="#FF414C"
    />
    <Rect
      x={195}
      width={55}
      height={60}
      rx={15}
      fill="#FF414C"
      fillOpacity={0.1}
    />
    <Path
      d="M227.716 37.368V39H218.5v-1.632h3.684V25.644c0-.352.012-.708.036-1.068l-3.06 2.628a.75.75 0 0 1-.312.168.869.869 0 0 1-.288 0 .746.746 0 0 1-.252-.096.637.637 0 0 1-.168-.156l-.672-.924 5.124-4.428h1.74v15.6h3.384Z"
      fill="#FF414C"
    />
  </Svg>
)

export default SvgComponent
