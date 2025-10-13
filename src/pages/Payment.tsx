import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { API_BASE_URL } from "@/config/api";
import { Upload, CheckCircle } from "lucide-react";

const Payment = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const registrationId = location.state?.registrationId;

  useEffect(() => {
    if (!registrationId) {
      toast({
        title: "Error",
        description: "Please complete registration first",
        variant: "destructive",
      });
      navigate("/");
    }
  }, [registrationId, navigate, toast]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file || !registrationId) {
      toast({
        title: "Missing Information",
        description: "Please select a payment screenshot to upload.",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = async () => {
        const base64Image = reader.result as string;

        const response = await fetch(`${API_BASE_URL}/registrations/${registrationId}/payment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            payment_screenshot_url: base64Image,
          }),
        });

        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error || 'Failed to upload payment');
        }

        console.log('Payment screenshot uploaded to MongoDB:', result);

        setShowSuccess(true);
        setTimeout(() => navigate("/"), 4000);
      };

      reader.onerror = () => {
        throw new Error('Failed to read file');
      };
    } catch (error: any) {
      console.error("Error uploading:", error);
      toast({
        title: "Upload Failed",
        description: error.message || "Failed to upload screenshot. Please try again.",
        variant: "destructive",
      });
      setUploading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-20">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-md mx-4 text-center animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-20 w-20 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Thank You for Choosing Homi!
            </h2>
            <p className="text-lg text-muted-foreground">
              Payment submitted successfully. All further updates will be shared via email and phone.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              Redirecting to home...
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complete Your Payment
            </h1>
            <p className="text-xl text-muted-foreground">
              Scan the QR code below and upload your payment screenshot
            </p>
            <p className="text-2xl font-bold text-primary mt-4">
              Complimentary lunch bags are provided
            </p>
          </div>

          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-lg space-y-8">
            {/* QR Code Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-center">Scan to Pay ₹999</h2>
              <div className="flex justify-center">
                <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-primary">
                  <img 
                    src="/payment_qr.png" 
                    alt="Payment QR Code" 
                    className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                  />
                </div>
              </div>
              <div className="text-center space-y-1">
                <p className="text-sm font-medium">Anirudh Muralidhar</p>
                <p className="text-sm text-muted-foreground">UPI: 9886757800@pthdfc</p>
              </div>
            </div>

            {/* Upload Section */}
            <div className="space-y-4 pt-6 border-t">
              <Label htmlFor="screenshot" className="text-lg font-semibold">
                Upload Payment Screenshot
              </Label>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <input
                    id="screenshot"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="screenshot"
                    className="cursor-pointer flex flex-col items-center space-y-2"
                  >
                    <Upload className="w-12 h-12 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {file ? file.name : "Click to upload or drag and drop"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      PNG, JPG up to 10MB
                    </span>
                  </label>
                </div>

                <Button
                  onClick={handleUpload}
                  disabled={!file || uploading}
                  size="lg"
                  className="w-full text-lg py-6"
                >
                  {uploading ? "Uploading..." : "Submit Payment Proof"}
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-muted-foreground"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
