export type BoxScoreData = {
  game: {
    team: Array<Team>,
    venue: {
      _name: string,
      _capacity: string,
      _city: string,
      _state: string,
    },
    _scheduled: string,
  }
}

export type Team = {
  players: {
    player: Array<Player>
  },
  _name: string,
  _market: string,
}

export type PlayerStatistics = {
  _minutes: string,
  _field_goals_made: string,
  _three_points_made: string,
  _two_points_made: string,
  _free_throws_made: string,
  _offensive_rebounds: string,
  _defensive_rebounds: string,
  _rebounds: string,
  _assists: string,
  _turnovers: string,
  _steals: string,
  _blocks: string,
  _points: string,
  _double_double: string,
  _triple_double: string,
}

export type Player = {
  statistics: PlayerStatistics
  _full_name: string,
  _jersey_number: string,
}

export type Bet = {
  player: Player,
  category: keyof PlayerStatistics,
  value: string,
  condition?: 'over' | 'under' | 'equal',
  hit?: boolean
}