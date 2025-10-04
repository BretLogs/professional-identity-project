import NavigationMenu from '@/components/NavigationMenu'
import ChromaGrid from '@/components/ChromaGrid'

export default function Portfolio() {
    const items = [
        {
          image: "https://storage.googleapis.com/identity-images-87659/kirk/sev-avatar.JPG",
          title: "Sev Christian Constantino",
          subtitle: "Matcho Ganado",
          handle: "@sevconstantino",
          borderColor: "#3B82F6",
          gradient: "linear-gradient(145deg, #3B82F6, #000)",
          url: "https://web.facebook.com/sev.constantino"
        },
        {
          image: "https://storage.googleapis.com/identity-images-87659/kirk/identity-avatar.jpg",
          title: "Kirk\nAbaio",
          subtitle: "Gym Construction",
          handle: "@kirky",
          borderColor: "#10B981",
          gradient: "linear-gradient(180deg, #10B981, #000)",
          url: "https://web.facebook.com/kirk.velasco.5#"
        }
      ];

  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Menu */}
      <NavigationMenu />

      <div className='h-screen w-screen flex items-center justify-center'>
        <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
        />
        </div>
    </div>
  )
}

