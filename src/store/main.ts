import { defineStore } from "pinia";

import * as api from "@/api/api";
import type { ITournamentDetails, IPlayerStats, ITournamentEntry, ICalendar } from "@/api/interfaces";

interface IState {
  appVersion: string;

  longLoadingID: any;
  longLoading: boolean;
  isLoadingDebounced: boolean;

  //tournament specific
  tournaments: ITournamentEntry[];
  tournamentDetails: ITournamentDetails | undefined;
  playersStats: IPlayerStats[];
  tournamentCalendar: ICalendar | undefined;

  requestDate: Date | undefined;
}
export const useStore = defineStore({
  id: "store",
  state: (): IState => ({
    appVersion: "0.0.3",

    longLoadingID: null,
    longLoading: false,

    tournaments: [],
    tournamentDetails: undefined,
    playersStats: [],
    tournamentCalendar: undefined,
    isLoadingDebounced: false,

    requestDate: undefined,
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
      this.requestDate = new Date();
      const response = await api.getTournaments();
      this.tournaments = response.data.data;
    },

    //fetch tournament details
    async fecthTournamentDetails(id: string) {
      this.requestDate = new Date();
      const response = await api.getTournamentDetails(id);
      this.tournamentDetails = response.data.data;
    },

    //fetch players of tournament
    async fetchPlayers(id: string) {
      this.requestDate = new Date();
      const response = await api.getPlayersStats(id);
      this.playersStats = response.data.data;
    },

    //fetch tournament calendar
    async fetchTournamentCalendar(id: string, week?: number) {
      this.requestDate = new Date();
      const response = await api.getTournamentCalendar(id, week);
      this.tournamentCalendar = response.data.data;
    },
  },
});
