// app/api/get-ip/route.js
export async function GET(request) {
  try {
    // Get IP from various headers (works with different hosting providers)
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const cfConnectingIp = request.headers.get('cf-connecting-ip'); // Cloudflare
    const trueClientIp = request.headers.get('true-client-ip'); // Cloudflare Enterprise
    const xClientIp = request.headers.get('x-client-ip');
    
    let ip = forwarded?.split(',')[0]?.trim() || 
             realIp?.trim() || 
             cfConnectingIp?.trim() || 
             trueClientIp?.trim() ||
             xClientIp?.trim();

    // If still no IP found, try to get from external service
    if (!ip || ip === 'unknown' || ip === '::1' || ip === '127.0.0.1') {
      try {
        const response = await fetch('https://api.ipify.org?format=json', {
          headers: {
            'User-Agent': 'RACS2026-Conference'
          }
        });
        const data = await response.json();
        ip = data.ip;
      } catch (error) {
        console.error('Error getting IP from ipify:', error);
        ip = 'fallback_' + Date.now(); // Use timestamp as fallback
      }
    }

    console.log('Detected IP:', ip); // Debug log

    return Response.json({
      success: true,
      ip: ip || 'unknown'
    });
  } catch (error) {
    console.error('Error getting IP:', error);
    return Response.json({
      success: false,
      message: 'Error getting IP address',
      ip: 'error_' + Date.now() // Fallback to ensure uniqueness
    }, { status: 200 }); // Return 200 to not break the flow
  }
}