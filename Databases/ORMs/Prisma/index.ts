import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    //create new user
    const newUser = await prisma.user.create({
        data:{
            name: "mujibai",
            email: "mujibai@me.com",
            gender: "MALE",
            password: "baigan",
            role: "ADMIN",
            jobId: 1,
        }
    })

}

main().then(async ()=>await prisma.$disconnect()).catch(async (error)=> {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
})