import styled from "styled-components";
import { theme } from "../styles/theme";

interface IButton {
  children?: React.ReactNode;
  width?: string;
  backgroundColor?: string;
  color?: string;
  fontWeight?: string | number;
  borderRadius?: string;
  onClick?: () => void;
  padding?: string;
  fontSize?: string;
  disabled?: boolean;
  border?: string | number;
}

const StyledButton = styled.button<IButton>`
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
  &[disabled] {
    background-color: ${theme.colors.Color_Gray_4};
    color: ${theme.colors.Color_Gray_2};
    cursor: not-allowed;
  }
  border: ${({ border }) => border};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = ({
  children,
  width,
  backgroundColor,
  color,
  fontWeight = 500,
  borderRadius,
  onClick,
  padding,
  fontSize,
  disabled,
  border = "0px",
}: IButton) => {
  return (
    <StyledButton
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      onClick={onClick}
      padding={padding}
      fontSize={fontSize}
      disabled={disabled}
      border={border}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
