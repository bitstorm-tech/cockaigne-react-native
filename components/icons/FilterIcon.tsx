import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgProps } from './svg-props';

export const FilterIcon: React.FC<SvgProps> = ({ width = 24, height = 24, fill = 'white' }) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M4 4h16v2.172a2 2 0 0 1-.586 1.414l-6.414 6.414v7l-2 1v-8l-6.414-6.414A2 2 0 0 1 4 6.172V4z"
                fill={fill}
            />
        </Svg>
    );
};