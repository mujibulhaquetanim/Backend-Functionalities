import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data and reset auto-increment sequences for SQLite
  await prisma.friendship.deleteMany({});
  await prisma.post.deleteMany({});
  await prisma.profile.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.jobTitle.deleteMany({});
  await prisma.category.deleteMany({});

  // Seed Users
  const users = [];
  for (let i = 1; i <= 10; i++) {
    const user = await prisma.user.create({
      data: {
        name: `User ${i}`,
        email: `user${i}@example.com`,
        password: `password1010-${i}`,
        joinedAt: new Date(),
      },
    });

    users.push(user);

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

  // Seed Friendships
  for (let i = 0; i < users.length; i++) {
    await prisma.friendship.create({
      data: {
        userId: users[i].id,
        friendId: users[(i + 1) % users.length].id,
      },
    });
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

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
