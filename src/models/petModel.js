// src > models > petModel.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
    // ...
    return await prisma.pet.findMany({ 
        orderBy: { nome: 'asc' }
    });
};

// Crio a variavel findById e já exporto
export const findById = async (id) => { // id: o parâmetro esperado
    // SELECT * FROM pets WHERE id = {id_recebido};
    return await prisma.pet.findUnique({ // Nota: alterei .pets para .pet
        where: { 
            id: Number(id) 
        }
    });
};