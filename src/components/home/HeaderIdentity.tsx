import TextType from "../TextType";

export default function headerIdentity() {
    return (
      <div className="flex justify-start w-full">
        <h1 className="text-[60px] font-bold text-white">
            <TextType 
                text={["Hey There! I'm Kirk Velasco", "Your Guide to Transformation!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
            />
        </h1>
      </div>
    )
  }
  
  