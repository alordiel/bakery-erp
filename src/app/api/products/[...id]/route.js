import {NextResponse} from 'next/server';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

export async function GET(request, {params}) {

        const product = await prisma.product.findUnique({
            where: {
                id: parseInt(params.id[0])
            }
        });

        return NextResponse.json({product})

}
