


export default function Field({
  type, label, placeholder, 
  value, onChange, options, customField, customLabel,
  min, max, step, selected, forId, minlength, maxlength, name,
  required
}: FieldProps) {

  if(type === "area") {
    return (
      <div className="flex flex-col">
        { 
          label && <label className={(customLabel) && customLabel} htmlFor={forId}>{label}</label>
        }
        <textarea 
          placeholder={placeholder ? placeholder : ""} 
          className={(customField) && customField}
          value={value}
          onChange={onChange}
          id={forId}
          name={name}
        ></textarea>
      </div>
    )
  } else if (type === "select" && options) {
    return (
      <div className="flex flex-col">
        { 
          label && <label className={(customLabel) && customLabel} htmlFor={forId}>{label}</label>
        }
        <select 
          className={(customField) && customField} 
          value={value} 
          onChange={onChange}
          autoCapitalize="off"
          autoComplete="off"
          id={forId}
          name={name}
        >
          {
            options.map((option, index) => (
              <option key={index} value={option.value} selected={option.text === selected ? true : false}>{option.text}</option>
            ))
          }
        </select>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col">
        { 
          label && <label className={(customLabel) && customLabel} htmlFor={forId}>{label}</label>
        }
        <input 
          type={type} 
          placeholder={placeholder ? placeholder : ""} 
          className={(customField) && customField} 
          value={value}
          onChange={onChange}
          min={min && min}
          max={max && max}
          step={step && step}
          autoCapitalize="off"
          autoComplete="off"
          checked={(selected && (type === "radio" || type === "checkbox") && selected === value) ? true : false}
          id={forId}
          maxLength={minlength && minlength}
          minLength={maxlength && maxlength}
          name={name}
          required={required && required}
        />
      </div>
    )
  }
}
