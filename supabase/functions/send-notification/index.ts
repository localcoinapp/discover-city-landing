import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  type: 'waitlist' | 'partnership';
  data: any;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data }: NotificationRequest = await req.json();

    let subject = "";
    let html = "";

    if (type === 'waitlist') {
      subject = "New Waitlist Signup - Discover Florida";
      html = `
        <h1>New Waitlist Signup</h1>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Signed up at:</strong> ${new Date().toLocaleString()}</p>
      `;
    } else if (type === 'partnership') {
      subject = "New Partnership Inquiry - Discover Florida";
      html = `
        <h1>New Partnership Inquiry</h1>
        <p><strong>Business Name:</strong> ${data.business_name}</p>
        <p><strong>Contact Name:</strong> ${data.contact_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Business Type:</strong> ${data.business_type || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || 'No message provided'}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Discover Florida <onboarding@resend.dev>",
      to: ["localcoinapp@gmail.com"],
      subject: subject,
      html: html,
    });

    console.log("Notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
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