import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, BookOpen, Gamepad2, FileText, ArrowRight, Lock, Users, Target } from "lucide-react";
import { Link } from "wouter";
import { courses } from "../../../shared/courseData";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo/Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-primary to-secondary rounded-3xl shadow-lg">
              <Shield className="w-10 h-10 text-primary-foreground" />
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Ciber Mind
            </h1>
            <p className="text-2xl lg:text-3xl font-semibold text-foreground/90 mb-4">
              Cursos de Segurança Cibernética
            </p>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Proteja-se no mundo digital com cursos desenvolvidos especialmente para você. Conteúdo acessível, sem jargões técnicos, focado em segurança prática para o dia a dia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#cursos">
                  Explorar Cursos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                asChild
              >
                <a href="#sobre">
                  Saiba Mais
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="sobre" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que Escolher a Ciber Mind?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa abordagem é única: conteúdo especializado para cada perfil, sem complicação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <Card className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-primary/10 rounded-2xl">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Conteúdo Segmentado</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Cursos específicos para mulheres, crianças, adolescentes e MEIs, abordando os desafios únicos de cada grupo.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-secondary/10 rounded-2xl">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Linguagem Acessível</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Sem jargões técnicos. Explicamos tudo de forma clara e prática, para quem não tem conhecimento em tecnologia.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-accent/10 rounded-2xl">
                  <Lock className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Fontes Confiáveis</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Baseado em referências de organizações como CERT.br, CISA, SaferNet e ONU Mulheres.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Cursos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o curso ideal para o seu perfil e comece sua jornada de proteção digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course) => (
              <Card 
                key={course.id} 
                className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 overflow-hidden group hover:scale-[1.02]"
              >
                {/* Gradient Header */}
                <div className={`h-3 bg-gradient-to-r ${course.color}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{course.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                      <CardDescription className="text-base font-medium">
                        {course.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>

                  <div className="pt-4 space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-xl">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">{course.modules.length} Módulos • 15 Vídeos de 5 minutos</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center justify-center w-8 h-8 bg-secondary/10 rounded-xl">
                        <Gamepad2 className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="font-medium">Jogo Educativo Interativo</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-xl">
                        <FileText className="w-4 h-4 text-accent" />
                      </div>
                      <span className="font-medium">E-book Completo</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-4">
                  <Button 
                    className="w-full rounded-2xl py-6 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                    asChild
                  >
                    <Link href={`/curso/${course.id}`}>
                      Ver Ementa Completa
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Pronto para se Proteger?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Comece agora sua jornada de segurança digital. Escolha o curso ideal para você e aprenda a se proteger no mundo online.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#cursos">
                Explorar Todos os Cursos
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Ciber Mind</span>
            </div>
            <p className="text-sm">
              Cursos de Segurança Cibernética baseados em fontes confiáveis: CERT.br, CISA, SaferNet, ONU Mulheres e KnowBe4.
            </p>
            <p className="text-sm mt-2">
              © 2025 Ciber Mind, o conhecimento que te protege.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
