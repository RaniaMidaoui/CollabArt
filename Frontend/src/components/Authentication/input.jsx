const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

export default function Input({
    onChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass,
    border,
}){
    return(
        <div className="mt-5">
            <label htmlFor={labelFor}>
              {labelText}
            </label>
            <input
              onChange={onChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className={fixedInputClass+customClass+" "+border}
              placeholder={placeholder}
            />
          </div>
    )
}