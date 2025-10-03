import NavigationMenu from '@/components/NavigationMenu'
import AvatarImage from '@/components/home/AvatarImage'
import HeaderIdentity from '@/components/home/HeaderIdentity'

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavigationMenu />
      <div className="grid grid-cols-4 grid-rows-3 gap-4 h-full p-4">
        <div className="col-span-2 row-span-3 flex items-center justify-end pt-24">
          <AvatarImage />
        </div>
        <div className="col-span-2 col-start-3 flex items-end justify-start">
          <HeaderIdentity />
        </div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-2">5</div>
      </div>
    </div>
  )
}

