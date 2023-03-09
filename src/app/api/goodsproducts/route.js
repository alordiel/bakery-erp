const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
import qs from "qs";

export async function POST(request) {
    console.log(request);
    await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io' + Date.now(),
            posts: {
                create: {title: 'Hello World'},
            },
            profile: {
                create: {bio: 'I like turtles'},
            },
        },
    });

    return new Response('Hello, shit.js!')
}

export async function GET(request) {
    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    });
    console.log(allUsers)
    return new Response(qs.stringify(allUsers));
}
