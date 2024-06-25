import { PrismaClient } from "@prisma/client";
import { useInsertionEffect } from "react";

const prisma = new PrismaClient();

export async function GET() {
    const userId = params.id;


    const user = await prisma.user.findMany({
         where: {
        id: userId,
    }
});

    return Response.json(user);
}


export async function DELETE(req, {params}){
    try {
        const userId = params.id

        const delUser = await prisma.user.delete({
            where: { id: userId },
        });                                                                                                   
        return Response.json(delUser,{status: 200 });
    }   catch (err) {
        return Response.json(err, { status: 500 });
    }
}

export async function POST(req){
    try {
        const userId = Number(params.id);
        const {email, name } = await req.json();
        const updateteUser = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                email,
                name,
            }
        });
        return Response.json(delUser,{status: 200 });
    }   catch (err) {
        return Response.json(err, { status: 500 });
    }
}