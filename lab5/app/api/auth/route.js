import { hash, hashSync } from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, password, name } = await req.json();
    // const hashedPassword = await hash(password, 10);
    const hashedPassword = hashSync(password, 10);

    const newUser = await prisma.user.create({
        data: {
            email,
            name,
            password,
        },
    });

    return Response.json({
        msg: "Use Created !!",
        newUser,
    });
  } catch(err) {
    return Response.json(err, {status: 500 });
  }
} 