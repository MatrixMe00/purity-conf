import pkg from "prisma/prisma-client"

const {PrismaClient} = pkg;
const prisma = new PrismaClient();

export default prisma;