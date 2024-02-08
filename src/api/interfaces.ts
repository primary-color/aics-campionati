export interface IApiResponse<T> {
  status: string;
  data: T;
}
export interface ITournamentEntry {
  text: string;
  href: string;
  path: string;
  id: string;
  levelCount: number;
  category: string;
  name: string;
  location: string;
}

export interface ITournamentDetails {
  name: string;
  circolo: string;
  location: string;
  id: string;
  teamsRanking: ITeamRanking[];
  latestMatches: ILatestMatchResult[];
  nextMatches: INextMatchResult[];
}

export interface ICalendar {
  values: {
    teamA: string;
    teamB: string;
    score: string;
    date: string;
    time: string;
    dateUtc: string;
    scoreA: number;
    scoreB: number;
    location: string;
  }[];
  week: number;
  weekCount: number;
  matchPerWeek: number;
}

export interface ITeamRanking {
  name: string;
  points: string;
  matches: string;
  won_matches: string;
  drawn_matches: string;
  lost_matches: string;
  goals_scored: string;
  goals_conceded: string;
  fair_play: string;
}

export interface IPlayerStats {
  firstName: string;
  lastName: string;
  team: string;
  goal: string;
  warningsCount?: number;
  suspansion?: {
    startDate: string;
    weeks: string;
  };
  specialMeasure?: {
    startDate: string;
    endDate: string;
    notes: string;
  };
}
export interface IPlayerRanking {
  firstName: string;
  lastName: string;
  team: string;
  goal: string;
}

export interface ILatestMatchResult {
  week: string;
  teamA: string;
  teamB: string;
  date: string;
  time: string;
  location: string;
  dateUtc: string;
  scoreA: number;
  scoreB: number;
  matchCompleted: boolean;
}

export interface INextMatchResult {
  week: string;
  teamA: string;
  teamB: string;
  dateUtc: string;
  time: string;
  location: string;
}

export interface IPlayersWarnings {
  firstName: string;
  lastName: string;
  team: string;
  number: string;
}

export interface IPlayerSpecialMeasure {
  firstName: string;
  lastName: string;
  team: string;
  number: string;
  startDate: string;
  endDate: string;
  notes: string;
}
