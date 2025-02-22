import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    //existing user check
    const user = await prisma.user.findUnique({
        where: {
            email: 'mujibai@me.com'
        }
    });

    if(user){
        console.log("User already exists");
        return
    }

    //create new user
    const newUser = await prisma.user.create({
        data:{
            name: "mujibai",
            email: "mujibai@me.com",
            password: "baigan",
            joinedAt: new Date(),
        }
    })

}

main().then(async ()=>await prisma.$disconnect()).catch(async (error)=> {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
})