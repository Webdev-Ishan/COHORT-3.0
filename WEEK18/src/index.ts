import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
async function createUser() {
 let user = await client.user.findFirst({
    where:{
        id:2
    },
    select:{
        todos:true
    }
  });

  console.log(user?.todos)
}

createUser();
