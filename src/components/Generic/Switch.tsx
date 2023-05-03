interface SwitchProps {
  onClick: () => void
  state: boolean,
  enabledName?: string,
  disabledName?: string
}

const Switch: React.FC<SwitchProps> = ({
  onClick,
  state = false,
  enabledName = 'On',
  disabledName = 'Off'
}: SwitchProps) =>{
  return <>
    <label className="flex items-center cursor-pointer w-10 content-center">
      <input type="checkbox" className="toggle toggle-success" checked={state} onClick={onClick} />
      <span className="label-text p-2">
        { state ? enabledName : disabledName }  
      </span> 
    </label>
  </>
}


export default Switch