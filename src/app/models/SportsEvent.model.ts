export class SportsEvent {

    constructor (
        public eventId: number,
        public name: string, 
        public oddsForFirstTeam?: number,
        public oddsForDraw?: number,
        public oddsForSecondTeam?: number,
        public eventStartDate?: Date
    ) {}
}