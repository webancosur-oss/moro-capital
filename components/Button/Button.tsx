"use client";

import {
  ArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ExternalLink,
  Plus,
  X,
  type LucideIcon,
} from "lucide-react";

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react";

import styles from "./Button.module.css";

type ButtonVariant =
  | "olive"
  | "dark"
  | "light"
  | "outline"
  | "ghost"
  | "custom";

type ButtonSize = "xs" | "sm" | "md" | "lg";

type IconName =
  | "arrow-up-right"
  | "arrow-up"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up-left"
  | "arrow-down-left"
  | "arrow-down-right"
  | "chevron-up"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "external-link"
  | "plus"
  | "check"
  | "x";

type CommonProps = {
  text?: ReactNode;
  children?: ReactNode;

  showText?: boolean;

  prefixIcon?: LucideIcon | IconName;
  suffixIcon?: LucideIcon | IconName;

  variant?: ButtonVariant;
  size?: ButtonSize;

  width?: number | string;
  height?: number | string;

  color?: string;
  background?: string;
  borderColor?: string;

  hoverColor?: string;
  hoverBackground?: string;
  hoverBorderColor?: string;

  iconSize?: number;
  iconStrokeWidth?: number;

  className?: string;
  ariaLabel?: string;

  fullWidth?: boolean;
  disabled?: boolean;
};

type ButtonProps = CommonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "color" | "children"
  > & {
    href?: undefined;
  };

type LinkProps = CommonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "color" | "children"
  > & {
    href: string;
  };

export type Props = ButtonProps | LinkProps;

const iconMap: Record<IconName, LucideIcon> = {
  "arrow-up-right": ArrowUpRight,
  "arrow-up": ArrowUp,
  "arrow-down": ArrowDown,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "arrow-up-left": ArrowUpLeft,
  "arrow-down-left": ArrowDownLeft,
  "arrow-down-right": ArrowDownRight,
  "chevron-up": ChevronUp,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "external-link": ExternalLink,
  plus: Plus,
  check: Check,
  x: X,
};

function resolveIcon(
  icon?: LucideIcon | IconName
): LucideIcon | undefined {
  if (!icon) return undefined;

  if (typeof icon === "string") {
    return iconMap[icon];
  }

  return icon;
}

function normalizeSize(
  value?: number | string
): string | undefined {
  if (typeof value === "number") {
    return `${value}px`;
  }

  return value;
}

export default function Button(props: Props) {
  const {
    text,
    children,
    showText = true,

    prefixIcon,
    suffixIcon,

    variant = "olive",
    size = "md",

    width,
    height,

    color,
    background,
    borderColor,

    hoverColor,
    hoverBackground,
    hoverBorderColor,

    iconSize,
    iconStrokeWidth = 1.6,

    className = "",
    ariaLabel,

    fullWidth = false,

    disabled,

    href,

    ...rest
  } = props;

  const PrefixIcon = resolveIcon(prefixIcon);
  const SuffixIcon = resolveIcon(suffixIcon);

  const content = children ?? text;

  const buttonStyle = {
    "--button-width": normalizeSize(width),
    "--button-height": normalizeSize(height),

    "--button-color": color,
    "--button-background": background,
    "--button-border": borderColor,

    "--button-hover-color": hoverColor,
    "--button-hover-background": hoverBackground,
    "--button-hover-border": hoverBorderColor,

    "--button-icon-size":
      iconSize !== undefined
        ? `${iconSize}px`
        : undefined,
  } as CSSProperties;

  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconProps = {
    size: iconSize,
    strokeWidth: iconStrokeWidth,
    "aria-hidden": true,
  };

  const inner = (
    <>
      {PrefixIcon && (
        <span className={styles.icon}>
          <PrefixIcon {...iconProps} />
        </span>
      )}

      {showText && content !== undefined && (
        <span className={styles.text}>
          {content}
        </span>
      )}

      {SuffixIcon && (
        <span className={styles.icon}>
          <SuffixIcon {...iconProps} />
        </span>
      )}

      <span className={styles.hoverGlow} />
    </>
  );

  if (href !== undefined) {
    const linkProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a
        {...linkProps}
        href={href}
        className={classes}
        style={buttonStyle}
        aria-label={ariaLabel}
        aria-disabled={disabled || undefined}
        onClick={
          disabled
            ? (event) => event.preventDefault()
            : linkProps.onClick
        }
      >
        {inner}
      </a>
    );
  }

  const buttonProps =
    rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      {...buttonProps}
      type={buttonProps.type ?? "button"}
      className={classes}
      style={buttonStyle}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {inner}
    </button>
  );
}