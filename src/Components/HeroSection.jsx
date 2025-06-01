export default function HeroSection() {
  const handleLearnMore = () => {
    window.location.href = "https://web3-ai-deeptech-industry.github.io/web3salespage/";
  };

  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20 sm:pt-28 md:pt-32 mb-12 min-h-[100vh] md:min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4">
        Welcome to Bharath Economic Forum
      </h1>
      <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-xl">
        Empowering India's Future with Web3, AI & DeepTech
      </p>
      <button
        onClick={handleLearnMore}
        className="px-6 py-2 border border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white transition rounded"
      >
        Learn More
      </button>
    </section>
  );
}
