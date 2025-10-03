import TextType from "../TextType";

export default function headerIdentity() {
    return (
      <div className="flex justify-start w-full">
        <h1 className="text-[80px] font-bold text-white" style={{paddingRight: '32px'}}>
            <TextType 
                text={["Hey There! I'm Kirk Velasco", "Your Guide to Transformation!"]}
                typingSpeed={100}
                pauseDuration={4000}
                showCursor={true}
            />
        </h1>
      </div>
    )
  }
  
  