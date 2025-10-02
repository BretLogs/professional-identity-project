import LiquidEther from '@/components/LiquidEther'
import SplitText from '@/components/SplitText'
import NavigationMenu from '@/components/NavigationMenu'

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Menu */}
      <NavigationMenu />
      
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 pointer-events-auto">
        <LiquidEther 
          mouseForce={20}
          cursorSize={100}
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
        />
      </div>
      
      {/* Hello World Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
        <SplitText 
          text="Hello World"
          tag="h1"
          className="text-8xl font-bold text-white"
          delay={100}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 100, rotateX: -90 }}
          to={{ opacity: 1, y: 0, rotateX: 0 }}
          threshold={0.1}
        />
      </div>
    </div>
  )
}

