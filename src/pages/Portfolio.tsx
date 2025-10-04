import NavigationMenu from '@/components/NavigationMenu'
import ChromaGrid from '@/components/ChromaGrid'

export default function Portfolio() {
    const items = [
        {
          image: "https://i.pravatar.cc/300?img=1",
          title: "Sarah Johnson",
          subtitle: "Frontend Developer",
          handle: "@sarahjohnson",
          borderColor: "#3B82F6",
          gradient: "linear-gradient(145deg, #3B82F6, #000)",
          url: "https://github.com/sarahjohnson"
        },
        {
          image: "https://i.pravatar.cc/300?img=2",
          title: "Mike Chen",
          subtitle: "Backend Engineer",
          handle: "@mikechen",
          borderColor: "#10B981",
          gradient: "linear-gradient(180deg, #10B981, #000)",
          url: "https://linkedin.com/in/mikechen"
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

