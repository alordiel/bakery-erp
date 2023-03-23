import { NextResponse } from 'next/server';

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

export async function GET(request, {params}) {
    console.log(params);
    if (params !== null && params !== undefined) {
        const products = await prisma.product.findUnique({
            where: {
                id: parseInt(params)
            }
        });

        return NextResponse.json({products})

    } else {
        const products = await prisma.product.findMany();
        return NextResponse.json({products})

    }
}
