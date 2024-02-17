import classNames from "classnames";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

interface LinkProps extends RouterLinkProps {
  ariaLabel: string;
  className?: string;
  isPurpleUnderlineStyle?: boolean;
}

const Link = ({
  to,
  ariaLabel,
  children,
  className,
  isPurpleUnderlineStyle,
  ...rest
}: LinkProps) => {
  return (
    <RouterLink
      to={to}
      aria-label={ariaLabel}
      className={classNames(
        {
          "text-purple-800 underline underline-offset-4":
            isPurpleUnderlineStyle,
        },
        className
      )}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
