import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Github, Lightbulb, Mail, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Skill Development",
    description:
      "Enhance your cybersecurity skills through hands-on experience and mentorship",
  },
  {
    icon: Users,
    title: "Networking",
    description:
      "Connect with industry professionals and like-minded cybersecurity enthusiasts",
  },
  {
    icon: Code,
    title: "Real Experience",
    description:
      "Gain practical experience through competitions, projects, and workshops",
  },
  {
    icon: Lightbulb,
    title: "Leadership",
    description:
      "Develop leadership skills by organizing events and mentoring newcomers",
  },
];

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Join Engineer's Spark
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Be part of Tunisia's premier cybersecurity club and help shape the
            future of information security.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Join Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-primary/80 border-accent/20 text-center"
              >
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-white">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Branch Opening Information */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Open a Branch at Your University
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary/80 border-accent/20 mb-8">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Expand Engineer's Spark to Your Campus
                  </h3>
                  <p className="text-white/80 text-lg">
                    Interested in bringing Engineer's Spark to your university?
                    We're always looking to expand our community and establish
                    new branches across Tunisia's educational institutions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">
                      What We Offer:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-white/80">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Complete setup guidance and support</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/80">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Access to our educational resources and materials
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-white/80">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Training for branch coordinators</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/80">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Collaboration opportunities with other branches
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-white/80">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Official Engineer's Spark branding and recognition
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">
                      Requirements:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-white/80">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>At least 3-5 committed founding members</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/80">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>University administration approval</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/80">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Dedicated space for activities and meetings</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/80">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Commitment to organize regular events</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/80">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Faculty advisor or supervisor</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Format Section */}
            <Card className="bg-primary/80 border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Email Application Format
                </h3>
                <p className="text-white/80 mb-6 text-center">
                  To request opening a new branch, please send an email to{" "}
                  <a
                    href="mailto:engineers.spark@edu.isetcom.tn"
                    className="text-accent hover:text-accent/80"
                  >
                    engineers.spark@edu.isetcom.tn
                  </a>{" "}
                  with the following information:
                </p>

                <div className="bg-primary/60 border border-accent/20 rounded-lg p-6">
                  <div className="space-y-4 text-sm font-mono">
                    <div>
                      <span className="text-accent">Subject:</span>
                      <span className="text-white/80">
                        {" "}
                        Branch Opening Request - [University Name]
                      </span>
                    </div>

                    <div className="border-t border-accent/20 pt-4">
                      <div className="space-y-3 text-white/80">
                        <div>
                          <span className="text-accent font-semibold">
                            University Information:
                          </span>
                        </div>
                        <div className="ml-4">
                          <div>• University Name:</div>
                          <div>• Location (City, Region):</div>
                          <div>• Number of Students (approximate):</div>
                          <div>• Relevant Departments/Faculties:</div>
                        </div>

                        <div className="pt-2">
                          <span className="text-accent font-semibold">
                            Contact Person:
                          </span>
                        </div>
                        <div className="ml-4">
                          <div>• Full Name:</div>
                          <div>• Position (Student/Faculty/Staff):</div>
                          <div>• Email Address:</div>
                          <div>• Phone Number:</div>
                          <div>• Department/Year of Study:</div>
                        </div>

                        <div className="pt-2">
                          <span className="text-accent font-semibold">
                            Founding Team:
                          </span>
                        </div>
                        <div className="ml-4">
                          <div>
                            • List of founding members (Name, Department, Year)
                          </div>
                          <div>
                            • Brief background in cybersecurity for each member
                          </div>
                          <div>
                            • Previous experience with clubs/organizations
                          </div>
                        </div>

                        <div className="pt-2">
                          <span className="text-accent font-semibold">
                            Motivation & Plans:
                          </span>
                        </div>
                        <div className="ml-4">
                          <div>• Why do you want to open a branch?</div>
                          <div>
                            • Current cybersecurity interest level at your
                            university
                          </div>
                          <div>
                            • Planned activities and events for the first year
                          </div>
                          <div>• Expected number of members</div>
                        </div>

                        <div className="pt-2">
                          <span className="text-accent font-semibold">
                            Resources & Support:
                          </span>
                        </div>
                        <div className="ml-4">
                          <div>• Available meeting spaces</div>
                          <div>• University administration support status</div>
                          <div>• Potential faculty advisor</div>
                          <div>• Technical resources (labs, equipment)</div>
                        </div>

                        <div className="pt-2">
                          <span className="text-accent font-semibold">
                            Additional Information:
                          </span>
                        </div>
                        <div className="ml-4">
                          <div>• Any questions or specific requirements</div>
                          <div>• Preferred timeline for establishment</div>
                          <div>
                            • Any existing cybersecurity initiatives at your
                            university
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <p className="text-white/80 text-sm">
                    <span className="text-accent font-semibold">Note:</span> We
                    review all applications carefully and will respond within
                    2-3 weeks. Successful applicants will be invited for a video
                    call to discuss next steps and receive detailed guidance on
                    establishing their branch.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Application Process
          </h2>
          <Card className="bg-primary/80 border-accent/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    Submit Application
                  </h3>
                  <p className="text-white/70 text-sm">
                    Fill out our application form with your background,
                    interests, and preferred role.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-white font-semibold mb-2">Interview</h3>
                  <p className="text-white/70 text-sm">
                    Participate in a casual interview to discuss your goals and
                    how you can contribute.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-white font-semibold mb-2">Welcome</h3>
                  <p className="text-white/70 text-sm">
                    Join our community and start participating in events,
                    workshops, and competitions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            General Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-primary/80 border-accent/20">
              <CardHeader>
                <CardTitle className="text-white">For Students</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Currently enrolled in a university or technical institute
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Interest in cybersecurity and information security
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Commitment to learning and participating in club
                      activities
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Basic programming knowledge (any language)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/80 border-accent/20">
              <CardHeader>
                <CardTitle className="text-white">For Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Professional experience in cybersecurity or related field
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Willingness to mentor and share knowledge</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Available time to contribute to club activities</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Passion for building the cybersecurity community
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact & Apply */}
        <div className="text-center">
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Ready to Join?
              </h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Take the first step towards becoming part of Tunisia's premier
                cybersecurity community. We're always looking for passionate
                individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Apply Now
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
                    View Our Work
                  </a>
                </Button>
              </div>
              <div className="mt-8 pt-8 border-t border-accent/20">
                <p className="text-white/60 mb-4">
                  Have questions? Get in touch with us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a
                    href="mailto:engineers.spark@edu.isetcom.tn"
                    className="text-accent hover:text-accent/80 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    engineers.spark@edu.isetcom.tn
                  </a>
                  <a
                    href="https://github.com/Engineers-Spark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Engineers-Spark
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
