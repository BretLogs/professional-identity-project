import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BubbleMenu from '@/components/BubbleMenu'

export default function NavigationMenu() {
  const navigate = useNavigate()

  const menuItems = [
    {
      label: 'Home',
      href: '/',
      ariaLabel: 'Go to Home Page',
      rotation: -8,
      hoverStyles: { bgColor: '#5227FF', textColor: '#ffffff' }
    },
    {
      label: 'Form',
      href: '/form',
      ariaLabel: 'Go to Form Page',
      rotation: 8,
      hoverStyles: { bgColor: '#FF9FFC', textColor: '#ffffff' }
    }
  ]

  const handleMenuClick = (open: boolean) => {
    console.log('Menu is now:', open ? 'open' : 'closed')
  }

  // Add click listener when component mounts
  useEffect(() => {
    // Intercept clicks on the menu items to use React Router navigation
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.hasAttribute('href')) {
        const href = link.getAttribute('href')
        if (href && (href === '/' || href === '/form')) {
          e.preventDefault()
          navigate(href)
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [navigate])

  return (
    <>
      <style>{`
        .bubble-menu .logo-bubble {
          display: none !important;
        }
        .bubble-menu {
          justify-content: center !important;
          z-index: 9999 !important;
        }
        .bubble-menu .toggle-bubble {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4) !important;
        }
        .bubble-menu .toggle-bubble:hover {
          box-shadow: 0 12px 40px rgba(102, 126, 234, 0.6) !important;
          transform: scale(1.05);
        }
        .bubble-menu-items {
          align-items: flex-start !important;
          padding-top: 120px !important;
          justify-content: center !important;
          z-index: 9998 !important;
        }
        .bubble-menu-items .pill-list {
          max-width: 800px !important;
          justify-content: center !important;
        }
        .bubble-menu-items .pill-link {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4) !important;
        }
        .bubble-menu-items .pill-link:hover {
          background: linear-gradient(135deg, #5227FF 0%, #FF9FFC 100%) !important;
          box-shadow: 0 12px 40px rgba(82, 39, 255, 0.6) !important;
        }
        @media (min-width: 900px) {
          .bubble-menu-items {
            padding-top: 140px !important;
          }
          .bubble-menu-items .pill-list {
            gap: 1rem !important;
          }
          .bubble-menu-items .pill-col {
            flex: 0 0 auto !important;
            width: 320px !important;
          }
        }
      `}</style>
      <BubbleMenu
        logo=""
        onMenuClick={handleMenuClick}
        menuBg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        menuContentColor="#ffffff"
        useFixedPosition={true}
        items={menuItems}
        animationEase="back.out(1.7)"
        animationDuration={0.6}
        staggerDelay={0.15}
      />
    </>
  )
}

