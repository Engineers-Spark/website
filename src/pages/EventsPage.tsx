import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building, Calendar, Clock, MapPin, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "SparkCTF 2024",
    slug: "sparkctf-2024",
    description:
      "Our flagship annual CTF competition featuring web security, cryptography, and reverse engineering challenges.",
    date: "December 15-17, 2024",
    status: "upcoming",
    participants: 150,
    duration: "48 hours",
    location: "Online & ISETCOM Campus",
    branch: "ISETCOM",
    categories: [
      "Web Security",
      "Cryptography",
      "Reverse Engineering",
      "Forensics",
    ],
  },
  {
    id: 2,
    title: "Winter Security Challenge",
    slug: "winter-security-challenge",
    description:
      "A themed security challenge focusing on network security and penetration testing techniques.",
    date: "November 20-22, 2024",
    status: "completed",
    participants: 89,
    duration: "36 hours",
    location: "Online",
    branch: "Multi-Branch",
    categories: ["Network Security", "Penetration Testing", "OSINT"],
  },
  {
    id: 3,
    title: "Beginner CTF Workshop",
    slug: "beginner-ctf-workshop",
    description:
      "An introductory workshop for newcomers to learn the basics of CTF competitions and cybersecurity.",
    date: "October 15, 2024",
    status: "completed",
    participants: 45,
    duration: "6 hours",
    location: "ISETCOM Campus - Room A101",
    branch: "ISETCOM",
    categories: ["Workshop", "Beginner Friendly", "Hands-on Learning"],
  },
  {
    id: 4,
    title: "Advanced Malware Analysis",
    slug: "advanced-malware-analysis",
    description:
      "Deep dive into malware analysis techniques using static and dynamic analysis tools.",
    date: "September 28, 2024",
    status: "completed",
    participants: 32,
    duration: "8 hours",
    location: "ENSI Campus - Lab B203",
    branch: "ENSI",
    categories: ["Malware Analysis", "Reverse Engineering", "Advanced"],
  },
  {
    id: 5,
    title: "Web Application Security",
    slug: "web-application-security",
    description:
      "Comprehensive workshop covering OWASP Top 10 vulnerabilities and secure coding practices.",
    date: "September 10, 2024",
    status: "completed",
    participants: 67,
    duration: "4 hours",
    location: "ESPRIT Campus - Amphitheater",
    branch: "ESPRIT",
    categories: ["Web Security", "OWASP", "Secure Coding"],
  },
  {
    id: 6,
    title: "Cryptography Fundamentals",
    slug: "cryptography-fundamentals",
    description:
      "Introduction to cryptographic concepts, algorithms, and their practical applications in security.",
    date: "August 25, 2024",
    status: "completed",
    participants: 54,
    duration: "5 hours",
    location: "ISETCOM Campus - Room C105",
    branch: "ISETCOM",
    categories: ["Cryptography", "Theory", "Practical Applications"],
  },
];

export default function EventsPage() {
  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "completed");

  return (
    <div className="min-h-screen bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Events & Competitions
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join our CTF competitions, workshops, and training sessions across
            multiple university branches to enhance your cybersecurity skills
            and connect with the community.
          </p>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              <Trophy className="w-8 h-8 text-accent" />
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="bg-primary/80 border-accent/20 hover:border-accent/40 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-accent/20 text-accent border-accent/40">
                        {event.status.toUpperCase()}
                      </Badge>
                      <div className="flex items-center gap-1 text-accent text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{event.participants} participants</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span>{event.branch}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.categories.slice(0, 3).map((category) => (
                        <Badge
                          key={category}
                          variant="outline"
                          className="border-accent/40 text-accent text-xs"
                        >
                          {category}
                        </Badge>
                      ))}
                      {event.categories.length > 3 && (
                        <Badge
                          variant="outline"
                          className="border-accent/40 text-accent text-xs"
                        >
                          +{event.categories.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button
                      asChild
                      className="w-full bg-accent hover:bg-accent/90 text-primary"
                    >
                      <Link to={`/events/${event.slug}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <Calendar className="w-8 h-8 text-accent" />
            Past Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card
                key={event.id}
                className="bg-primary/80 border-accent/20 hover:border-accent/40 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="outline"
                      className="border-white/40 text-white/60"
                    >
                      COMPLETED
                    </Badge>
                    <div className="flex items-center gap-1 text-white/60 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{event.participants} participants</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        <span>{event.branch}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.categories.slice(0, 3).map((category) => (
                      <Badge
                        key={category}
                        variant="outline"
                        className="border-accent/40 text-accent text-xs"
                      >
                        {category}
                      </Badge>
                    ))}
                    {event.categories.length > 3 && (
                      <Badge
                        variant="outline"
                        className="border-accent/40 text-accent text-xs"
                      >
                        +{event.categories.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-primary bg-transparent"
                  >
                    <Link to={`/events/${event.slug}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
