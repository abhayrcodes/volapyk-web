import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../prisma/client.ts'

export async function POST( req: NextRequest ) {
  try {
    const json = await req.json();
    const input_link = json['link']
    const serviceName = json['submitServiceName']
    const data = await prisma.service_info.findMany()
    console.log(input_link, serviceName)

    // const data_push = await prisma.new_links.create({
    //   data: {
    //     service_name: serviceName,
    //     link: input_link,
    //   },
    // })

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred' });
  }
}
