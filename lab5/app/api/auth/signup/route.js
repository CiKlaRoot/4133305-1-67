export async function POST(req) {
    const { email, password, name } = await req.json();

    return Response.json({
        data: {
            email,
            name,
            password,
        },
    });
}       