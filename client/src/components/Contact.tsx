import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  const mutation = useSubmitContact();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in discussing a project or looking for technical leadership? 
              I'm always open to new opportunities and challenges.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <a href="mailto:saurabhsainiid12@rediffmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    saurabhsainiid12@rediffmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Phone</h3>
                  <a href="tel:+918073110295" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 8073110295
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Location</h3>
                  <p className="text-muted-foreground">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
