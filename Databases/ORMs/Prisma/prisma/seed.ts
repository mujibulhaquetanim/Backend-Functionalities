import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
// Clear existing data to avoid unique constraint conflicts as the seed script is run multiple times
  await prisma.friendship.deleteMany({});
  await prisma.post.deleteMany({});
  await prisma.profile.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.jobTitle.deleteMany({});
  await prisma.category.deleteMany
  // Seed Users
  for (let i = 1; i <= 10; i++) {
    const user = await prisma.user.create({
      data: {
        name: `User ${i}`,
        email: `user${i}@example.com`,
        password: 'password123',
        joinedAt: new Date(),
      },
    });

    // Seed Profile
    await prisma.profile.create({
      data: {
        bio: `Bio of User ${i}`,
        userId: user.id,
      },
    });

    // Seed Posts
    await prisma.post.create({
      data: {
        title: `Post by User ${i}`,
        authorId: user.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Seed Friendships
    //modulo operator for creating circular friendships i.e. Users 1 to 9 become friends with the next user (e.g., User 1 with User 2, User 2 with User 3, and so on). The last user (User 10) becomes friends with the first user (User 1), creating a circular friendship.

    const friend = await prisma.user.findUnique({
        where: { email: `user${(i % 10) + 1}@example.com` },
      });
      if (friend) {
        await prisma.friendship.create({
          data: {
            userId: user.id,
            friendId: friend.id,
          },
        });
      }
    }

      // Seed JobTitles
  for (let i = 1; i <= 10; i++) {
    await prisma.jobTitle.create({
      data: {
        name: `Job Title ${i}`,
        type: `Type ${i}`,
      },
    });
  }

   // Seed Categories
   for (let i = 1; i <= 10; i++) {
    await prisma.category.create({
      data: {
        name: `Category ${i}`,
      },
    });
  }
}

// Run the seed script using pnpm dlx ts-node ./prisma/seed.ts

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
