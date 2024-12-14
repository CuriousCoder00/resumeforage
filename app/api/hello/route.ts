import { NextRequest, NextResponse } from 'next/server'



export function GET() {

    return NextResponse.json('Hello from Next.js!')
}