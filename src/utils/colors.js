export const colorsBgLight = {
  white: "bg-white text-black",
  light: "bg-white text-black",
  contrast: "bg-gray-700 text-white",
  success: "bg-emerald-500 border-emerald-500 text-white",
  danger: "bg-red-500 border-red-500 text-white",
  warning: "bg-yellow-500 border-yellow-500 text-white",
  info: "bg-blue-500 border-blue-500 text-white",
};

export const colorsText = {
  white: "text-black",
  light: "text-gray-700",
  contrast: "text-slate-600",
  success: "text-emerald-500",
  danger: "text-red-500",
  warning: "text-yellow-500",
  info: "text-blue-500",
};

export const colorsOutline = {
  white: [colorsText.white, "border-gray-100"],
  light: [colorsText.light, "border-gray-100"],
  contrast: [colorsText.contrast, "border-gray-900"],
  success: [colorsText.success, "border-emerald-500"],
  danger: [colorsText.danger, "border-red-500"],
  warning: [colorsText.warning, "border-yellow-500"],
  info: [colorsText.info, "border-blue-500"],
};

export const getButtonColor = (
  color,
  isOutlined,
  hasHover,
  isActive = false
) => {
  const colors = {
    ring: {
      white: "ring-gray-200",
      whiteDark: "ring-gray-200",
      lightDark: "ring-gray-200",
      contrast: "ring-gray-300",
      success: "ring-emerald-300",
      danger: "ring-red-300",
      warning: "ring-yellow-300",
      info: "ring-blue-300",
    },
    active: {
      white: "bg-gray-100",
      whiteDark: "bg-gray-100",
      lightDark: "bg-gray-200",
      contrast: "bg-gray-700",
      success: "bg-emerald-700",
      danger: "bg-red-700",
      warning: "bg-yellow-700",
      info: "bg-blue-700",
    },
    bg: {
      white: "bg-white text-black",
      whiteDark: "bg-white text-black",
      lightDark: "bg-gray-100 text-black",
      contrast: "bg-gray-800 text-white",
      success: "bg-emerald-600 text-white",
      danger: "bg-red-600 text-white",
      warning: "bg-yellow-600 text-white",
      info: "bg-blue-600 text-white",
    },
    bgHover: {
      white: "hover:bg-gray-100",
      whiteDark: "hover:bg-gray-100",
      lightDark: "hover:bg-gray-200",
      contrast: "hover:bg-gray-700",
      success:
        "hover:bg-emerald-700 hover:border-emerald-700",
      danger:
        "hover:bg-red-700 hover:border-red-700",
      warning:
        "hover:bg-yellow-700 hover:border-yellow-700",
      info: "hover:bg-blue-700 hover:border-blue-700",
    },
    borders: {
      white: "border-white",
      whiteDark: "border-white",
      lightDark: "border-gray-100",
      contrast: "border-gray-800",
      success: "border-emerald-600",
      danger: "border-red-600",
      warning: "border-yellow-600",
      info: "border-blue-600",
    },
    text: {
      contrast: "text-slate-600",
      success: "text-emerald-600",
      danger: "text-red-600",
      warning: "text-yellow-600",
      info: "text-blue-600",
    },
    outlineHover: {
      contrast:
        "hover:bg-gray-800 hover:text-gray-100",
      success:
        "hover:bg-emerald-600 hover:text-white hover:text-white",
      danger:
        "hover:bg-red-600 hover:text-white hover:text-white",
      warning:
        "hover:bg-yellow-600 hover:text-white hover:text-white",
      info: "hover:bg-blue-600 hover:text-white",
    },
  };

  if (!colors.bg[color]) {
    return color;
  }

  const isOutlinedProcessed =
    isOutlined && ["white", "whiteDark", "lightDark"].indexOf(color) < 0;

  const base = [colors.borders[color], colors.ring[color]];

  if (isActive) {
    base.push(colors.active[color]);
  } else {
    base.push(isOutlinedProcessed ? colors.text[color] : colors.bg[color]);
  }

  if (hasHover) {
    base.push(
      isOutlinedProcessed ? colors.outlineHover[color] : colors.bgHover[color]
    );
  }

  return base;
};
