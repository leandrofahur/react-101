import PropTypes from "prop-types";

function Button(props) {
  const {
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    children,
  } = props;
  return <button>{children}</button>;
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  children: PropTypes.node,
  checkVariationValue: (props) => {
    const { primary, secondary, success, warning, danger } = props;

    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        `Only one of the props primary, secondary, success, warning, danger can be true`
      );
    }
  },
};

export default Button;
