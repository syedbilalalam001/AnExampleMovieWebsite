import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  // CSS variables for adjustable layout control
  const layout = {
    // Title positioning and styling
    titleFontSize: "text-7xl md:text-8xl lg:text-[10rem]",
    titleTracking: "tracking-wide",
    titleLeftMargin: "ml-20 md:ml-32 lg:ml-48",
    titleAlignment: "text-left",
    titleFontWeight: "font-normal",
    yearPosition: "ml-20 md:ml-32 lg:ml-48",
    yearStyle: "font-medium italic text-[1.4rem]",
    buttonSpacing: "mt-12",
    
    // Character positioning and sizing - manually adjustable
    characterXPosition: -430, // Horizontal position in pixels (negative = left)
    characterYPosition: 60,   // Vertical position in pixels (positive = down)
    characterScale: 1.3,      // Size multiplier (1 = original size)
    characterWidth: 300,      // Width in pixels
    characterHeight: 600,     // Height in pixels
    characterZIndex: 10,      // Layer ordering
    
    // Description text positioning
    descriptionWidth: "max-w-md",
    descriptionRightPadding: "pr-10",
    descriptionFontSize: "text-base",
    descriptionDirectorStyle: "font-bold",
    descriptionPosition: "ml-0 md:ml-8",
    descriptionVertical: "mt-32 md:mt-8",
    
    // Button styling
    buttonPadding: "px-6 py-2",
    buttonShadow: "shadow-md",
    buttonBg: "bg-white",
    buttonBorder: "border border-gray-200",
    buttonRadius: "rounded-sm",
    buttonGlow: "hover:shadow-xl transition-shadow duration-300 ring-1 ring-white/50",
    buttonTextStyle: "tracking-wider font-semibold",
    
    // Navigation buttons
    navButtonPadding: "px-5 py-2",
    navButtonBg: "bg-white",
    navButtonBorder: "border border-gray-200",
    navButtonShadow: "shadow-sm",
    navButtonRadius: "rounded-sm",
    navLinkStyle: "text-xs font-medium tracking-wide",
    
    // Top navigation
    topNavLinkStyle: "text-sm tracking-wide",
    topNavActiveStyle: "border-b-2 border-gray-800 font-bold",
    
    // Footer nav styling
    footerNavArrowBg: "bg-white/90 p-3",
    footerNavArrowBorder: "rounded-sm",
    footerNavTextStyle: "text-sm font-medium",
    footerPosition: "absolute bottom-10 left-0 right-0 px-8",
    footerItemsPadding: "py-1",
    footerArrowShadow: "shadow-sm hover:shadow-md transition-all duration-300",
  }

  // Generate character positioning style from variables
  const characterStyle = {
    transform: `translate(${layout.characterXPosition}px, ${layout.characterYPosition}px) scale(${layout.characterScale})`,
    zIndex: layout.characterZIndex,
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/background.png" alt="Spirited Away Background" fill priority className="object-cover" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 p-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8">
            <Link href="#" className={`text-gray-800 hover:text-gray-600 ${layout.topNavLinkStyle}`}>
              About Studio Ghibli
            </Link>
            <Link href="#" className={`text-gray-800 hover:text-gray-600 ${layout.topNavActiveStyle} ${layout.topNavLinkStyle}`}>
              Movie List
            </Link>
            <Link href="#" className={`text-gray-800 hover:text-gray-600 ${layout.topNavLinkStyle}`}>
              Merchandise
            </Link>
          </div>
          <button className="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-160px)]">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center p-8 md:p-16">
          <div className="relative">
            {/* 2001 text positioned directly above the title with same margin */}
            <h2 className={`${layout.yearStyle} mb-4 ${layout.yearPosition} font-serif`}>2001</h2>
            
            {/* Main title */}
            <h1 className={`${layout.titleFontSize} font-serif leading-tight ${layout.titleTracking} ${layout.titleFontWeight} ${layout.titleLeftMargin} ${layout.titleAlignment}`}>
              Spirited
              <br />
              Away
            </h1>
            
            {/* Buttons positioned directly below "Away" with same left margin as title */}
            <div className={`flex items-center space-x-6 ${layout.buttonSpacing} ${layout.titleLeftMargin}`}>
              <Link
                href="#"
                className={`flex items-center space-x-2 ${layout.buttonBg} ${layout.buttonPadding} ${layout.buttonRadius} transition-colors ${layout.buttonShadow} ${layout.buttonBorder} hover:bg-gray-50 ${layout.buttonGlow}`}
              >
                <FontAwesomeIcon icon={faPlay} className="text-gray-800 w-2.5 h-2.5" />
                <span className={`text-xs ${layout.buttonTextStyle} text-gray-800 uppercase`}>WATCH TRAILER</span>
              </Link>
              <Link
                href="https://www.imdb.com/title/tt0245429/"
                target="_blank"
                className="flex items-center hover:underline text-xs font-semibold text-gray-800"
              >
                IMDB
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Character and Description */}
        <div className="relative flex items-center justify-center">
          {/* Character with fixed position */}
          <div
            className="absolute"
            style={characterStyle}
          >
            <Image
              src="/images/chihiro.png"
              alt="Chihiro"
              width={layout.characterWidth}
              height={layout.characterHeight}
              priority
              className="object-contain"
            />
          </div>

          {/* Description text */}
          <div className={`${layout.descriptionWidth} space-y-4 ${layout.descriptionPosition} ${layout.descriptionVertical}`}>
            <p className={`${layout.descriptionFontSize} leading-relaxed text-gray-800`}>
              <span className="font-medium">Spirited Away</span> tells the story of <span className="font-medium">Chihiro Ogino (Hiiragi)</span>, a 10-year-old girl who, while moving to a new neighbourhood, enters the world of <span className="font-medium">Kami (spirits)</span> of Japanese Shinto folklore. After her parents are turned into pigs by the witch <span className="font-medium">Yubaba (Natsuki)</span>, Chihiro takes a job working in Yubaba's bathhouse to find a way to free herself and her parents and return to the human world.
            </p>
            <p className={`${layout.descriptionFontSize} text-gray-800`}>
              <span className={`${layout.descriptionDirectorStyle}`}>Director:</span> Hayao Miyazaki
            </p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className={`relative z-20 flex justify-between items-center ${layout.footerPosition}`}>
        <div className={`flex items-center ${layout.footerItemsPadding}`}>
          <Link
            href="#"
            className={`${layout.footerNavArrowBg} ${layout.footerNavArrowBorder} ${layout.footerArrowShadow}`}
            aria-label="Previous page"
          >
            <ArrowLeft size={16} className="text-gray-800" />
          </Link>
        </div>
        <div className={`flex items-center ${layout.footerItemsPadding}`}>
          <span className={`mr-3 ${layout.footerNavTextStyle} text-gray-800`}>Attack on Titan</span>
          <Link
            href="/attack-on-titan"
            className={`${layout.footerNavArrowBg} ${layout.footerNavArrowBorder} ${layout.footerArrowShadow}`}
            aria-label="Next page - Attack on Titan"
          >
            <ArrowRight size={16} className="text-gray-800" />
          </Link>
        </div>
      </div>
    </main>
  )
}

