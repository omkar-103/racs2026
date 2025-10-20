// app/api/get-ip/route.js
export async function GET(request) {
  try {
    // Get IP from various headers (works with different hosting providers)
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const cfConnectingIp = request.headers.get('cf-connecting-ip'); // Cloudflare
    
    const ip = forwarded?.split(',')[0] || 
               realIp || 
               cfConnectingIp || 
               'unknown';

    return Response.json({
      success: true,
      ip: ip.trim()
    });
  } catch (error) {
    console.error('Error getting IP:', error);
    return Response.json({
      success: false,
      message: 'Error getting IP address'
    }, { status: 500 });
  }
}