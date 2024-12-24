import { NextResponse, userAgent } from 'next/server';
import type { NextRequest } from 'next/server';
export async function middleware(request: NextRequest) {
    const url = request.nextUrl
    const { device } = userAgent(request)
    const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
    url.searchParams.set('viewport', viewport)
    return NextResponse.rewrite(url)
}

export const config = {
    matcher: ['/', '/contact', '/checkout' ],
}
