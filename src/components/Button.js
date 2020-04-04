import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'gatsby';

function Button({ children, to, onClick, className, type = 'button' }) {
  const classNameGrouped = clsx(
    [className],
    ['bg-blue-500', 'px-4', 'py-2', 'text-white', 'rounded']
  );
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classNameGrouped}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} type={type} className={classNameGrouped}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
};

export default Button;
