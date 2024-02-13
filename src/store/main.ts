import { defineStore } from "pinia";
import * as vueuse from "@vueuse/core";
import * as api from "@/api/api";
import type { RemovableRef } from "@vueuse/core";
import type { ITournamentDetails, IPlayerStats, ITournamentEntry, ICalendar } from "@/api/interfaces";
import { DateTime } from "luxon";

function checkLastRequestDate(requestDate: Date | undefined, minutes: number) {
  const now = DateTime.now();
  const lastRequestDate = (requestDate && DateTime.fromJSDate(new Date(requestDate))) || DateTime.now();
  return now.diff(lastRequestDate, "minutes").minutes >= minutes;
}
interface IState {
  appVersion: string;

  longLoading: boolean;

  //tournament specific
  tournaments: ITournamentEntry[];
  tournamentDetails: ITournamentDetails | undefined;
  playersStats: IPlayerStats[];
  tournamentCalendar: ICalendar | undefined;

  requestDate: RemovableRef<Date | undefined>;
}
export const useStore = defineStore({
  id: "store",
  state: (): IState => ({
    appVersion: "0.1.2",

    longLoading: false,

    tournaments: [],
    tournamentDetails: undefined,
    playersStats: [],
    tournamentCalendar: undefined,

    requestDate: vueuse.useLocalStorage(`request-date`, undefined),
  }),
  getters: {
    getTournamentName: (state) => state.tournamentDetails?.name,
    getTeamsRanking: (state) => state.tournamentDetails?.teamsRanking || [],
    getLatestMatchResults: (state) => state.tournamentDetails?.latestMatches || [],
    getNextMatches: (state) => state.tournamentDetails?.nextMatches || [],
    getTournamentCalendarValues: (state) => state.tournamentCalendar?.values || [],
  },
  actions: {
    /***********************************************************************************************
     * Tournament specific
     ***********************************************************************************************/

    //Fetch list of tournaments
    async fecthTournaments() {
      if (checkLastRequestDate(this.requestDate, 1)) {
        this.longLoading = true;
      }
      const response = await api.getTournaments();
      this.requestDate = new Date();
      this.tournaments = response.data.data;
      this.longLoading = false;
    },

    //fetch tournament details
    async fecthTournamentDetails(id: string) {
      if (checkLastRequestDate(this.requestDate, 1)) {
        this.longLoading = true;
      }
      const response = await api.getTournamentDetails(id);
      this.requestDate = new Date();
      this.tournamentDetails = response.data.data;
      this.longLoading = false;
    },

    //fetch players of tournament
    async fetchPlayers(id: string) {
      if (checkLastRequestDate(this.requestDate, 1)) {
        this.longLoading = true;
      }
      const response = await api.getPlayersStats(id);
      this.requestDate = new Date();
      this.playersStats = response.data.data;
      this.longLoading = false;
    },

    //fetch tournament calendar
    async fetchTournamentCalendar(id: string, week?: number) {
      if (checkLastRequestDate(this.requestDate, 1)) {
        this.longLoading = true;
      }
      const response = await api.getTournamentCalendar(id, week);
      this.requestDate = new Date();
      this.tournamentCalendar = response.data.data;
      this.longLoading = false;
    },
  },
});
