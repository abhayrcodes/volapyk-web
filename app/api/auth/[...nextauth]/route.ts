import { compare, hash } from 'bcrypt'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '../../../../prisma/client.ts'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password',  type: 'password' },
            },
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string
                    password: string
                }

                const user: { user_id: number; email: string; password_hash: string; } | null = await prisma.users.findUnique({
                    where: {
                        email: email
                    },
                    select: {
                        user_id: true,
                        email: true,
                        password_hash: true,
                    },
                });

                if (!user) {
                    const userCreate = await prisma.users.create({
                        data: {
                            email: email,
                            password_hash: await hash(password, 12),
                            case_scores: {}
                        }
                    })
          
                    return {
                      id: String(userCreate.user_id),
                      email
                    }
                }

                const isValid = await compare(password, user.password_hash)

                if (!isValid) {
                    return null;
                }

                return {
                    id: String(user.user_id),
                    email: email,
                };
            }
        }),
    ],
    pages: {
        signIn: '/?login=true'
    }
});

export { handler as GET, handler as POST }