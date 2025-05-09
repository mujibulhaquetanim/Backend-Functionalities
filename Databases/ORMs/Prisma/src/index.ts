import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

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

    // const usersWithDetails = await prisma.user.findMany({
    //   take: 1, // Limit to 1 user
    //     include: {
    //       friendships: {
    //         include: {
    //           user: true, // Include friend details
    //         },
    //       },
    //       jobTitle: true, // Include job title details
    //       profile: true, // Include profile details
    //       posts: true, // Include posts details
    //     },
    //   });
    
    //   console.dir(usersWithDetails, { depth: null });
    
    //   console.dir(usersWithFriendships, { depth: null });

    // retrieve user with all friends
    const userWithAllFriends = await prisma.user.findMany({
      where: {id: '1134f861-2ec7-4496-bece-79f29785bb85'},
      include: {
        friendships: {include: {friend: true}},
        friends: {include: {user: true}}
      }
    })
    console.dir(userWithAllFriends, {depth: null})

    if(userWithAllFriends.length === 0){
      console.log("User not found");
      return
    }

    //after querying individual friends and friendships data of a user we merge them to get all friends
    //[0] because we only have one user
    const allFriends = [
      ...userWithAllFriends[0].friendships.map(friendship => friendship.friend.name),
      ...userWithAllFriends[0].friends.map(friend => friend.user.name)
    ]

    console.log(`allFriends count: ${allFriends.length}`);
    console.dir(allFriends, {depth: null})

    //using transaction we can execute multiple queries in a single transaction and it is similar to db transaction, if any of the query fails then whole transaction fails.
    const [user, user2, count] = await prisma.$transaction([
      prisma.user.findUnique({
        where: {id: '1134f861-2ec7-4496-bece-79f29785bb85'},
        include: {friendships: {include: {friend: true}}}
      }),
      prisma.user.findUnique({
        where: {
          email: 'mujibai@me.com'
        }
      }),
      prisma.user.count()
    ])

    console.log(`user: ${JSON.stringify(user)}, user2: ${JSON.stringify(user2)}, and count: ${count}`, {depth: null});
}

main().then(async ()=>await prisma.$disconnect()).catch(async (error)=> {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
})