import avatarImage from '@/assets/images/identity-avatar-1.png'

export default function AvatarImage() {
  return (
    <div className="flex items-end justify-start w-full h-full">
      <img
        src={avatarImage}
        alt="Professional Identity Avatar"
        className="max-w-full max-h-full object-contain animate-slide-in-left"
        style={{
          filter: `
            drop-shadow(0 0 2px rgba(255, 255, 255, 0.9))
            drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))
            drop-shadow(0 0 8px rgba(255, 255, 255, 0.7))
            drop-shadow(0 0 12px rgba(255, 255, 255, 0.6))
            drop-shadow(0 0 16px rgba(255, 255, 255, 0.5))
            drop-shadow(0 0 20px rgba(255, 255, 255, 0.4))
            drop-shadow(0 0 24px rgba(255, 255, 255, 0.3))
            drop-shadow(0 0 28px rgba(255, 255, 255, 0.2))
            drop-shadow(0 0 32px rgba(255, 255, 255, 0.1))
          `,
          animation: 'slideInLeft 1s ease-out'
        }}
      />
      <style>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

