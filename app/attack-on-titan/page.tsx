import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function AttackOnTitanPage() {
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
    characterXPosition: -500, // Horizontal position in pixels (negative = left)
    characterYPosition: 130,   // Vertical position in pixels (positive = down)
    characterScale: 3.1,      // Size multiplier (1 = original size)
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
    footerPosition: "absolute bottom-10 left-0 right-0 px-8", // Position higher up
    footerItemsPadding: "py-1", // Reduced vertical padding
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
        <Image src="/images/walls.png" alt="Attack On Titan Background" fill priority className="object-cover" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 p-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8">
            <Link href="#" className={`text-gray-800 hover:text-gray-600 ${layout.topNavLinkStyle}`}>
              About Wit Studio
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
            {/* 2013 text positioned directly above the title with same margin */}
            <h2 className={`${layout.yearStyle} mb-4 ${layout.yearPosition} font-serif`}>2013</h2>
            
            {/* Main title */}
            <h1 className={`${layout.titleFontSize} font-serif leading-tight ${layout.titleTracking} ${layout.titleFontWeight} ${layout.titleLeftMargin} ${layout.titleAlignment}`}>
              Attack On
              <br />
              Titan
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
                href="https://www.imdb.com/title/tt2560140/"
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
              src="/images/levi.png"
              alt="Levi"
              width={layout.characterWidth}
              height={layout.characterHeight}
              priority
              className="object-contain"
            />
          </div>

          {/* Description text */}
          <div className={`${layout.descriptionWidth} space-y-4 ${layout.descriptionPosition} ${layout.descriptionVertical}`}>
            <p className={`${layout.descriptionFontSize} leading-relaxed text-gray-800`}>
              <span className="font-medium">Attack On Titan</span> is set in a world where humanity lives within cities surrounded by enormous walls that protect them from gigantic man-eating humanoids referred to as <span className="font-medium">Titans</span>. The story follows <span className="font-medium">Eren Yeager</span>, who vows to retake the world after a Titan brings about the destruction of his hometown and the death of his mother.
            </p>
            <p className={`${layout.descriptionFontSize} text-gray-800`}>
              <span className={`${layout.descriptionDirectorStyle}`}>Director:</span> Tetsurō Araki
            </p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className={`relative z-20 flex justify-between items-center ${layout.footerPosition}`}>
        <div className={`flex items-center ${layout.footerItemsPadding}`}>
          <Link
            href="/"
            className={`${layout.footerNavArrowBg} ${layout.footerNavArrowBorder} ${layout.footerArrowShadow}`}
            aria-label="Previous page - Spirited Away"
          >
            <ArrowLeft size={16} className="text-gray-800" />
          </Link>
        </div>
        <div className={`flex items-center ${layout.footerItemsPadding}`}>
          <span className={`mr-3 ${layout.footerNavTextStyle} text-gray-800`}>Demon Slayer</span>
          <Link
            href="#"
            className={`${layout.footerNavArrowBg} ${layout.footerNavArrowBorder} ${layout.footerArrowShadow}`}
            aria-label="Next page - Demon Slayer"
          >
            <ArrowRight size={16} className="text-gray-800" />
          </Link>
        </div>
      </div>
    </main>
  )
}

