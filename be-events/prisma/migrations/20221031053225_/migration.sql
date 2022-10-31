-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('NOT_CONFIRMED', 'CONFIRMED', 'CANCELLED');

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "event_name" TEXT NOT NULL,
    "description" VARCHAR(2000) NOT NULL,
    "location" TEXT NOT NULL,
    "status" "EventStatus" NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "min_participants" INTEGER NOT NULL,
    "require_min_participants" BOOLEAN NOT NULL,
    "office_id" INTEGER NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_time_suggestions" (
    "id" SERIAL NOT NULL,
    "event_id" INTEGER NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_time_suggestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_time_votings" (
    "id" SERIAL NOT NULL,
    "time_suggestion_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "event_time_votings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "offices" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "offices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_office_id_fkey" FOREIGN KEY ("office_id") REFERENCES "offices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_time_suggestions" ADD CONSTRAINT "event_time_suggestions_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_time_votings" ADD CONSTRAINT "event_time_votings_time_suggestion_id_fkey" FOREIGN KEY ("time_suggestion_id") REFERENCES "event_time_suggestions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
