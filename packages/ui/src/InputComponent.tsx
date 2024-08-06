import { ChangeEvent } from "react";

interface inputProps {
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = ({ label, placeholder, type, onChange }: inputProps) => {
  return (
    <div className="my-2">
      <label className="flex flex-col text-lg gap-1">
        {label}
        <input
          required
          type={type}
          placeholder={placeholder}
          className="w-full bg-gray-100 px-3 pb-3 pt-2 rounded-3xl shadow-sm shadow-slate-300"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default InputComponent;
