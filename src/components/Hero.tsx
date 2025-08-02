import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Brain, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Teaching Platform
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-hero bg-clip-text text-transparent">
                TeachFlow AI
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                The intelligent knowledge management platform designed specifically for educators
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Combine the organizational power of Notion-like workspaces with advanced AI capabilities. 
                Create, organize, and access educational content while leveraging AI agents for instant 
                assistance with curriculum development and lesson planning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="group">
                Start Teaching Smarter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center px-3 py-2 rounded-full bg-background border text-sm">
                <Brain className="w-4 h-4 mr-2 text-primary" />
                AI Lesson Planning
              </div>
              <div className="inline-flex items-center px-3 py-2 rounded-full bg-background border text-sm">
                <BookOpen className="w-4 h-4 mr-2 text-accent" />
                Smart Organization
              </div>
              <div className="inline-flex items-center px-3 py-2 rounded-full bg-background border text-sm">
                <Users className="w-4 h-4 mr-2 text-success" />
                Team Collaboration
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="TeachFlow AI Platform Interface" 
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;