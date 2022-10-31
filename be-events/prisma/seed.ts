import { EventStatus, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createEvents() {
  await prisma.event.upsert({
    where: { id: 1 },
    update: {},
    create: {
      eventName: 'Sup on Saigon River',
      ownerId: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam quam, aliquet et felis et, sagittis pulvinar quam. Vestibulum feugiat urna vel elit convallis, quis consequat orci laoreet. Ut lacinia purus nec convallis laoreet. Nullam eu velit eros. Aliquam lectus felis, ullamcorper quis ultricies et, convallis eu enim. Proin pretium mattis commodo. Ut diam lectus, porta nec fringilla sed, euismod in neque. Phasellus dapibus quam eget malesuada volutpat. Ut aliquet viverra tortor, in egestas turpis dapibus eu. Pellentesque mollis, odio ut semper porttitor, tellus arcu tempor erat, a pharetra nisi nisl ut risus.Etiam lacinia nunc a eros eleifend ornare. Aenean scelerisque congue tortor. Nam suscipit aliquam pellentesque. Fusce sit amet volutpat nulla, vel vestibulum sapien. Donec ut nulla convallis diam condimentum laoreet non at nibh. Curabitur vulputate faucibus quam eu volutpat. Phasellus aliquet euismod nulla, eu malesuada leo mollis at. Donec varius cursus augue, vel iaculis nibh auctor id. Cras porttitor, ante egestas posuere viverra, ligula metus dignissim odio, ut ultrices risus ex eget lorem.',
      location: 'Saigon River',
      minParticipants: 10,
      startDate: new Date('2022-10-10'),
      startTime: new Date('2022-10-10 09:00:00'),
      duration: 2,
      requiresMinParticipants: true,
      officeId: 1,
      status: EventStatus.NOT_CONFIRMED
    },
  });
}

async function createOffice() {
  await prisma.office.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Ho Chi Minh Office',
      address: 'Saigon Tower 2'
    },
  });
}

async function main() {
  await createOffice();
  await createEvents();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .catch(async (_err) => {
    await prisma.$disconnect();
    process.exit(1);
  });
