import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgProps } from './svg-props';

// Folded map outline
export const MapFoldIcon = ({ width = 28, height = 28, fill = '#EDEBDF' }: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path d="M3 6.5l6-2 6 2 6-2v13l-6 2-6-2-6 2v-13Z" stroke={fill} strokeWidth={2} strokeLinejoin="round" />
    <Path d="M9 4.5v15" stroke={fill} strokeWidth={2} strokeLinejoin="round" />
    <Path d="M15 6.5v15" stroke={fill} strokeWidth={2} strokeLinejoin="round" />
  </Svg>
);

export default MapFoldIcon;
