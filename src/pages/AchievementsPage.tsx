import { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";

// Extended student results data with more entries
const extendedStudentResults: StudentResults = {
  "2023": [
    {
      id: 1,
      name: "Oluwaseun Adeyemi",
      photo: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Mathematics": "A*",
        "Physics": "A",
        "Chemistry": "A*"
      }
    },
    {
      id: 2,
      name: "Chioma Okafor",
      photo: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Biology": "A*",
        "Chemistry": "A",
        "Physics": "B"
      }
    },
    {
      id: 3,
      name: "David Ogunlola",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Economics": "A",
        "Mathematics": "A*",
        "Further Mathematics": "A"
      }
    },
    // Additional students
    {
      id: 4,
      name: "Folake Adeleke",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "English Literature": "A",
        "History": "A*",
        "Government": "A"
      }
    },
    {
      id: 5,
      name: "Emeka Nwachukwu",
      photo: "https://images.unsplash.com/photo-1506277439604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Physics": "A*",
        "Mathematics": "A*",
        "Chemistry": "A"
      }
    },
    {
      id: 6,
      name: "Amina Mohammed",
      photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Biology": "A*",
        "Chemistry": "A*",
        "Physics": "A"
      }
    },
    {
      id: 7,
      name: "Tunde Bakare",
      photo: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Economics": "A*",
        "Government": "A",
        "Mathematics": "A"
      }
    },
    {
      id: 8,
      name: "Ngozi Okonkwo",
      photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Literature": "A*",
        "History": "A*",
        "Government": "A"
      }
    },
    {
      id: 9,
      name: "Yusuf Ibrahim",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Further Mathematics": "A*",
        "Physics": "A*",
        "Chemistry": "A"
      }
    },
    {
      id: 10,
      name: "Grace Chukwu",
      photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Biology": "A",
        "Chemistry": "A",
        "Mathematics": "A*"
      }
    }
  ],
  "2022": [
    {
      id: 1,
      name: "Adeola Johnson",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Mathematics": "A",
        "Physics": "A*",
        "Chemistry": "A"
      }
    },
    {
      id: 2,
      name: "Emmanuel Okonkwo",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Biology": "A",
        "Chemistry": "A",
        "Physics": "A*"
      }
    },
    {
      id: 3,
      name: "Fatima Abubakar",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Literature": "A*",
        "History": "A",
        "Economics": "A"
      }
    },
    // Additional students
    {
      id: 4,
      name: "Chinedu Okeke",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Mathematics": "A*",
        "Further Mathematics": "A",
        "Physics": "A"
      }
    },
    {
      id: 5,
      name: "Aisha Bello",
      photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Biology": "A",
        "Chemistry": "A",
        "Mathematics": "A"
      }
    },
    {
      id: 6,
      name: "Olumide Adebayo",
      photo: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Physics": "A*",
        "Chemistry": "A*",
        "Mathematics": "A*"
      }
    },
    {
      id: 7,
      name: "Blessing Eze",
      photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Economics": "A",
        "Government": "A*",
        "History": "A"
      }
    },
    {
      id: 8,
      name: "Abimbola Adelabu",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "English Literature": "A*",
        "Government": "A",
        "History": "A"
      }
    },
    {
      id: 9,
      name: "Kabiru Mohammed",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Mathematics": "A",
        "Physics": "A",
        "Chemistry": "A"
      }
    },
    {
      id: 10,
      name: "Nneka Okafor",
      photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Biology": "A",
        "Chemistry": "A*",
        "Mathematics": "A"
      }
    }
  ],
  "2021": [
    {
      id: 1,
      name: "Gabriel Mensah",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Mathematics": "A*",
        "Further Mathematics": "A",
        "Physics": "A*"
      }
    },
    {
      id: 2,
      name: "Hannah Adeleke",
      photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Chemistry": "A*",
        "Biology": "A*",
        "Mathematics": "A"
      }
    },
    {
      id: 3,
      name: "Ibrahim Taiwo",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Economics": "A",
        "Government": "A",
        "Literature": "A*"
      }
    },
    {
      id: 4,
      name: "Esther Oluwole",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Mathematics": "A",
        "Physics": "A",
        "Chemistry": "B"
      }
    },
    {
      id: 5,
      name: "Daniel Usman",
      photo: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Biology": "A",
        "Chemistry": "A",
        "Physics": "A"
      }
    },
    {
      id: 6,
      name: "Ruth Eze",
      photo: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Economics": "A",
        "Government": "A",
        "Literature": "A"
      }
    },
    {
      id: 7,
      name: "Samuel Adebayo",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Mathematics": "A*",
        "Further Mathematics": "A",
        "Physics": "A"
      }
    },
    {
      id: 8,
      name: "Deborah Musa",
      photo: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Biology": "A",
        "Chemistry": "A*",
        "Mathematics": "A"
      }
    },
    {
      id: 9,
      name: "Joseph Okoro",
      photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Economics": "A",
        "Government": "A",
        "History": "A*"
      }
    },
    {
      id: 10,
      name: "Peace Adebisi",
      photo: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Literature": "A*",
        "History": "A",
        "Geography": "A"
      }
    }
  ],
  "2020": [
    {
      id: 1,
      name: "Oluwaseun Adeyemi",
      photo: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Mathematics": "A*",
        "Physics": "A",
        "Chemistry": "A*"
      }
    },
    {
      id: 2,
      name: "Chioma Okafor",
      photo: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Biology": "A*",
        "Chemistry": "A",
        "Physics": "B"
      }
    },
    {
      id: 3,
      name: "David Ogunlola",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Economics": "A",
        "Mathematics": "A*",
        "Further Mathematics": "A"
      }
    },
    // Additional students
    {
      id: 4,
      name: "Folake Adeleke",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "English Literature": "A",
        "History": "A*",
        "Government": "A"
      }
    },
    {
      id: 5,
      name: "Emeka Nwachukwu",
      photo: "https://images.unsplash.com/photo-1506277439604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Physics": "A*",
        "Mathematics": "A*",
        "Chemistry": "A"
      }
    },
    {
      id: 6,
      name: "Amina Mohammed",
      photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Biology": "A*",
        "Chemistry": "A*",
        "Physics": "A"
      }
    },
    {
      id: 7,
      name: "Tunde Bakare",
      photo: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Economics": "A*",
        "Government": "A",
        "Mathematics": "A"
      }
    },
    {
      id: 8,
      name: "Ngozi Okonkwo",
      photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Literature": "A*",
        "History": "A*",
        "Government": "A"
      }
    },
    {
      id: 9,
      name: "Yusuf Ibrahim",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Further Mathematics": "A*",
        "Physics": "A*",
        "Chemistry": "A"
      }
    },
    {
      id: 10,
      name: "Grace Chukwu",
      photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
      subjects: {
        "Biology": "A",
        "Chemistry": "A",
        "Mathematics": "A*"
      }
    }
  ]
};

// Pass rate data for detailed charts
const passRateData = {
  "2023": [
    { subject: "Mathematics", passRate: 100, students: 25 },
    { subject: "Physics", passRate: 98, students: 20 },
    { subject: "Chemistry", passRate: 96, students: 22 },
    { subject: "Biology", passRate: 100, students: 18 },
    { subject: "Economics", passRate: 95, students: 15 },
    { subject: "Literature", passRate: 92, students: 8 }
  ],
  "2022": [
    { subject: "Mathematics", passRate: 98, students: 22 },
    { subject: "Physics", passRate: 95, students: 18 },
    { subject: "Chemistry", passRate: 94, students: 20 },
    { subject: "Biology", passRate: 97, students: 16 },
    { subject: "Economics", passRate: 90, students: 12 },
    { subject: "Literature", passRate: 88, students: 10 }
  ],
  "2021": [
    { subject: "Mathematics", passRate: 96, students: 20 },
    { subject: "Physics", passRate: 92, students: 16 },
    { subject: "Chemistry", passRate: 95, students: 18 },
    { subject: "Biology", passRate: 94, students: 14 },
    { subject: "Economics", passRate: 88, students: 10 },
    { subject: "Literature", passRate: 85, students: 8 }
  ]
};

interface Subject {
  [key: string]: string;
}

interface Student {
  id: number;
  name: string;
  photo: string;
  subjects: Subject;
}

interface StudentResults {
  [year: string]: Student[];
}

const chartConfig = {
  passRate: { label: "Pass Rate (%)", color: "#FFD700" },
  students: { label: "Students", color: "#1E40AF" }
};

const AchievementsPage = () => {
  const [activeTab, setActiveTab] = useState("2023");
  const [searchTerm, setSearchTerm] = useState("");
  
  const years = Object.keys(extendedStudentResults).sort((a, b) => b.localeCompare(a));
  
  // Filter students based on search
  const filteredStudents = extendedStudentResults[activeTab].filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-gradient-to-br from-school-blue-light to-school-blue">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg py-3 md:py-4 z-50 border-b border-school-yellow/20">
        <div className="container flex items-center px-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2 hover:bg-school-yellow/20 text-school-blue font-medium">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </Link>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center flex-grow mr-8 sm:mr-14 text-school-blue font-serif">
            Student Achievements
          </h1>
        </div>
      </header>
      
      <main className="flex-grow w-full pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-school-blue to-school-blue-dark py-12 md:py-16 lg:py-20">
          <div className="container text-center text-white px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-serif" data-aos="fade-up">
              Our Academic Excellence
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Celebrating outstanding Cambridge A-Level results and the remarkable achievements of our students
            </p>
          </div>
        </section>
        
        <section className="py-8 md:py-12 lg:py-16 bg-white">
          <div className="container px-4">
            {/* Search and filters */}
            <div className="mb-8 md:mb-12 max-w-4xl mx-auto">
              <p className="text-gray-700 text-center mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                Browse through our comprehensive examination results. 
                Our students consistently achieve exceptional results across all subjects.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
                <div className="relative flex-grow max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    placeholder="Search for a student..." 
                    className="pl-10 border-school-blue/20 focus:border-school-yellow"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={() => setSearchTerm("")} 
                  variant="outline" 
                  className="whitespace-nowrap border-school-blue text-school-blue hover:bg-school-yellow/20"
                >
                  Clear Search
                </Button>
              </div>
            </div>
            
            <div className="overflow-hidden" data-aos="fade-up">
              <Tabs 
                defaultValue="2023" 
                value={activeTab} 
                onValueChange={setActiveTab} 
                className="w-full"
              >
                <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-6 md:mb-8 bg-school-blue/10">
                  {years.map(year => (
                    <TabsTrigger 
                      key={year} 
                      value={year} 
                      className="data-[state=active]:bg-school-blue data-[state=active]:text-white text-sm md:text-base font-medium"
                    >
                      {year}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {years.map(year => (
                  <TabsContent key={year} value={year} className="mt-0 space-y-6 md:space-y-8">
                    {/* Student Results Table */}
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-school-blue/10">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-school-blue text-white hover:bg-school-blue">
                              <TableHead className="text-white text-xs md:text-sm">Photo</TableHead>
                              <TableHead className="text-white text-xs md:text-sm">Student Name</TableHead>
                              <TableHead className="text-white text-xs md:text-sm">Subject 1</TableHead>
                              <TableHead className="text-white text-xs md:text-sm">Subject 2</TableHead>
                              <TableHead className="text-white text-xs md:text-sm">Subject 3</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {filteredStudents.length > 0 ? (
                              filteredStudents.map((student) => {
                                const subjects = Object.entries(student.subjects);
                                
                                return (
                                  <TableRow key={student.id} className="hover:bg-school-yellow/10 transition-colors">
                                    <TableCell className="p-2 md:p-4">
                                      <div className="w-10 h-10 md:w-16 md:h-16 overflow-hidden rounded-full border-2 border-school-yellow shadow-md">
                                        <LazyLoadImage
                                          src={student.photo}
                                          alt={student.name}
                                          effect="blur"
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                    </TableCell>
                                    <TableCell className="font-medium text-school-blue text-xs md:text-sm">{student.name}</TableCell>
                                    <TableCell className="text-xs md:text-sm">
                                      <span className="text-gray-600">{subjects[0] ? subjects[0][0] : ""}: </span>
                                      <span className="font-bold text-school-blue">{subjects[0] ? subjects[0][1] : ""}</span>
                                    </TableCell>
                                    <TableCell className="text-xs md:text-sm">
                                      <span className="text-gray-600">{subjects[1] ? subjects[1][0] : ""}: </span>
                                      <span className="font-bold text-school-blue">{subjects[1] ? subjects[1][1] : ""}</span>
                                    </TableCell>
                                    <TableCell className="text-xs md:text-sm">
                                      <span className="text-gray-600">{subjects[2] ? subjects[2][0] : ""}: </span>
                                      <span className="font-bold text-school-blue">{subjects[2] ? subjects[2][1] : ""}</span>
                                    </TableCell>
                                  </TableRow>
                                );
                              })
                            ) : (
                              <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 text-gray-500 text-sm md:text-base">
                                  No students found matching your search criteria
                                </TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AchievementsPage;
