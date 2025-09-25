const Button = ({
  children,
  onClick,
  size = "medium",       // small | medium | large
  color = "blue",        // blue | green | red
  icon = null,
  className = "",
  type = "button",       // default type  || button, submit, reset
}) => {


  // Sizes mapping
  const sizeStyles = {
    small: "w-[60px] h-[36px] rounded-[24px] px-4 py-2",
    medium: "w-[123px] h-[37px] rounded-[24px] px-4 py-2",
    large: "w-[230px] h-[48px] rounded-[32px] px-4 py-2",
    full: "w-full h-[48px] rounded-[32px] px-6 py-3",
  };

  
  // Colors mapping
  const colorStyles = {
    blue: "bg-blue-600 text-white hover:bg-blue-700",
    green: "bg-green-600 text-white hover:bg-green-700",
    red: "bg-red-600 text-white hover:bg-red-700",
    gray: "bg-gray-400 text-black hover:bg-gray-500",
  };

  return (
    <button
     type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-[10px] transition-all ${sizeStyles[size]} ${colorStyles[color]} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
