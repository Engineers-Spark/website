import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAssetPath } from "@/utils/paths";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Code,
  ExternalLink,
  Github,
  Shield,
  Trophy,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const highlightImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "SparkCTF 2024 Competition",
    title: "SparkCTF 2024",
    description: "Our flagship annual CTF competition",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Workshop Session",
    title: "Cybersecurity Workshop",
    description: "Hands-on learning experience",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Team Collaboration",
    title: "Team Building",
    description: "Collaborative problem solving",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Award Ceremony",
    title: "Recognition Ceremony",
    description: "Celebrating achievements",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Technical Presentation",
    title: "Knowledge Sharing",
    description: "Expert presentations and talks",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlightImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlightImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + highlightImages.length) % highlightImages.length,
    );
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section with Background - Reduced Opacity */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image with Reduced Opacity */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetPath("/bg.png")}
            alt="Engineer's Spark Community"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <img
              src={getAssetPath("/logo.png")}
              alt="Engineer's Spark Logo"
              width={300}
              height={300}
              className="mx-auto mb-8"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-mono tracking-wider">
            ENGINEER'S SPARK
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Engineers Spark is a Tunisian cybersecurity club founded in 2014 at
            ISETCOM. Our mission is to raise awareness about cybersecurity by
            hosting various events, hands-on workshops and training sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary"
            >
              <Link to="/events">View Events</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-primary bg-transparent"
            >
              <Link to="/recruitment">Join Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Simplified Statistics Section - Bigger Logo */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative flex items-center justify-center min-h-[500px]">
            {/* Central Logo with Simple Glow - Made Bigger */}
            <div className="relative z-10">
              <div className="relative">
                <img
                  src={getAssetPath("/logo.png")}
                  alt="Engineer's Spark Logo"
                  width={220}
                  height={220}
                  className="drop-shadow-2xl animate-gentle-pulse"
                />
                {/* Simple glow effect */}
                <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl animate-gentle-glow"></div>
              </div>
            </div>

            {/* Clean Stats Cards with Simple Animation - No Connection Lines */}
            <div className="absolute inset-0">
              {/* Top Left - Members */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in-1">
                <div className="bg-primary/95 border border-accent/30 rounded-xl p-6 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-gentle-blink"></div>
                    <span className="text-accent text-sm font-mono">
                      members.count
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-white font-mono mb-1">
                    250+
                  </div>
                  <div className="text-white/70 text-sm">Active Members</div>
                </div>
              </div>

              {/* Top Right - Events */}
              <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 animate-fade-in-2">
                <div className="bg-primary/95 border border-accent/30 rounded-xl p-6 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-gentle-blink-delay"></div>
                    <span className="text-accent text-sm font-mono">
                      events.total
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-white font-mono mb-1">
                    35+
                  </div>
                  <div className="text-white/70 text-sm">Events Organized</div>
                </div>
              </div>

              {/* Bottom Left - Workshops */}
              <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 animate-fade-in-3">
                <div className="bg-primary/95 border border-accent/30 rounded-xl p-6 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-gentle-blink"></div>
                    <span className="text-accent text-sm font-mono">
                      workshops.count
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-white font-mono mb-1">
                    80+
                  </div>
                  <div className="text-white/70 text-sm">Workshops</div>
                </div>
              </div>

              {/* Bottom Right - Alumni */}
              <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 animate-fade-in-4">
                <div className="bg-primary/95 border border-accent/30 rounded-xl p-6 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-gentle-blink-delay"></div>
                    <span className="text-accent text-sm font-mono">
                      alumni.network
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-white font-mono mb-1">
                    500+
                  </div>
                  <div className="text-white/70 text-sm">Alumni Network</div>
                </div>
              </div>
            </div>

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-grid-pattern"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Moved Above Branches */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-primary/80 border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-white">CTF Competitions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-center">
                  Participate in Capture The Flag competitions to test and
                  improve your cybersecurity skills
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-primary/80 border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-white">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-center">
                  Connect with like-minded individuals passionate about
                  cybersecurity and ethical hacking
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-primary/80 border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader className="text-center">
                <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-white">Competitions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-center">
                  Compete in local and international cybersecurity competitions
                  and challenges
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-primary/80 border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader className="text-center">
                <Code className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-white">Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-center">
                  Hands-on workshops and training sessions to develop practical
                  cybersecurity skills
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Branches Section - Now Below What We Do */}
      <section className="py-20 px-4 bg-primary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Community Branches
          </h2>

          <div className="flex flex-col items-center space-y-12">
            {/* Main Community */}
            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src={getAssetPath("/logo.png")}
                  alt="Engineers Spark Community Logo"
                  width={150}
                  height={150}
                  className="mx-auto drop-shadow-xl"
                />
                <div className="absolute inset-0 rounded-full bg-accent/10 blur-lg"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Engineers Spark Community
              </h3>
              <p className="text-white/70">
                The main cybersecurity community across Tunisia
              </p>
            </div>

            {/* Connecting Line */}
            <div className="w-px h-12 bg-accent/30"></div>

            {/* Branches */}
            <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
              {/* ISETCOM Branch */}
              <Card className="bg-primary/80 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <a
                    href="https://www.facebook.com/engineers.spark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="relative mb-6">
                      <img
                        src={getAssetPath("/isetcom.png")}
                        alt="Engineers Spark ISETCOM Logo"
                        width={100}
                        height={100}
                        className="mx-auto drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-accent/10 blur-md group-hover:bg-accent/20 transition-colors"></div>
                      <ExternalLink className="absolute -top-2 -right-2 w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      Engineers Spark ISETCOM
                    </h4>
                    <p className="text-white/60 mb-3">The founding branch</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 rounded-full">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-accent text-sm font-medium">
                        Est. 2014
                      </span>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* UIK Branch */}
              <Card className="bg-primary/80 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <a
                    href="https://www.facebook.com/profile.php?id=61567409593714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="relative mb-6">
                      <img
                        src={getAssetPath("/uik.png")}
                        alt="Engineers Spark UIK Logo"
                        width={100}
                        height={100}
                        className="mx-auto drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-accent/10 blur-md group-hover:bg-accent/20 transition-colors"></div>
                      <ExternalLink className="absolute -top-2 -right-2 w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      Engineers Spark UIK
                    </h4>
                    <p className="text-white/60 mb-3">The newest branch</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 rounded-full">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-accent text-sm font-medium">
                        Est. 2024
                      </span>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Branch Stats */}
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">2</div>
                <div className="text-white/70">Active Branches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-white/70">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-white/70">Community Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Carousel Section */}
      <section className="py-20 px-4 bg-primary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Highlights
          </h2>
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {highlightImages.map((image) => (
                  <div key={image.id} className="w-full flex-shrink-0 relative">
                    <div className="aspect-video relative">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">
                          {image.title}
                        </h3>
                        <p className="text-white/80">{image.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {highlightImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-accent" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-20 px-4 bg-primary/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-white">Recent Events</h2>
            <Button
              asChild
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-primary bg-transparent"
            >
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-primary/80 border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 text-accent mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">March 2025</span>
                </div>
                <CardTitle className="text-white">SparkCTF 2025</CardTitle>
                <CardDescription className="text-white/70">
                  The biggest edition yet with international participation and
                  advanced challenges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-primary bg-transparent"
                >
                  <Link to="/events/sparkctf/2025">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary/80 border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 text-accent mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">May 2025</span>
                </div>
                <CardTitle className="text-white">PenParty 2025</CardTitle>
                <CardDescription className="text-white/70">
                  Advanced penetration testing scenarios and red team exercises.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-primary bg-transparent"
                >
                  <Link to="/events/penparty/2025">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary/80 border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 text-accent mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">February 2025</span>
                </div>
                <CardTitle className="text-white">CyberMaze 2025</CardTitle>
                <CardDescription className="text-white/70">
                  Expanded beginner program with more interactive workshops.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-primary bg-transparent"
                >
                  <Link to="/events/cybermaze/2025">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Spark Your Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join Engineer's Spark and become part of Tunisia's premier
            cybersecurity community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary"
            >
              <Link to="/recruitment">Join the Club</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-primary bg-transparent"
            >
              <a
                href="https://github.com/Engineers-Spark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
