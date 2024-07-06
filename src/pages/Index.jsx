import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gray-200">
        <img src="/placeholder.svg" alt="placeholder" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">Welcome to Our Startup</h1>
          <p className="mt-4 text-lg">Innovating the future, one step at a time.</p>
          <Button className="mt-6">Get Started</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Our Features</h2>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Feature 1 description goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Feature 2 description goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Feature 3 description goes here.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">What Our Customers Say</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <img src="/placeholder.svg" alt="Customer" className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h3 className="text-lg font-bold">Customer 1</h3>
                      <p className="text-sm">"Great service!"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <img src="/placeholder.svg" alt="Customer" className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h3 className="text-lg font-bold">Customer 2</h3>
                      <p className="text-sm">"Amazing experience!"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <img src="/placeholder.svg" alt="Customer" className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h3 className="text-lg font-bold">Customer 3</h3>
                      <p className="text-sm">"Highly recommend!"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
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

export default Index;