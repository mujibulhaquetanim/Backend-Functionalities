import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    // //existing user check
    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: 'mujibai@me.com'
    //     }
    // });

    // if(user){
    //     console.log("User already exists");
    //     return
    // }

    // //create new user
    // const newUser = await prisma.user.create({
    //     data:{
    //         name: "mujibai",
    //         email: "mujibai@me.com",
    //         password: "baigan",
    //         joinedAt: new Date(),
    //     }
    // })

    //method 2 for checking existing user and creating new user
    // const user = await prisma.user.upsert({
    //     where: {email: "mujibai@me.com"},
    //     update: {},
    //     create: {
    //         name: "mujibai",
    //         email: "mujibai@me.com",
    //         password: "baigan",
    //         joinedAt: new Date(),
    //     }
    // })
    // console.log('user: ',user);

    // const usersWithFriendships = await prisma.user.findMany({
    //     include: {
    //       friendships: {
    //         include: {
    //           user: true,
    //         },
    //       },
    //     },
    //   });

    const usersWithDetails = await prisma.user.findMany({
        include: {
          friendships: {
            include: {
              user: true, // Include friend details
            },
          },
          jobTitle: true, // Include job title details
          profile: true, // Include profile details
          posts: true, // Include posts details
        },
      });
    
      console.dir(usersWithDetails, { depth: null });
    
    //   console.dir(usersWithFriendships, { depth: null });

}

main().then(async ()=>await prisma.$disconnect()).catch(async (error)=> {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
})