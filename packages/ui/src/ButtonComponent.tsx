interface buttonProps {
  label: string;
  onClick: () => void;
}
const ButtonComponent = ({ label, onClick }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full mt-3 mb-1 bg-[#131842] text-white p-3 rounded-3xl text-xl font-semibold shadow-md shadow-slate-400"
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
