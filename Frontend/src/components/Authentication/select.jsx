const fixedSelectClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

// make a select component with options as children
export default function Select({
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
    children
}){
    return(
        <div>
            <label htmlFor={labelFor}>
              {labelText}
            </label>
            <select
              onChange={onChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className={fixedSelectClass+customClass}
              placeholder={placeholder}
            >
                {children}
            </select>
          </div>
    )
}