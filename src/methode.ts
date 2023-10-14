import { ChannelType } from 'discord.js';
const twoToTen = [3, 5, 99];
const zeroToFive = [1, 2];

interface roomProps {
  name: string;
  type: ChannelType;
  parent?: string | number;
  rateLimitPerUser?: number;
}

const vocalRoom = (name: string, num: number): roomProps[] => {
  return zeroToFive.map((number) => {
    if (num == 99) {
      return {
        name: `${name} • ∞ - ${number}`,
        type: ChannelType.GuildVoice,
      };
    } else {
      return {
        name: `${name} • ${num}.${number}`,
        type: ChannelType.GuildVoice,
        userLimit: num,
      };
    }
  });
};

export const getRooms = ({
  name,
  parent_id,
  haveTeacher,
}: {
  name: string;
  parent_id: string | number;
  haveTeacher: boolean;
}): roomProps[] => {
  const voiceChat: roomProps[] = [];

  twoToTen.forEach((number) => {
    [...vocalRoom(name, number)].forEach((room) => voiceChat.push(room));
  });

  const classRoom: roomProps[] = [];

  if (haveTeacher) {
    classRoom.push({
      name: `🏫 ${name} • classroom`,
      type: ChannelType.GuildStageVoice,
    });
  }
  return [
    ...classRoom,
    {
      name: `💬 ${name} chat`,
      type: ChannelType.GuildText,
    },
    {
      name: `😂 ${name} memes`,
      type: ChannelType.GuildText,
    },

    ...voiceChat,
  ].map((channel) => ({ ...channel, parent: parent_id }));
};
