const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Veitch',
      email: 'veitch.wang0124@gmail.com',
      role: 1,
      description: 'admin'
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })