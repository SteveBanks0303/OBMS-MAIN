
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Upload, Banknote, CheckCircle, File, Mail, School, User, Phone, Calendar, MapPin, Book, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const ApplicationPage = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    previousSchool: "",
    program: "",
    additionalInfo: ""
  });

  const programs = [
    { id: "alevel", name: "Cambridge A-Level" },
    { id: "jupeb", name: "JUPEB" },
    { id: "igcse", name: "IGCSE" },
    { id: "toefl", name: "TOEFL Preparation" },
    { id: "sat", name: "SAT Preparation" }
  ];

  const bankDetails = {
    bankName: "Access Bank PLC",
    accountName: "Oritamefa Baptist Model Schools",
    accountNumber: "0123456789"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    console.log("Uploaded file:", uploadedFile);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Modern Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-school-yellow/20 shadow-lg py-4 sticky top-0 z-40">
        <div className="container flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="gap-2 hover:bg-school-yellow/10 text-school-navy font-semibold group">
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-school-yellow to-school-gold rounded-lg flex items-center justify-center">
              <School className="w-6 h-6 text-school-navy" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-school-navy">
              Application Form
            </h1>
          </div>
          <div className="w-24"></div>
        </div>
      </header>

      <div className="container py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-gradient-to-r from-school-yellow to-school-gold rounded-full mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-school-navy mb-4">
              Join OBMS Cambridge A'Level College
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Begin your journey to academic excellence. Complete your application and take the first step towards a bright future.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="xl:col-span-2">
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-school-navy via-school-blue to-school-navy text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-serif flex items-center gap-3">
                    <FileText className="w-7 h-7" />
                    Application Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 pb-3 border-b border-school-yellow/30">
                        <div className="w-8 h-8 bg-gradient-to-br from-school-yellow to-school-gold rounded-lg flex items-center justify-center">
                          <User className="w-5 h-5 text-school-navy" />
                        </div>
                        <h3 className="text-xl font-semibold text-school-navy">Personal Information</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-school-navy font-semibold flex items-center gap-2">
                            <User className="w-4 h-4" />
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="border-2 border-school-blue/20 focus:border-school-yellow rounded-lg h-12"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-school-navy font-semibold flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="border-2 border-school-blue/20 focus:border-school-yellow rounded-lg h-12"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-school-navy font-semibold flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border-2 border-school-blue/20 focus:border-school-yellow rounded-lg h-12"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-school-navy font-semibold flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="border-2 border-school-blue/20 focus:border-school-yellow rounded-lg h-12"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth" className="text-school-navy font-semibold flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Date of Birth *
                        </Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          className="border-2 border-school-blue/20 focus:border-school-yellow rounded-lg h-12"
                          required
                        />
                      </div>
                    </div>

                    {/* Academic Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 pb-3 border-b border-school-yellow/30">
                        <div className="w-8 h-8 bg-gradient-to-br from-school-blue to-school-navy rounded-lg flex items-center justify-center">
                          <Book className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-school-navy">Academic Information</h3>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="previousSchool" className="text-school-navy font-semibold flex items-center gap-2">
                          <School className="w-4 h-4" />
                          Previous School *
                        </Label>
                        <Input
                          id="previousSchool"
                          name="previousSchool"
                          value={formData.previousSchool}
                          onChange={handleInputChange}
                          className="border-2 border-school-blue/20 focus:border-school-yellow rounded-lg h-12"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="program" className="text-school-navy font-semibold flex items-center gap-2">
                          <Book className="w-4 h-4" />
                          Select Program *
                        </Label>
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={(e) => setFormData(prev => ({ ...prev, program: e.target.value }))}
                          className="w-full px-4 py-3 border-2 border-school-blue/20 rounded-lg focus:outline-none focus:border-school-yellow h-12"
                          required
                        >
                          <option value="">Choose a program</option>
                          {programs.map(program => (
                            <option key={program.id} value={program.id}>
                              {program.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 pb-3 border-b border-school-yellow/30">
                        <div className="w-8 h-8 bg-gradient-to-br from-school-gold to-school-yellow rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-school-navy" />
                        </div>
                        <h3 className="text-xl font-semibold text-school-navy">Additional Information</h3>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo" className="text-school-navy font-semibold">
                          Additional Information (Optional)
                        </Label>
                        <Textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleInputChange}
                          className="border-2 border-school-blue/20 focus:border-school-yellow rounded-lg"
                          rows={4}
                          placeholder="Any additional information you'd like to share..."
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Payment & Submission Section */}
            <div className="space-y-6">
              {/* Payment Information */}
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-school-yellow to-school-gold text-school-navy rounded-t-lg">
                  <CardTitle className="text-xl font-serif flex items-center gap-3">
                    <Banknote className="w-6 h-6" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-school-navy/5 p-4 rounded-lg border-l-4 border-school-yellow">
                    <h4 className="font-semibold text-school-navy mb-2">Application Fee</h4>
                    <p className="text-2xl font-bold text-school-gold">₦10,000</p>
                    <p className="text-sm text-gray-600 mt-1">One-time application processing fee</p>
                  </div>
                </CardContent>
              </Card>

              {/* Bank Details */}
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader className="bg-school-navy text-white rounded-t-lg">
                  <CardTitle className="text-lg font-serif">Bank Transfer Details</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <Label className="text-gray-600 text-sm">Bank Name</Label>
                      <p className="font-semibold text-school-navy">{bankDetails.bankName}</p>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <Label className="text-gray-600 text-sm">Account Name</Label>
                      <p className="font-semibold text-school-navy text-right text-sm">{bankDetails.accountName}</p>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <Label className="text-gray-600 text-sm">Account Number</Label>
                      <p className="font-bold text-school-blue text-lg">{bankDetails.accountNumber}</p>
                    </div>
                   </div>
                </CardContent>
              </Card>

              {/* Receipt Upload */}
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-school-gold to-school-yellow text-school-navy rounded-t-lg">
                  <CardTitle className="text-lg font-serif flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Upload Payment Receipt
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm">
                      Please upload your payment receipt or bank teller after making the payment.
                    </p>
                    <div className="border-2 border-dashed border-school-yellow/50 rounded-xl p-6 text-center hover:border-school-yellow transition-colors bg-gradient-to-br from-school-yellow/5 to-school-gold/5">
                      <Upload className="h-12 w-12 text-school-yellow mx-auto mb-4" />
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="receipt-upload"
                      />
                      <label htmlFor="receipt-upload" className="cursor-pointer">
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="border-2 border-school-yellow text-school-navy hover:bg-school-yellow/10 rounded-lg"
                          asChild
                        >
                          <span>Choose File</span>
                        </Button>
                      </label>
                      {uploadedFile && (
                        <div className="mt-4 flex items-center justify-center space-x-2 text-school-navy">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <File className="h-4 w-4" />
                          <span className="text-sm font-medium">{uploadedFile.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Information Notice */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-school-blue/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-school-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-school-navy mb-2">What happens next?</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Once you submit your application with payment proof, our admissions team will review your details within 2-3 business days. 
                        You will receive a confirmation email with further instructions and your application status.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-school-navy to-school-blue hover:from-school-blue hover:to-school-navy text-white font-bold py-4 text-lg shadow-xl transform transition-all duration-300 hover:scale-105 rounded-xl h-14"
                size="lg"
              >
                Submit Application
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
