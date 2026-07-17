export type EngagementCounts = {
  likes: number;
  saves: number;
  shares: number;
};

export const articleEngagementMetrics: Record<string, EngagementCounts> = {
  camila: {
    likes: 2840,
    saves: 1620,
    shares: 3910,
  },
  bafweek: {
    likes: 3564,
    saves: 2188,
    shares: 4476,
  },
  guadalajara: {
    likes: 2495,
    saves: 1836,
    shares: 3052,
  },
};

export function stableLikeCount(key: string) {
  let hash = 0;

  for (let index = 0; index < key.length; index += 1) {
    hash = (hash * 31 + key.charCodeAt(index)) % 9000;
  }

  return 1200 + hash;
}
