import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email:'john.doe@gmail.com',
      avatarUrl: 'http://github.com/guilhermecardoso93'
    }
  })
}

main()