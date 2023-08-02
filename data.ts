import { Colors } from 'discord.js';

export const ignoreRole = ['�️PRINCIPAL', 'admin-server'];
export const ignoreCategory = ['ignorecategory'];

interface LanguageRoleType {
  name: string;
  color: any;
  unicodeEmoji: string;
  hoist: boolean;
  mentionable: boolean;
  room?: string[];
  hasCategory: boolean;
}

export const languagesRoles: LanguageRoleType[] = [
  // language role

  {
    name: 'français',
    color: Colors.Blue,
    unicodeEmoji: ':flag_fr:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'english',
    color: Colors.Red,
    unicodeEmoji: ':flag_gb:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'dutch',
    color: Colors.Orange,
    unicodeEmoji: ':flag_nl:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'español',
    color: Colors.Red,
    unicodeEmoji: ':flag_es:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'deutsch',
    color: Colors.DarkRed,
    unicodeEmoji: ':flag_de:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'italiano',
    color: Colors.White,
    unicodeEmoji: ':flag_it:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'português',
    color: Colors.Green,
    unicodeEmoji: ':flag_pt:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'русский',
    color: Colors.Red,
    unicodeEmoji: ':flag_ru:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: '日本語',
    color: Colors.Red,
    unicodeEmoji: ':flag_jp:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: '中文',
    color: Colors.Gold,
    unicodeEmoji: ':flag_cn:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: '한국어',
    color: Colors.DarkBlue,
    unicodeEmoji: ':flag_kr:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'العربية',
    color: Colors.DarkGreen,
    unicodeEmoji: ':flag_sa:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'हिन्दी',
    color: Colors.Orange,
    unicodeEmoji: ':flag_in:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'ਪੰਜਾਬੀ',
    color: Colors.DarkOrange,
    unicodeEmoji: ':flag_pk:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'اردو',
    color: Colors.DarkGreen,
    unicodeEmoji: ':flag_pk:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'فارسی',
    color: Colors.Gold,
    unicodeEmoji: ':flag_ir:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'ไทย',
    color: Colors.DarkRed,
    unicodeEmoji: ':flag_th:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'tiếng Việt',
    color: Colors.DarkGreen,
    unicodeEmoji: ':flag_vn:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'Bahasa Indonesia',
    color: Colors.DarkAqua,
    unicodeEmoji: ':flag_id:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'Türkçe',
    color: Colors.Red,
    unicodeEmoji: ':flag_tr:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'עברית',
    color: Colors.DarkGold,
    unicodeEmoji: ':flag_il:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },

  // divertissement  roles

  {
    name: 'developer',
    color: Colors.Purple,
    unicodeEmoji: ':computer:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },

  {
    name: 'drawer',
    color: Colors.Gold,
    unicodeEmoji: ':art:',
    hoist: true,
    mentionable: true,
    room: ['Artist'],
    hasCategory: false,
  },
  {
    name: 'DJ',
    color: Colors.Purple,
    unicodeEmoji: ':art:',
    hoist: true,
    mentionable: true,
    room: ['Artist'],
    hasCategory: false,
  },
  {
    name: 'Artist',
    color: Colors.Purple,
    unicodeEmoji: ':art:',
    hoist: true,
    mentionable: true,
    room: [],
    hasCategory: true,
  },
  {
    name: 'memes',
    color: Colors.Yellow,
    unicodeEmoji: ':joy:',
    hoist: true,
    mentionable: true,
    hasCategory: false,
  },

  {
    name: 'photograph',
    color: Colors.Green,
    unicodeEmoji: ':mortar_board:',
    hoist: true,
    mentionable: true,
    room: ['Artist'],
    hasCategory: false,
  },

  {
    name: 'singer',
    color: Colors.Blue,
    unicodeEmoji: ':mortar_board:',
    hoist: true,
    mentionable: true,
    room: ['Artist'],
    hasCategory: false,
  },

  {
    name: 'student',
    color: Colors.Blue,
    unicodeEmoji: ':mortar_board:',
    hoist: true,
    mentionable: true,
    hasCategory: true,
  },
  {
    name: 'video maker',
    color: Colors.Red,
    unicodeEmoji: ':clapper:',
    hoist: true,
    mentionable: true,
    room: ['Artist'],
    hasCategory: false,
  },
  {
    name: 'movie buff',
    color: Colors.DarkPurple,
    unicodeEmoji: ':clapper:',
    hoist: true,
    mentionable: true,
    hasCategory: false,
  },
  {
    name: 'athlete',
    color: Colors.Orange,
    unicodeEmoji: ':sports_medal:',
    hoist: true,
    mentionable: true,
    room: [],
    hasCategory: false,
  },
  // gaming roles

  {
    name: 'Gaming',
    color: Colors.Red,
    unicodeEmoji: ':video_game:',
    hoist: true,
    mentionable: true,
    room: [],
    hasCategory: true,
  },
  {
    name: 'minecraft player',
    color: Colors.Red,
    unicodeEmoji: ':video_game:',
    hoist: true,
    mentionable: true,
    room: ['Gaming'],
    hasCategory: false,
  },
  {
    name: 'fps player',
    color: Colors.Blue,
    unicodeEmoji: ':video_game:',
    hoist: true,
    mentionable: true,
    room: ['Gaming'],
    hasCategory: false,
  },
  {
    name: 'fifa player',
    color: Colors.Green,
    unicodeEmoji: ':video_game:',
    hoist: true,
    mentionable: true,
    room: ['Gaming'],
    hasCategory: false,
  },
  {
    name: 'monster hunter player',
    color: Colors.Orange,
    unicodeEmoji: ':video_game:',
    hoist: true,
    mentionable: true,
    room: ['Gaming'],
    hasCategory: false,
  },
  {
    name: 'pokemon player',
    color: Colors.Yellow,
    unicodeEmoji: ':video_game:',
    hoist: true,
    mentionable: true,
    room: ['Gaming'],
    hasCategory: false,
  },
  {
    name: 'strategy player',
    color: Colors.Purple,
    unicodeEmoji: ':video_game:',
    hoist: true,
    mentionable: true,
    room: ['Gaming'],
    hasCategory: false,
  },
  {
    name: 'pvp player',
    color: Colors.Red,
    unicodeEmoji: ':video_game:',
    hoist: true,
    mentionable: true,
    room: ['Gaming'],
    hasCategory: false,
  },
  {
    name: 'chess player',
    color: Colors.White,
    unicodeEmoji: ':chess_pawn:',
    hoist: true,
    mentionable: true,
    room: ['Gaming'],
    hasCategory: false,
  },
  {
    name: 'poker player',
    color: Colors.Green,
    unicodeEmoji: ':spades:',
    hoist: true,
    mentionable: true,
    room: ['Gaming'],
    hasCategory: false,
  },
  {
    name: 'sudoku player',
    color: Colors.Blue,
    unicodeEmoji: ':pencil2:',
    hoist: true,
    mentionable: true,
    room: ['Gaming'],
    hasCategory: false,
  },
  {
    name: 'scrabble player',
    color: Colors.Yellow,
    unicodeEmoji: ':abc:',
    hoist: true,
    mentionable: true,
    room: ['Gaming'],
    hasCategory: false,
  },
  //  sexes role s

  {
    name: 'Male',
    color: Colors.Blue,
    unicodeEmoji: ':male_sign:',
    hoist: true,
    mentionable: true,
    room: [],
    hasCategory: false,
  },

  {
    name: 'female',
    color: Colors.DarkVividPink,
    unicodeEmoji: ':female_sign:',
    hoist: true,
    mentionable: true,
    room: [],
    hasCategory: false,
  },
  {
    name: 'LGBT',
    color: Colors.DarkPurple,
    unicodeEmoji: ':rainbow_flag:',
    hoist: true,
    mentionable: true,
    room: [],
    hasCategory: true,
  },
];

export const categories = [
  {
    name: 'General',
    allowViewChanel: ['Male', 'female', 'LGBT'],
    denyViewChanel: ['@everyone'],
  },

  ...languagesRoles
    .filter((role) => !!role.hasCategory)
    .map((role) => {
      return {
        name: role.name,
        allowViewChanel: [
          ...languagesRoles
            .filter((languageRole) =>
              (languageRole.room ?? []).includes(role.name),
            )
            ?.map((role) => role.name),
          role.name,
        ],
        denyViewChanel: ['@everyone'],
      };
    }),
];
