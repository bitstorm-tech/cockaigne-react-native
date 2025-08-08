import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgProps } from './svg-props';

// Filled location pin with inner hole
export const LocationPinIcon = ({ width = 28, height = 28, fill = '#E9DBC0' }: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2c-3.314 0-6 2.686-6 6 0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6Zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" fill={fill} />
    <Path d="M12 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" fill={ThemesColorTransparent} />
  </Svg>
);

// Transparent hole helper: a fully transparent color so Android/Web don't paint the inner path
const ThemesColorTransparent = 'rgba(0,0,0,0)';

export default LocationPinIcon;
