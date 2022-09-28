import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={157}
    height={107}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M55.012 70.389c-.849.115-1.754.231-2.66.231-9.282 0-16.809-7.692-16.809-17.178 0-9.485 7.527-17.178 16.81-17.178.905 0 1.81.058 2.716.232C59.144 24.06 67.577 13.65 78.557 7.172 70.803 2.602 61.86 0 52.352 0 23.432 0 0 23.945 0 53.5S23.431 107 52.352 107c9.509 0 18.45-2.603 26.148-7.172-10.98-6.478-19.413-16.946-23.488-29.44Z"
      fill="#FF414C"
    />
    <Path
      d="M100.517 74.437c-9.452-1.966-16.583-10.526-16.583-20.764 0-10.295 7.188-18.855 16.696-20.763C96.215 22.094 88.348 13.014 78.5 7.23c-10.923 6.478-19.412 16.888-23.487 29.323 7.98 1.33 14.092 8.387 14.092 16.947 0 8.56-6.112 15.674-14.149 16.947 4.075 12.492 12.508 22.903 23.488 29.439 9.848-5.842 17.602-14.749 22.073-25.449Z"
      fill="#262626"
    />
    <Path
      d="M104.648 67.844c-.623 0-1.245-.058-1.868-.116-6.848-.925-12.168-6.94-12.168-14.228 0-7.288 5.32-13.303 12.168-14.228.623-.058 1.245-.116 1.868-.116 7.754 0 14.036 6.42 14.036 14.344.057 7.924-6.282 14.344-14.036 14.344Zm0-67.844A51.064 51.064 0 0 0 78.5 7.172a53.4 53.4 0 0 1 22.129 25.68C91.121 34.76 83.933 43.32 83.933 53.616c0 10.237 7.132 18.797 16.583 20.763-4.47 10.7-12.225 19.608-22.016 25.391a51.068 51.068 0 0 0 26.148 7.172c28.921 0 52.352-23.945 52.352-53.5C157 23.945 133.569 0 104.648 0Z"
      fill="#9DC458"
    />
  </Svg>
)

export default SvgComponent