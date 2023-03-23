import {NextResponse} from 'next/server';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

export async function POST(request) {

    const data = await request.json();
    // TODO: Server-side Validate the data;

    const product = await prisma.product.create({
        data: {
            name: data.name,
            cost: data.cost,
            tax: data.tax,
            price: data.price,
            finalPrice: data.finalPrice,
            isResell: data.isResell,
            preparationTime: data.preparationTime,
            shelfLife: data.shelfLife,
            notes: data.notes,
        }
    });
    console.log(product);
    // TODO May be we need to send just the ID instead of all the info.
    return new Response(JSON.stringify(product), {status: 201, statusText: "Created"});
}

export async function GET() {
    const products = await prisma.product.findMany();
    return NextResponse.json({products})
}
