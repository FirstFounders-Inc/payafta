import { IButtonProps } from './interface';
import { Button as MUIButton } from '@mui/material';

const Button = ({
  color,
  variant,
  className,
  loading,
  children,
  ...rest
}: IButtonProps) => {
  return (
    <MUIButton variant={variant} className={className} {...rest} color={color}>
      {loading ? <p>Loading....</p> : children}
    </MUIButton>
  );
};

Button.defaultProps = {
  variant: 'contained',
};

export default Button;
