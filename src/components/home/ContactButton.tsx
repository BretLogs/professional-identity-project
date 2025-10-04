import PillButton from "../PillButton"

export default function ContactButton() {
    return (
      <div className="flex justify-center w-full my-24">
        <PillButton 
          size="lg"
          className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl hover:shadow-2xl focus:ring-white/50"
          style={{padding: "20px", width: "100%", marginTop: "12px"}}
        >
            I'm Interested!
        </PillButton>
      </div>
    )
  }
  
  