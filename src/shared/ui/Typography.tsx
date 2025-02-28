import { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';

import type {
  ColorKeys,
  FontKeys,
} from '@shared/types/theme';

export interface TypographyProps {
  children: string | number;
  size?: FontKeys;
  color?: ColorKeys;
  weight?: CSSProperties['fontWeight'];
}

export const Typography: FC<TypographyProps> = ({
  children,
  size = 'Body',
  color = 'text',
  weight = 'normal',
}) => {
  return (
    <>
      <Text $size={size} $color={color} $weight={weight}>
        {children}
      </Text>
    </>
  );
};

interface TextProps {
  $size: TypographyProps['size'];
  $color: TypographyProps['color'];
  $weight: TypographyProps['weight'];
}

const Text = styled.p<TextProps>`
  font-size: ${({ theme, $size }) =>
    theme.light.font[$size!]};
  color: ${({ theme, $color }) =>
    theme.light.color[$color!]};
  font-weight: ${({ $weight }) => $weight};
`;
