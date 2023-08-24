import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../prisma/client.ts'

export async function POST( req: NextRequest ) {
  try {
    // const { link } = req.body;
    const data = await prisma.service_info.findMany()

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred' });
  }
}
