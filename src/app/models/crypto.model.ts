export interface CryptoModel {
  readonly symbol: string;
  readonly priceChange: string;
  readonly priceChangePercent: string;
  readonly weightedAvgPrice: string;
  readonly prevClosePrice: string;
  readonly lastPrice: string;
  readonly lastQty: string;
  readonly bidPrice: string;
  readonly bidQty: string;
  readonly askPrice: string;
  readonly askQty: string;
  readonly openPrice: string;
  readonly highPrice: string;
  readonly lowPrice: string;
  readonly volume: string;
  readonly quoteVolume: string;
  readonly openTime: number;
  readonly closeTime: number;
  readonly firstId: number;
  readonly lastId: number;
  readonly count: number;
}
