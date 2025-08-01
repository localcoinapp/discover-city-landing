import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PartnershipEmailRequest {
  businessName: string;
  contactName: string;
  email: string;
  phone?: string;
  businessType?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { businessName, contactName, email, phone, businessType, message }: PartnershipEmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Discover Florida <onboarding@resend.dev>",
      to: ["localcoinapp@gmail.com"],
      subject: "New Partnership Inquiry - Discover Florida",
      html: `
        <h2>New Partnership Inquiry</h2>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${businessType ? `<p><strong>Business Type:</strong> ${businessType}</p>` : ''}
        ${message ? `
          <p><strong>Message:</strong></p>
          <p style="background: #f5f5f5; padding: 10px; border-radius: 5px;">${message}</p>
        ` : ''}
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p>This business is interested in partnering with Discover Florida. Please follow up within 24 hours.</p>
      `,
    });

    console.log("Partnership email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-partnership-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);