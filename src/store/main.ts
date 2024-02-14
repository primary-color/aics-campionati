import { defineStore } from "pinia";
import * as vueuse from "@vueuse/core";
import * as api from "@/api/api";
import type { RemovableRef } from "@vueuse/core";
import type { ITournamentDetails, IPlayerStats, ITournamentEntry, ICalendar } from "@/api/interfaces";

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
      const response = await api.getTournaments();
      this.tournaments = response.data.data;
    },

    //fetch tournament details
    async fecthTournamentDetails(id: string) {
      const response = await api.getTournamentDetails(id);
      this.tournamentDetails = response.data.data;
    },

    //fetch players of tournament
    async fetchPlayers(id: string) {
      const response = await api.getPlayersStats(id);
      this.playersStats = response.data.data;
    },

    //fetch tournament calendar
    async fetchTournamentCalendar(id: string, week?: number) {
      const response = await api.getTournamentCalendar(id, week);
      this.tournamentCalendar = response.data.data;
    },
  },
});
