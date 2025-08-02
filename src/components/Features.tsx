import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aiTeachingIcon from "@/assets/ai-teaching-icon.jpg";
import collaborationIcon from "@/assets/collaboration-icon.jpg";
import knowledgeIcon from "@/assets/knowledge-icon.jpg";
import { BookOpen, Brain, Users, Search, FileText, MessageSquare, Calendar, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: aiTeachingIcon,
      iconComponent: Brain,
      title: "AI-Powered Teaching Assistants",
      description: "Get instant help with lesson planning, assessment creation, and curriculum development from specialized AI agents.",
      badge: "AI Core",
      benefits: ["Lesson Plan Generator", "Assessment Builder", "Standards Alignment", "Differentiation Suggestions"]
    },
    {
      icon: knowledgeIcon,
      iconComponent: BookOpen,
      title: "Smart Knowledge Management",
      description: "Organize all your teaching materials in Notion-like workspaces with powerful search and retrieval capabilities.",
      badge: "Organization",
      benefits: ["Hierarchical Organization", "Smart Tagging", "Quick Search", "Template Library"]
    },
    {
      icon: collaborationIcon,
      iconComponent: Users,
      title: "Seamless Collaboration",
      description: "Work together with your teaching team, share resources, and build collective knowledge bases.",
      badge: "Teamwork",
      benefits: ["Real-time Editing", "Team Workspaces", "Resource Sharing", "Activity Feeds"]
    }
  ];

  const additionalFeatures = [
    { icon: Search, title: "Instant Retrieval", description: "Find any resource in seconds with AI-powered search" },
    { icon: FileText, title: "Google Drive Integration", description: "Access all your existing files seamlessly" },
    { icon: MessageSquare, title: "Contextual AI Chat", description: "Ask questions about your content and get smart answers" },
    { icon: Calendar, title: "Curriculum Planning", description: "Map out your teaching schedule with integrated planning tools" },
    { icon: Target, title: "Standards Alignment", description: "Ensure all content meets educational standards automatically" }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            Everything you need to teach
            <span className="bg-gradient-primary bg-clip-text text-transparent"> smarter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TeachFlow AI combines the best of knowledge management with cutting-edge AI to transform how you create, organize, and deliver education.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} variant="feature" className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary p-3 shadow-glow">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <Badge variant="secondary">{feature.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Plus many more powerful features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} variant="glass" className="p-6 text-center">
                <feature.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;