import { PrismaClient } from '@prisma/client';

// Instancia de Prisma Client
const prisma = new PrismaClient();

// Función principal para probar la conexión
async function main() {
  try {
    // Crea un usuario de prueba (ajusta según tu modelo)
    const user = await prisma.user.create({
      data: {
        email: "test@example.com",
        name: "Test User",
      },
    });

    console.log("Usuario creado con éxito:", user);

    // Recupera todos los usuarios de la tabla
    const users = await prisma.user.findMany();
    console.log("Usuarios en la base de datos:", users);
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  } finally {
    // Desconecta el cliente
    await prisma.$disconnect();
  }
}

// Llama a la función principal
main();
