import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserByID = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};

// export const getAccountByUserId = async (userId: string) => {
//   try {
//     const account = await db.account.findFirst({
//       where: { userId },
//     });

//     return account;
//   } catch {
//     return null;
//   }
// };