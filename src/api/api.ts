import { axiosApi } from "@/axios";
import { TORNEO_API_BASE_URL } from "@/constants";
import type { ITournamentDetails, ICalendar, ITournamentEntry, IPlayerStats, IApiResponse } from "@/api/interfaces";

const baseurl = TORNEO_API_BASE_URL;

export async function getTournaments() {
  return await axiosApi.get<IApiResponse<ITournamentEntry[]>>(`${baseurl}/tournaments`);
}

export async function getTournamentDetails(id: string) {
  return axiosApi.get<IApiResponse<ITournamentDetails>>(`${baseurl}/tournaments/${id}`);
}

export async function getTournamentDetailsV2(id: string) {
  return axiosApi.get<IApiResponse<any>>(`${baseurl}/tournaments/${id}/v2`);
}

export async function getPlayersStats(id: string) {
  return await axiosApi.get<IApiResponse<IPlayerStats[]>>(`${baseurl}/tournaments/${id}/players`);
}

export async function getTournamentCalendar(id: string, week?: number) {
  return await axiosApi.get<IApiResponse<ICalendar>>(`${baseurl}/tournaments/${id}/calendar/${week}`);
}
