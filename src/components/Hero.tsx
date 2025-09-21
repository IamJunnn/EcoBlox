import { Button } from "@/components/ui/button";
import { Play, Users, GamepadIcon, Leaf, Code, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";
import ContactPopup from "@/components/ContactPopup";
import VideoPopup from "@/components/VideoPopup";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-tech/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-tech rounded-full animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Turn Gaming Passion into{" "}
                <span className="bg-gradient-to-r from-green to-blue bg-clip-text text-transparent font-extrabold">
                  Environmental{" "}
                </span>
                <span className="bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent font-extrabold">
                  Action
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                10-week program where students create real games while learning environmental 
                problem-solving and digital citizenship
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-white/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Small Groups</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                <span>Safe Environment</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                <span>Real Game Launch</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start">
              <ContactPopup>
                <Button
                  variant="accent"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-glow hover:scale-105 transform transition-all duration-300 w-full sm:w-auto"
                >
                  <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Schedule Discovery Call
                </Button>
              </ContactPopup>
              <VideoPopup
                videoUrl="https://vimeo.com/manage/videos/1111840426"
                title="EcoBlox Sample Class"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 text-white border-white/30 hover:bg-white/10 w-full sm:w-auto"
                >
                  <GamepadIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Watch Sample Class
                </Button>
              </VideoPopup>
            </div>

            {/* Trust tagline */}
            <p className="text-white/70 text-lg italic">
              "Nurture digital native talent who think about the environment through games in a safe online environment!"
            </p>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-glow transition-all duration-500 transform hover:scale-105">
              <img 
                src={heroImage} 
                alt="Students collaborating on environmental coding projects"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              
              {/* Floating badges */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                <Leaf className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Environmental Focus</span>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                <Code className="h-4 w-4 text-tech" />
                <span className="text-sm font-medium text-tech">Real Coding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;