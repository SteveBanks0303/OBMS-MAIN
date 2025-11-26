
import { Link } from "react-router-dom";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Pass rate data for charts
const passRateData = {
  "2023": {
    overall: 98.5,
    breakdown: [
      { grade: "A*", count: 45, percentage: 42 },
      { grade: "A", count: 38, percentage: 35 },
      { grade: "B", count: 23, percentage: 21 },
      { grade: "C", count: 2, percentage: 2 }
    ],
    totalStudents: 108
  },
  "2022": {
    overall: 96.8,
    breakdown: [
      { grade: "A*", count: 38, percentage: 38 },
      { grade: "A", count: 42, percentage: 42 },
      { grade: "B", count: 17, percentage: 17 },
      { grade: "C", count: 3, percentage: 3 }
    ],
    totalStudents: 100
  },
  "2021": {
    overall: 97.2,
    breakdown: [
      { grade: "A*", count: 35, percentage: 35 },
      { grade: "A", count: 45, percentage: 45 },
      { grade: "B", count: 17, percentage: 17 },
      { grade: "C", count: 3, percentage: 3 }
    ],
    totalStudents: 100
  }
};

const COLORS = ['#FFD700', '#FFA500', '#FF8C00', '#FF6347'];

const chartConfig = {
  "A*": { label: "A*", color: "#FFD700" },
  "A": { label: "A", color: "#FFA500" },
  "B": { label: "B", color: "#FF8C00" },
  "C": { label: "C", color: "#FF6347" }
};

const Achievements = () => {
  const years = Object.keys(passRateData).sort((a, b) => b.localeCompare(a));
  
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-white to-school-gray-light" id="achievements">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-school-yellow to-school-gold rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-navy mb-4">Academic Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Our students consistently achieve outstanding results in Cambridge A-Level examinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10" data-aos="fade-up" data-aos-delay="200">
          {years.map((year, index) => (
            <div 
              key={year} 
              className="bg-white rounded-xl p-6 shadow-lg border border-school-blue/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up" 
              data-aos-delay={300 + index * 100}
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-serif font-bold text-school-navy mb-1">{year} Results</h3>
                <div className="text-3xl font-bold text-school-yellow mb-1">
                  {passRateData[year as keyof typeof passRateData].overall}%
                </div>
                <p className="text-gray-600 text-sm">Overall Pass Rate</p>
                <p className="text-gray-500 text-xs mt-1">
                  {passRateData[year as keyof typeof passRateData].totalStudents} Students
                </p>
              </div>
              
              <div className="h-32 mb-4">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={passRateData[year as keyof typeof passRateData].breakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={20}
                        outerRadius={60}
                        paddingAngle={2}
                        dataKey="percentage"
                      >
                        {passRateData[year as keyof typeof passRateData].breakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip 
                        content={({ active, payload }) => {
                          if (active && payload && payload[0]) {
                            const data = payload[0].payload;
                            return (
                              <div className="bg-white p-2 rounded-lg shadow-lg border">
                                <p className="font-medium text-sm">Grade {data.grade}</p>
                                <p className="text-xs text-gray-600">{data.count} students ({data.percentage}%)</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              
              <div className="space-y-1">
                {passRateData[year as keyof typeof passRateData].breakdown.map((item, index) => (
                  <div key={item.grade} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: COLORS[index] }}
                      ></div>
                      <span className="font-medium">Grade {item.grade}</span>
                    </div>
                    <span className="text-gray-600">{item.count} ({item.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <Link to="/achievements">
            <button className="bg-gradient-to-r from-school-yellow to-school-gold hover:from-school-gold hover:to-school-yellow text-school-navy font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View Detailed Results
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
