export default function RotatingGlobeVideo() {
  return (
    <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden shadow-2xl">

      {/* ✅ Colorful BACKGROUND */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#0ea5e9] via-[#9333ea] to-[#f43f5e]" />

      {/* ✅ VIDEO with partial opacity so background shows through */}
      <video
        src={`${import.meta.env.BASE_URL}assets/Globe.mp4`}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-70"
      />

      {/* ✅ Optional: add a translucent overlay to shift tone */}
      <div className="absolute inset-0 z-20 bg-black/20 mix-blend-soft-light pointer-events-none" />

      {/* ✅ TAGLINE */}
      <div className="absolute bottom-[-30px] w-full text-center text-white animate-pulse text-sm z-30">
        “Collaborating for a Viksit Bharat”
      </div>
    </div>
  );
}
