import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgProps } from './svg-props';

// Stroked zig-zag upward arrow icon
export const TrendUpIcon = ({ width = 32, height = 32, fill = '#EDEBDF' }: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path d="M3 15.5l6.2-6.2 4.2 4.2 5.3-5.3" stroke={fill} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M22 8.2h-5.6V2.6" stroke={fill} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default TrendUpIcon;
