import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import './Button.scoped.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
}

const Button = ({ className, outlined, children, ...rest }: IButtonProps) => {

  const classnames = classNames('button', { 'outlined': outlined }, className);
  return (
      <button className={classnames} {...rest}>
        {children}
      </button>
  )
}


export default Button;