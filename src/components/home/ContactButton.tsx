import { useNavigate } from 'react-router-dom'
import PillButton from "../PillButton"

export default function ContactButton() {
    const navigate = useNavigate()
    
    const handleClick = () => {
      navigate('/form')
    }
    
    return (
      <div className="flex justify-center w-full my-24">
        <PillButton 
          size="lg"
          className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl hover:shadow-2xl focus:ring-white/50"
          style={{padding: "20px", width: "100%", marginTop: "12px"}}
          onClick={handleClick}
        >
            I'm Interested!
        </PillButton>
      </div>
    )
  }
  
  