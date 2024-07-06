import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-10">
      {/* Mission Statement */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Our Mission</h2>
        <p className="mt-4 text-center">To innovate and lead in our industry, providing top-notch services to our clients.</p>
      </section>

      {/* Team Members */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>John Doe</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="John Doe" className="w-24 h-24 rounded-full mx-auto object-cover" />
              <p className="mt-4 text-center">CEO</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Jane Smith</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Jane Smith" className="w-24 h-24 rounded-full mx-auto object-cover" />
              <p className="mt-4 text-center">CTO</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mike Johnson</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Mike Johnson" className="w-24 h-24 rounded-full mx-auto object-cover" />
              <p className="mt-4 text-center">CFO</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold">Our Startup</h3>
              <p className="mt-2">Innovating the future, one step at a time.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">Facebook</a>
              <a href="#" className="text-white hover:text-gray-400">Twitter</a>
              <a href="#" className="text-white hover:text-gray-400">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;