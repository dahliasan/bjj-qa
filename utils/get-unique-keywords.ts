import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function getUniqueKeywords() {
  const documents = await prisma.documents.findMany({
    select: {
      metadata: true,
    },
  });

  const keywordSet = new Set();

  documents.forEach((document) => {
    if (document?.metadata && typeof document?.metadata === "object") {
      const metadata = document?.metadata as Prisma.JsonObject;

      if (!metadata.keywords) return;

      const keywords = metadata.keywords as string;
      const keywordsArray = keywords
        .split(",")
        .map((keyword) => keyword.trim());
      keywordsArray.forEach((keyword: string) => {
        keywordSet.add(keyword);
      });
    }
  });

  return Array.from(keywordSet);
}

getUniqueKeywords()
  .then((keywords) => console.log(keywords))
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
