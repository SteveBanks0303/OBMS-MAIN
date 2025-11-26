
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Placeholder images - replace with actual images
const images = {
  facilities: "https://images.unsplash.com/photo-1513677785800-9acdfd640c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  achievements: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  admissions: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
};

const QuickLinks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/3 after:right-1/3">Discover More</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our facilities, student achievements, and learn about the admissions process at Oritamefa Baptist Model Schools A-Level College.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Facilities */}
          <Card className="overflow-hidden h-full border-none shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src={images.facilities} 
                alt="School Facilities" 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-serif text-xl text-school-navy">World-Class Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Explore our modern campus featuring well-equipped laboratories, comfortable hostels, comprehensive libraries, and recreational facilities.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-school-navy hover:bg-school-navy/90 w-full">
                <Link to="/facilities">View Facilities</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Achievements */}
          <Card className="overflow-hidden h-full border-none shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src={images.achievements} 
                alt="Student Achievements" 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-serif text-xl text-school-navy">Student Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Discover our students' impressive academic results, scholarship awards, and university placements around the world.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-school-navy hover:bg-school-navy/90 w-full">
                <Link to="/achievements">View Achievements</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Admissions */}
          <Card className="overflow-hidden h-full border-none shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src={images.admissions} 
                alt="Admissions Process" 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-serif text-xl text-school-navy">Join Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Learn about our admissions requirements, application process, and how to become part of our academic community.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-school-navy hover:bg-school-navy/90 w-full">
                <Link to="/admissions">Admissions Info</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
