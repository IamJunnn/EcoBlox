import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Code2, CheckCircle, ArrowRight } from "lucide-react";
import studentRolesImage from "@/assets/student-roles.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const getRoles = (t: (key: string) => string) => [
  {
    id: "builder",
    icon: Building,
    title: t('roles.builder'),
    subtitle: t('roles.builderSubtitle'),
    description: t('roles.builderDesc'),
    skills: [
      "3D map design and architecture",
      "Environmental landscape creation", 
      "Structural problem-solving",
      "Design thinking principles"
    ],
    projects: "Design renewable energy facilities, wildlife habitats, and sustainable cities",
    color: "text-primary",
    bgColor: "bg-primary",
  },
  {
    id: "scripter", 
    icon: Code2,
    title: t('roles.scripter'),
    subtitle: t('roles.scripterSubtitle'),
    description: t('roles.scripterDesc'),
    skills: [
      "Game logic programming",
      "Environmental system coding",
      "Lua scripting in Roblox", 
      "Technical problem-solving"
    ],
    projects: "Program climate simulations, renewable energy systems, and interactive education",
    color: "text-tech",
    bgColor: "bg-tech",
  },
  {
    id: "tester",
    icon: CheckCircle, 
    title: t('roles.tester'),
    subtitle: t('roles.testerSubtitle'),
    description: t('roles.testerDesc'),
    skills: [
      "Quality assurance processes",
      "Project management tools",
      "User experience testing",
      "Timeline and milestone management"
    ],
    projects: "Coordinate team efforts, test environmental accuracy, and manage game launches",
    color: "text-secondary",
    bgColor: "bg-secondary", 
  }
];

const StudentRoles = () => {
  const { t } = useLanguage();
  
  return (
    <section id="roles" className="pt-4 pb-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('roles.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('roles.description')}
          </p>
          
          
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {getRoles(t).map((role, index) => {
            const Icon = role.icon;
            return (
              <Card 
                key={role.id}
                className="hover:shadow-md transition-all duration-300 bg-card border-border overflow-hidden"
              >
                <CardHeader className="relative">
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${role.bgColor}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-8 w-8 ${role.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center mb-2">
                      {role.title}
                    </CardTitle>
                    <p className={`text-center font-medium ${role.color}`}>
                      {role.subtitle}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">
                    {role.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{t('roles.keySkills')}</h4>
                    <ul className="space-y-2">
                      {role.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start gap-2">
                          <CheckCircle className={`h-4 w-4 ${role.color} mt-1 flex-shrink-0`} />
                          <span className="text-sm text-muted-foreground">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`p-4 ${role.bgColor}/5 rounded-lg border border-${role.bgColor}/20`}>
                    <h4 className="font-semibold text-foreground mb-2">{t('roles.exampleProjects')}</h4>
                    <p className="text-sm text-muted-foreground">{role.projects}</p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className={`w-full group-hover:${role.bgColor} group-hover:text-white transition-colors`}
                  >
                    {t('roles.learnMore')}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StudentRoles;