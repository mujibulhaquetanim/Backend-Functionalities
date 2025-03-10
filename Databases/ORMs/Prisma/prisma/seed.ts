import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
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
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
