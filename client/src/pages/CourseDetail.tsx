import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowLeft, BookOpen, Gamepad2, FileText, Clock, PlayCircle, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "wouter";
import { courses } from "../../../shared/courseData";

export default function CourseDetail() {
  const params = useParams();
  const courseId = params.id;
  
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Curso não encontrado</h2>
          <p className="text-muted-foreground mb-6">O curso que você está procurando não existe.</p>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar para Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const totalVideos = course.modules.reduce((acc, module) => acc + module.videos.length, 0);
  const totalDuration = totalVideos * 5; // 5 minutos por vídeo

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="rounded-xl" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Voltar
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-semibold">Ciber Mind</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${course.color} opacity-10`} />
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="text-6xl">{course.icon}</div>
              <div className="flex-1">
                <Badge className="mb-3 rounded-full px-4 py-1">{course.targetAudience}</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-3">{course.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{course.subtitle}</p>
                <p className="text-lg leading-relaxed">{course.description}</p>
              </div>
            </div>

            {/* Course Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="rounded-2xl border-2">
                <CardContent className="pt-6 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{course.modules.length}</p>
                  <p className="text-sm text-muted-foreground">Módulos</p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-2">
                <CardContent className="pt-6 text-center">
                  <PlayCircle className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{totalVideos}</p>
                  <p className="text-sm text-muted-foreground">Vídeos</p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-2">
                <CardContent className="pt-6 text-center">
                  <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold">{totalDuration}</p>
                  <p className="text-sm text-muted-foreground">Minutos</p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-2">
                <CardContent className="pt-6 text-center">
                  <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-muted-foreground">Prático</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Conteúdo do Curso</h2>

            <Accordion type="single" collapsible className="space-y-4">
              {course.modules.map((module) => (
                <AccordionItem 
                  key={module.id} 
                  value={`module-${module.id}`}
                  className="border-2 rounded-2xl px-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl flex-shrink-0">
                        <span className="text-xl font-bold text-primary">{module.id}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{module.title}</h3>
                        <p className="text-sm text-muted-foreground">{module.videos.length} vídeos • {module.videos.length * 5} minutos</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-3 ml-16">
                      {module.videos.map((video) => (
                        <div 
                          key={video.id} 
                          className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center justify-center w-10 h-10 bg-background rounded-lg flex-shrink-0 border-2">
                            <PlayCircle className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{video.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{video.description}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              <span>{video.duration}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Recursos Adicionais</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Game Card */}
              <Card className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-secondary to-accent" />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl">
                      <Gamepad2 className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">Jogo Educativo</CardTitle>
                  </div>
                  <CardDescription className="text-base font-semibold text-foreground">
                    {course.game.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {course.game.description}
                  </p>
                </CardContent>
              </Card>

              {/* Ebook Card */}
              <Card className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-accent to-primary" />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">E-book Completo</CardTitle>
                  </div>
                  <CardDescription className="text-base font-semibold text-foreground">
                    {course.ebook.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {course.ebook.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="rounded-3xl shadow-2xl border-2 overflow-hidden">
              <div className={`h-3 bg-gradient-to-r ${course.color}`} />
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Este curso foi desenvolvido especialmente para {course.targetAudience.toLowerCase()}, com conteúdo prático e acessível.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Iniciar Curso
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 py-6 rounded-2xl"
                    asChild
                  >
                    <Link href="/">
                      Ver Outros Cursos
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
              © 2025 Ciber Mind. Desenvolvido para proteger e educar.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
