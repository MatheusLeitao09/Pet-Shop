
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const dadosPets = [
  { nome: "Júpiter", especie: "Cachorro (Poodle)", idade: 3, dono: "Ricardo Almeida" },
  { nome: "Freya", especie: "Gato (Siamês)", idade: 5, dono: "Camila Borges" },
  { nome: "Clementine", especie: "Coelho", idade: 0, dono: "Fábio Neves" },
  { nome: "Astro", especie: "Pássaro (Canário)", idade: 3, dono: "Heloisa Ribeiro" },
  { nome: "Whisper", especie: "Cachorro (Labrador)", idade: 2, dono: "Guilherme Santos" },
  { nome: "Pixel", especie: "Gato (Persa)", idade: 8, dono: "Isabela Lima" },
  { nome: "Rocket", especie: "Hamster", idade: 1, dono: "Lucas Matos" },
  { nome: "Splash", especie: "Peixe (Carpa)", idade: 1, dono: "Viviane Rocha" },
  { nome: "Koda", especie: "Cachorro (Husky)", idade: 7, dono: "Fernando Costa" },
  { nome: "Marshmallow", especie: "Porquinho-da-Índia", idade: 1, dono: "Lívia Guedes" },
  { nome: "Gael", especie: "Pássaro (Cacatua)", idade: 10, dono: "Thiago Oliveira" },
  { nome: "Zelda", especie: "Cachorro (Beagle)", idade: 4, dono: "Patrícia Diniz" },
  { nome: "Wave", especie: "Peixe (Guppy)", idade: 2, dono: "André Farias" },
  { nome: "Shelly", especie: "Tartaruga", idade: 15, dono: "Raul Silveira" },
  { nome: "Winston", especie: "Cachorro (Buldogue)", idade: 1, dono: "Sofia Mendes" },
  { nome: "Salem", especie: "Gato (Bombaim)", idade: 2, dono: "Caio Viana" },
  { nome: "Bunny", especie: "Coelho", idade: 3, dono: "Lorena Queiroz" },
  { nome: "Sky", especie: "Pássaro (Agapornis)", idade: 2, dono: "Murilo Gomes" },
  { nome: "Onyx", especie: "Gato (Maine Coon)", idade: 6, dono: "Elisa Barbosa" },
  { nome: "Rio", especie: "Pássaro (Periquito)", idade: 1, dono: "Sérgio Nunes" },
  { nome: "Rex", especie: "Cachorro (Pastor Alemão)", idade: 6, dono: "Natália Rocha" },
  { nome: "Nala", especie: "Gato (Sphynx)", idade: 4, dono: "Vitor Hugo" },
  { nome: "Hop", especie: "Coelho", idade: 2, dono: "Xenia Campos" },
  { nome: "Jazz", especie: "Pássaro (Calopsita)", idade: 5, dono: "Yuri Soares" },
  { nome: "Hunter", especie: "Cachorro (Doberman)", idade: 3, dono: "Amanda Ferreira" },
  { nome: "Cosmo", especie: "Gato (Norueguês)", idade: 7, dono: "Bruno Dias" },
  { nome: "Crush", especie: "Tartaruga", idade: 20, dono: "Clara Zanetti" },
  { nome: "Pocket", especie: "Hamster", idade: 1, dono: "Danilo Sales" },
  { nome: "Cleo", especie: "Gato (Abissínio)", idade: 2, dono: "Erika Alves" },
  { nome: "Bolt", especie: "Cachorro (Vira-lata)", idade: 9, dono: "Gabriel Menezes" },
  { nome: "Gala", especie: "Peixe (Acará)", idade: 3, dono: "Juliana Telles" },
  { nome: "Muffin", especie: "Porquinho-da-Índia", idade: 0, dono: "Kevin Pereira" },
  { nome: "Terra", especie: "Tartaruga", idade: 12, dono: "Letícia Ribeiro" },
  { nome: "Coco", especie: "Coelho", idade: 4, dono: "Márcio Fontes" },
  { nome: "Loki", especie: "Gato (Bengal)", idade: 5, dono: "Nina Carvalho" },
  { nome: "Kaiser", especie: "Cachorro (Rottweiler)", idade: 1, dono: "Otávio Martins" },
  { nome: "Misty", especie: "Gato (Himalaia)", idade: 1, dono: "Paula Azevedo" },
  { nome: "Atena", especie: "Cachorro (Golden)", idade: 8, dono: "Quiteria Barros" },
  { nome: "Tigger", especie: "Gato (Angorá)", idade: 3, dono: "Renato Dutra" },
  { nome: "Phoenix", especie: "Pássaro (Curió)", idade: 4, dono: "Suelen Rocha" },
  { nome: "Hades", especie: "Cachorro (Boxer)", idade: 2, dono: "Túlio Machado" },
  { nome: "Merlin", especie: "Gato (Ragdoll)", idade: 10, dono: "Úrsula Nogueira" },
  { nome: "Apollo Jr.", especie: "Cachorro (Chihuahua)", idade: 5, dono: "Vitor Melo" },
  { nome: "Cleópatra", especie: "Gato (Egípcio)", idade: 9, dono: "Wallace Alves" },
  { nome: "Dory", especie: "Peixe (Tang)", idade: 1, dono: "Yasmin Gomes" },
  { nome: "Thor", especie: "Cachorro (Pitbull)", idade: 6, dono: "Zélia Pires" },
  { nome: "Gizmo", especie: "Gato (Exótico)", idade: 4, dono: "Aline Bastos" },
  { nome: "Puff", especie: "Porquinho-da-Índia", idade: 2, dono: "Beto Castro" },
  { nome: "Zuzu", especie: "Coelho", idade: 1, dono: "Cíntia Ferreira" },
  { nome: "Hórus", especie: "Cachorro (Cocker)", idade: 7, dono: "David Silva" }
];

async function main() {
  console.log("Iniciando o Seeding de Pets com 50 registros variados...");


  await prisma.pet.deleteMany(); 
  console.log("Registros existentes de Pet deletados.");

  
  const result = await prisma.petshop_db.createMany({
    data: dadosPets, 
    skipDuplicates: true,
  });

  console.log(`Seeding concluído com sucesso: ${result.count} pets criados!`);
}

main()
  .catch((e) => {
    console.error("ERRO FATAL NO PRISMA SEED:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Prisma desconectado");
    
  });