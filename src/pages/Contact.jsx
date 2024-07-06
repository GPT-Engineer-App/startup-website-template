import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-10">
      {/* Contact Form */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto mt-8 space-y-4">
          <div>
            <Input placeholder="Name" {...register("name", { required: true })} />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Input type="email" placeholder="Email" {...register("email", { required: true })} />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Input placeholder="Subject" {...register("subject", { required: true })} />
            {errors.subject && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Textarea placeholder="Message" {...register("message", { required: true })} />
            {errors.message && <span className="text-red-500">This field is required</span>}
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      {/* Contact Details */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Our Contact Details</h2>
        <div className="mt-8 text-center">
          <p>123 Startup St, Innovation City, IN 12345</p>
          <p>Email: contact@startup.com</p>
          <p>Phone: (123) 456-7890</p>
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

export default Contact;