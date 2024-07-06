import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="space-y-10">
      {/* Services Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Service 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Service 1 description goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Service 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Service 2 description goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Service 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Service 3 description goes here.</p>
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

export default Services;