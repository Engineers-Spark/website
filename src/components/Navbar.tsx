import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getAssetPath } from "@/utils/paths";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const events = [
  { name: "SparkCTF", slug: "sparkctf" },
  { name: "PenParty", slug: "penparty" },
  { name: "CyberMaze", slug: "cybermaze" },
  { name: "CyberSphere", slug: "cybersphere" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary border-b border-accent/20 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={getAssetPath("/favicon.png")}
            alt="Engineer's Spark"
            width={40}
            height={40}
            className="rounded-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-white hover:text-accent transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-accent transition-all duration-300 ease-in-out transform hover:scale-105">
              <span>Events</span>
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary border-accent/20">
              {events.map((event) => (
                <DropdownMenuItem key={event.slug} asChild>
                  <Link
                    to={`/events/${event.slug}`}
                    className="text-white hover:text-accent transition-colors duration-200"
                  >
                    {event.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link
                  to="/events"
                  className="text-white hover:text-accent transition-colors duration-200"
                >
                  All Events
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/about"
            className="text-white hover:text-accent transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </Link>

          <Link
            to="/gallery"
            className="text-white hover:text-accent transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Gallery
          </Link>

          <Link
            to="/blog"
            className="text-white hover:text-accent transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Blog
          </Link>

          <Link
            to="/recruitment"
            className="text-white hover:text-accent transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Recruitment
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-primary border-accent/20">
            <div className="flex flex-col space-y-4 mt-8">
              <Link
                to="/"
                className="text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <span className="text-white font-medium">Events</span>
                {events.map((event) => (
                  <Link
                    key={event.slug}
                    to={`/events/${event.slug}`}
                    className="block pl-4 text-white/80 hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {event.name}
                  </Link>
                ))}
                <Link
                  to="/events"
                  className="block pl-4 text-white/80 hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  All Events
                </Link>
              </div>
              <Link
                to="/about"
                className="text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/gallery"
                className="text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/blog"
                className="text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/recruitment"
                className="text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Recruitment
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
