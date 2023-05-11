import { FaCheckCircle } from "react-icons/fa"
import { BiError } from "react-icons/bi"
import useAlertStore from "../../store/alert"


const Alert: React.FC = () => {
  const { active, message, type } = useAlertStore(state => state)
  let color = ''
  let icon = <></>
  if(type == 'error') {
    color = 'bg-error'
    icon = <BiError className="text-white" size={12} /> 
  }else if (type == 'success') {
    color = 'bg-primary'
    icon = <FaCheckCircle className="text-white" size={12} /> 
  }

  return ( active ?
    <div className="absolute w-56 ease-in duration-700 top-6 right-0">
      <div className={`${color}`}>
        <div className="flex flex-row">
          <div className="w-full m-2 flex flex-row items-center">
            { icon }
            <div className="text-white mx-2">
              { message }
            </div>
          </div>
          <div className=" bg-black opacity-20 w-2" />
        </div>
      </div>
    </div>:<></>)
}

export default Alert