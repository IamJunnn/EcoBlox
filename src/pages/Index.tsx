import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProgramHighlights from "@/components/ProgramHighlights";
import ProgramTimeline from "@/components/ProgramTimeline";
import SafetySection from "@/components/SafetySection";
import GamePlan from "@/components/GamePlan";
import StudentRoles from "@/components/StudentRoles";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProgramHighlights />
      <ProgramTimeline />
      <GamePlan />
      <SafetySection />
      <StudentRoles />
      <Footer />
    </div>
  );
};

export default Index;
