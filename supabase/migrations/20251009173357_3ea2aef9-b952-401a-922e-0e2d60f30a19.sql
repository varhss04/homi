-- Create registrations table
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_name TEXT NOT NULL,
  student_name TEXT NOT NULL,
  grade TEXT,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  address_line1 TEXT,
  address_line2 TEXT,
  city TEXT,
  pincode TEXT,
  payment_screenshot_url TEXT,
  payment_status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Create policy for anyone to insert registrations
CREATE POLICY "Anyone can create registrations" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true);

-- Create policy for anyone to view their own registrations
CREATE POLICY "Anyone can view registrations" 
ON public.registrations 
FOR SELECT 
USING (true);

-- Create policy for anyone to update registrations (for payment screenshot)
CREATE POLICY "Anyone can update registrations" 
ON public.registrations 
FOR UPDATE 
USING (true);

-- Create storage bucket for payment screenshots
INSERT INTO storage.buckets (id, name, public) 
VALUES ('payment-screenshots', 'payment-screenshots', false);

-- Create policy for uploading payment screenshots
CREATE POLICY "Anyone can upload payment screenshots" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'payment-screenshots');

-- Create policy for viewing payment screenshots
CREATE POLICY "Anyone can view payment screenshots" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'payment-screenshots');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_registrations_updated_at
BEFORE UPDATE ON public.registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();