import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../prisma/client.ts'
import { getServerSession } from "next-auth/next"

export async function POST( req: NextRequest ) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
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
