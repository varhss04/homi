import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { API_BASE_URL } from "@/config/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Registration = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    grade: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    pincode: "",
    landmark: "",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.parentName || !formData.studentName || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!agreeToTerms) {
      toast({
        title: "Terms and Conditions",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/registrations/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parent_name: formData.parentName,
          student_name: formData.studentName,
          grade: formData.grade,
          phone: formData.phone,
          email: formData.email,
          address_line1: formData.addressLine1,
          address_line2: formData.addressLine2,
          city: formData.city,
          pincode: formData.pincode,
          landmark: formData.landmark,
        }),
      });

      let result;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        throw new Error('Server error: Please try again or contact support');
      }

      if (!result.success) {
        throw new Error(result.error || 'Failed to submit registration');
      }

      console.log('Registration submitted to MongoDB:', result);

      toast({
        title: "Thank you for registering!",
        description: "Thankyou for registering with Homi, we will soon get in contact with you",
      });

      // Refresh the page after a short delay to clear the form
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error: any) {
      console.error("Error submitting registration:", error);
      toast({
        title: "Registration Failed",
        description: error.message || "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="register" className="py-20 bg-background animate-in slide-in-from-bottom-4 duration-1000 delay-700">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Register Your Interest
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get in touch with you soon
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="parentName">Parent Name *</Label>
                <Input
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentName">Student Name *</Label>
                <Input
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  placeholder="Enter student's name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="grade">Student Grade</Label>
                <Select
                  value={formData.grade}
                  onValueChange={(value) => setFormData({ ...formData, grade: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st Grade">1st Grade</SelectItem>
                    <SelectItem value="2nd Grade">2nd Grade</SelectItem>
                    <SelectItem value="3rd Grade">3rd Grade</SelectItem>
                    <SelectItem value="4th Grade">4th Grade</SelectItem>
                    <SelectItem value="5th Grade">5th Grade</SelectItem>
                    <SelectItem value="6th Grade">6th Grade</SelectItem>
                    <SelectItem value="7th Grade">7th Grade</SelectItem>
                    <SelectItem value="8th Grade">8th Grade</SelectItem>
                    <SelectItem value="9th Grade">9th Grade</SelectItem>
                    <SelectItem value="10th Grade">10th Grade</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Parent Contact Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Parent Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="parent.email@example.com"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">Delivery Address</Label>
              
              <div className="space-y-2">
                <Label htmlFor="addressLine1">Address Line 1</Label>
                <Input
                  id="addressLine1"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  placeholder="House No., Building Name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="addressLine2">Address Line 2</Label>
                <Input
                  id="addressLine2"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                  placeholder="Street, Area"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="landmark">Landmark</Label>
                <Input
                  id="landmark"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  placeholder="Nearby landmark"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter pincode"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreeToTerms}
                onCheckedChange={setAgreeToTerms}
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to all the{" "}
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="text-primary hover:underline font-medium"
                    >
                      terms and conditions
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-primary text-xl font-bold">Homi – Parent Consent & Terms of Service (Trial Phase)</DialogTitle>
                      <DialogDescription className="text-base">
                        This consent is provided by the parent/guardian opting to use the lunch delivery service offered by Homi during the trial period.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">1. Nature of the Service</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Homi provides a lunch pickup and delivery service, wherein home-packed lunch bags are collected from designated pickup points and delivered to the school before lunch time, as per the agreed schedule. The service is optional and availed at the discretion of the parent/guardian.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">2. Trial Phase Disclaimer</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          The service is currently offered as a trial service for a limited period and limited number of users and is provided free of cost. Processes may be refined during the trial based on operational requirements and feedback.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">3. Timings & Delivery</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Pickup and delivery will be carried out within predefined time windows. While every effort will be made to ensure timely delivery, exact delivery times cannot be guaranteed.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">4. Unforeseen Delays & Circumstances</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Homi shall not be held responsible for delays or disruptions caused due to unforeseen or unavoidable circumstances including vehicle breakdowns, traffic congestion, weather conditions, road closures, strikes, or situations beyond reasonable operational control.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">5. Handling & Safety</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Lunch bags will be handled with reasonable care. Parents are responsible for proper packing and sealing of food containers. Homi does not inspect or verify food quality, quantity, or contents.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">6. School Coordination</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Lunch bags will be delivered to the designated drop-off area within the school, as approved by the school authorities. Students are required to collect their respective lunch bags from the designated drop-off area as instructed by the school officials. Homi's responsibility concludes upon delivery at the designated school location.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">7. Limitation of Liability</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Homi shall not be held liable for food spoilage, allergic reactions, health issues, or loss due to improper packing. In the event of a missed or delayed delivery, liability is limited to discontinuation of service for the day without further claims.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">8. Communication</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Parents agree to receive service-related communication via phone or messaging platforms for coordination purposes.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">9. Right to Modify or Discontinue</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Homi reserves the right to modify procedures, restrict or discontinue the service, or suspend operations if required for safety or operational reasons.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">10. Consent</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          By registering for the service, the parent/guardian confirms that they have read, understood, and agreed to the above terms.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </Label>
            </div>

            <Button type="submit" size="lg" className="w-full text-lg py-6 mt-8" disabled={loading}>
              {loading ? "Submitting..." : "Submit Registration"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
