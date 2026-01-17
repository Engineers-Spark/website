import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Shield, Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">
            About Engineer's Spark
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We are a passionate cybersecurity club dedicated to fostering the
            next generation of security professionals through hands-on learning,
            competitions, and community building.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-primary/80 border-accent/20">
            <CardHeader>
              <Target className="w-12 h-12 text-accent mb-4" />
              <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/80 text-lg">
                To create a vibrant community where cybersecurity enthusiasts
                can learn, compete, and grow together while contributing to the
                security landscape of Tunisia and beyond.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-primary/80 border-accent/20">
            <CardHeader>
              <Lightbulb className="w-12 h-12 text-accent mb-4" />
              <CardTitle className="text-white text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/80 text-lg">
                To be the leading cybersecurity club in Tunisia, recognized for
                excellence in CTF competitions, security research, and
                developing skilled cybersecurity professionals.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-primary/80 border-accent/20 text-center">
              <CardHeader>
                <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
                <CardTitle className="text-white">CTF Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  Regular training sessions covering web security, cryptography,
                  forensics, and reverse engineering
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-primary/80 border-accent/20 text-center">
              <CardHeader>
                <Users className="w-10 h-10 text-accent mx-auto mb-4" />
                <CardTitle className="text-white">Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  Hands-on workshops on penetration testing, secure coding, and
                  emerging security technologies
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-primary/80 border-accent/20 text-center">
              <CardHeader>
                <Target className="w-10 h-10 text-accent mx-auto mb-4" />
                <CardTitle className="text-white">Competitions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  Participation in national and international CTF competitions
                  and security challenges
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-primary/80 border-accent/20 text-center">
              <CardHeader>
                <Lightbulb className="w-10 h-10 text-accent mx-auto mb-4" />
                <CardTitle className="text-white">Research</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  Security research projects and vulnerability disclosure to
                  contribute to the security community
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* History */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Story
          </h2>
          <Card className="bg-primary/80 border-accent/20">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-white/80">
                <p className="text-lg leading-relaxed mb-6">
                  Engineer's Spark was founded with a simple yet powerful
                  vision: to create a space where cybersecurity enthusiasts
                  could come together to learn, compete, and push the boundaries
                  of what's possible in the field of information security.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Starting as a small group of passionate students and
                  professionals, we have grown into a recognized cybersecurity
                  club that actively participates in CTF competitions, organizes
                  workshops, and contributes to the broader security community.
                </p>
                <p className="text-lg leading-relaxed">
                  Our members have gone on to work at leading cybersecurity
                  companies, contribute to open-source security projects, and
                  make significant impacts in the field of information security.
                  We continue to foster this tradition of excellence and
                  innovation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-primary/80 border-accent/20 text-center">
              <CardHeader>
                <CardTitle className="text-white text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  We strive for excellence in everything we do, from
                  competitions to research to community building.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-primary/80 border-accent/20 text-center">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  We believe in the power of teamwork and knowledge sharing to
                  achieve greater success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-primary/80 border-accent/20 text-center">
              <CardHeader>
                <CardTitle className="text-white text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  We embrace new technologies and creative approaches to solve
                  complex security challenges.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
