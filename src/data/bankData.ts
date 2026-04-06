export interface BankData {
  name: string;
  appId: string;
  totalRaters: number;
  ratings: { five: number; four: number; three: number; two: number; one: number };
  averageRating: number;
  horizontalScore: number;
  verticalScore: number;
  verticalScorePercent: number;
  volumeValue: number;
  lastMonthDownloads: number;
  lastMonthRaters: number;
  lastMonthComments: number;
  activityScore: number;
  finalScore: number;
  category: string;
}

export interface AppStoreBankData {
  name: string;
  appId: string;
  totalRaters: number;
  rating5: number;
  rating4: number;
  rating3: number;
  rating2: number;
  rating1: number;
  averageRating: number;
  horizontalScore: number;
  verticalScore: number;
  verticalScorePercent: number;
  volumeValue: number;
  totalValue: number;
  lastMonthDownloads: number;
  lastMonthRaters: number;
  lastMonthReviews: number;
  activityScore: number;
  finalScore: number;
  category: string;
}

export type MonthKey = "february" | "march";

export const months: { key: MonthKey; label: string }[] = [
  { key: "february", label: "Fevral" },
  { key: "march", label: "Mart" },
];

// ==================== FEVRAL ====================
const bankDataFeb: BankData[] = [
  { name: "ALIF", appId: "Alif: shop, pay and transfer", totalRaters: 277_264, ratings: { five: 243_994, four: 13_863, three: 6_931, two: 5_545, one: 6_931 }, averageRating: 4.74, horizontalScore: 94.8, verticalScore: 4.91, verticalScorePercent: 98.23, volumeValue: 0, lastMonthDownloads: 387_352, lastMonthRaters: 6_626, lastMonthComments: 1_420, activityScore: 98.85, finalScore: 97.29, category: "To'lov tashkiloti" },
  { name: "APAY", appId: "Apay", totalRaters: 973, ratings: { five: 343, four: 194, three: 194, two: 116, one: 126 }, averageRating: 3.49, horizontalScore: 69.8, verticalScore: 0.81, verticalScorePercent: 16.29, volumeValue: 0, lastMonthDownloads: 17_094, lastMonthRaters: 54, lastMonthComments: 4, activityScore: 47, finalScore: 44.36, category: "To'lov tashkiloti" },
  { name: "ATTO", appId: "ATTO.Uz", totalRaters: 48_584, ratings: { five: 40_327, four: 3_886, three: 1_700, two: 1_214, one: 1_457 }, averageRating: 4.63, horizontalScore: 92.6, verticalScore: 4.53, verticalScorePercent: 90.67, volumeValue: 0, lastMonthDownloads: 107_538, lastMonthRaters: 875, lastMonthComments: 481, activityScore: 94.42, finalScore: 92.56, category: "To'lov tashkiloti" },
  { name: "BEEPUL", appId: "Beepul", totalRaters: 138_066, ratings: { five: 125_643, four: 4_832, three: 2_070, two: 2_070, one: 3_451 }, averageRating: 4.8, horizontalScore: 96, verticalScore: 4.83, verticalScorePercent: 96.51, volumeValue: 0, lastMonthDownloads: 272_955, lastMonthRaters: 15_643, lastMonthComments: 731, activityScore: 98.74, finalScore: 97.08, category: "To'lov tashkiloti" },
  { name: "CLICK", appId: "Click SuperApp", totalRaters: 664_200, ratings: { five: 584_496, four: 33_210, three: 16_605, two: 13_284, one: 16_605 }, averageRating: 4.77, horizontalScore: 95.4, verticalScore: 4.96, verticalScorePercent: 99.25, volumeValue: 0, lastMonthDownloads: 487_604, lastMonthRaters: 17_062, lastMonthComments: 717, activityScore: 99.01, finalScore: 97.89, category: "To'lov tashkiloti" },
  { name: "IWON", appId: "iwon", totalRaters: 56, ratings: { five: 30, four: 11, three: 8, two: 4, one: 3 }, averageRating: 3.75, horizontalScore: 75, verticalScore: 0.06, verticalScorePercent: 1.11, volumeValue: 0, lastMonthDownloads: 28_356, lastMonthRaters: 97, lastMonthComments: 22, activityScore: 67.67, finalScore: 47.93, category: "To'lov tashkiloti" },
  { name: "LIMON PAY", appId: "Limon pay", totalRaters: 375, ratings: { five: 188, four: 75, three: 56, two: 30, one: 26 }, averageRating: 3.88, horizontalScore: 77.6, verticalScore: 0.35, verticalScorePercent: 6.98, volumeValue: 0, lastMonthDownloads: 8_395, lastMonthRaters: 18, lastMonthComments: 35, activityScore: 51.9, finalScore: 45.49, category: "To'lov tashkiloti" },
  { name: "MILLIYPAY", appId: "MilliyPay", totalRaters: 6_382, ratings: { five: 5_299, four: 510, three: 223, two: 159, one: 191 }, averageRating: 4.6, horizontalScore: 92, verticalScore: 2.8, verticalScorePercent: 56.07, volumeValue: 0, lastMonthDownloads: 27_430, lastMonthRaters: 356, lastMonthComments: 136, activityScore: 85.27, finalScore: 77.78, category: "To'lov tashkiloti" },
  { name: "OSON", appId: "OSON - Transfers and Payments", totalRaters: 92_107, ratings: { five: 81_056, four: 4_605, three: 2_302, two: 1_842, one: 2_302 }, averageRating: 4.71, horizontalScore: 94.2, verticalScore: 4.74, verticalScorePercent: 94.85, volumeValue: 0, lastMonthDownloads: 92_757, lastMonthRaters: 870, lastMonthComments: 53, activityScore: 89.57, finalScore: 92.87, category: "To'lov tashkiloti" },
  { name: "PAYME", appId: "payme - to'lov va o'tkazmalar", totalRaters: 760_580, ratings: { five: 669_312, four: 38_029, three: 19_014, two: 15_211, one: 19_014 }, averageRating: 4.72, horizontalScore: 94.4, verticalScore: 4.97, verticalScorePercent: 99.35, volumeValue: 0, lastMonthDownloads: 479_857, lastMonthRaters: 16_258, lastMonthComments: 1_490, activityScore: 99.23, finalScore: 97.66, category: "To'lov tashkiloti" },
  { name: "PAYNET", appId: "Paynet — тўлов ва ўтказмалар", totalRaters: 156_586, ratings: { five: 129_969, four: 12_526, three: 5_480, two: 3_914, one: 4_697 }, averageRating: 4.56, horizontalScore: 91.2, verticalScore: 4.85, verticalScorePercent: 96.91, volumeValue: 0, lastMonthDownloads: 222_406, lastMonthRaters: 8_397, lastMonthComments: 821, activityScore: 98.47, finalScore: 95.53, category: "To'lov tashkiloti" },
  { name: "PAYWAY", appId: "PayWay удобные переводы по СНГ", totalRaters: 3_668, ratings: { five: 1_836, four: 733, three: 550, two: 293, one: 256 }, averageRating: 3.75, horizontalScore: 75, verticalScore: 2.12, verticalScorePercent: 42.32, volumeValue: 0, lastMonthDownloads: 41_702, lastMonthRaters: 55, lastMonthComments: 137, activityScore: 72.66, finalScore: 63.33, category: "To'lov tashkiloti" },
  { name: "PLUM", appId: "Plum", totalRaters: 5_317, ratings: { five: 4_415, four: 425, three: 186, two: 132, one: 159 }, averageRating: 4.59, horizontalScore: 91.8, verticalScore: 2.58, verticalScorePercent: 51.54, volumeValue: 0, lastMonthDownloads: 49_982, lastMonthRaters: 75, lastMonthComments: 192, activityScore: 76.27, finalScore: 73.2, category: "To'lov tashkiloti" },
  { name: "SELLO SUPERAPP", appId: "Sello SuperApp", totalRaters: 2_494, ratings: { five: 2_197, four: 124, three: 62, two: 49, one: 62 }, averageRating: 4.74, horizontalScore: 94.8, verticalScore: 1.66, verticalScorePercent: 33.28, volumeValue: 0, lastMonthDownloads: 31_545, lastMonthRaters: 181, lastMonthComments: 67, activityScore: 79.25, finalScore: 69.11, category: "To'lov tashkiloti" },
  { name: "TEZPAY", appId: "TezPay", totalRaters: 7_938, ratings: { five: 5_956, four: 952, three: 396, two: 317, one: 317 }, averageRating: 4.47, horizontalScore: 89.4, verticalScore: 3.07, verticalScorePercent: 61.35, volumeValue: 0, lastMonthDownloads: 20_890, lastMonthRaters: 295, lastMonthComments: 140, activityScore: 82.9, finalScore: 77.88, category: "To'lov tashkiloti" },
];

const appStoreDataFeb: AppStoreBankData[] = [
  { name: "ALIF", appId: "Alif: shop, pay and transfer", totalRaters: 40_690, rating5: 37_845, rating4: 1_220, rating3: 406, rating2: 406, rating1: 813, averageRating: 4.85, horizontalScore: 97, verticalScore: 4.45, verticalScorePercent: 89.06, volumeValue: 0, totalValue: 0, lastMonthDownloads: 113_211, lastMonthRaters: 359, lastMonthReviews: 34, activityScore: 83.75, finalScore: 89.94, category: "To'lov tashkiloti" },
  { name: "APAY", appId: "Apay", totalRaters: 60, rating5: 43, rating4: 9, rating3: 4, rating2: 2, rating1: 2, averageRating: 4.18, horizontalScore: 83.6, verticalScore: 0.06, verticalScorePercent: 1.19, volumeValue: 0, totalValue: 0, lastMonthDownloads: 27_782, lastMonthRaters: 2, lastMonthReviews: 1, activityScore: 31.93, finalScore: 38.91, category: "To'lov tashkiloti" },
  { name: "ATTO", appId: "ATTO.Uz", totalRaters: 20_802, rating5: 17_682, rating4: 1_664, rating3: 624, rating2: 416, rating1: 416, averageRating: 4.77, horizontalScore: 95.4, verticalScore: 4.03, verticalScorePercent: 80.62, volumeValue: 0, totalValue: 0, lastMonthDownloads: 12_056, lastMonthRaters: 199, lastMonthReviews: 37, activityScore: 71.99, finalScore: 82.67, category: "To'lov tashkiloti" },
  { name: "BEEPUL", appId: "Beepul", totalRaters: 21_960, rating5: 20_425, rating4: 658, rating3: 219, rating2: 219, rating1: 439, averageRating: 4.82, horizontalScore: 96.4, verticalScore: 4.07, verticalScorePercent: 81.45, volumeValue: 0, totalValue: 0, lastMonthDownloads: 190_858, lastMonthRaters: 674, lastMonthReviews: 17, activityScore: 82.5, finalScore: 86.78, category: "To'lov tashkiloti" },
  { name: "CLICK", appId: "Click SuperApp", totalRaters: 96_552, rating5: 89_795, rating4: 2_896, rating3: 965, rating2: 965, rating1: 1_931, averageRating: 4.83, horizontalScore: 96.6, verticalScore: 4.75, verticalScorePercent: 95.08, volumeValue: 0, totalValue: 0, lastMonthDownloads: 22_225, lastMonthRaters: 3_339, lastMonthReviews: 40, activityScore: 86.24, finalScore: 92.64, category: "To'lov tashkiloti" },
  { name: "IWON", appId: "iwon", totalRaters: 10, rating5: 10, rating4: 0, rating3: 0, rating2: 0, rating1: 0, averageRating: 4.9, horizontalScore: 98, verticalScore: 0.01, verticalScorePercent: 0.2, volumeValue: 0, totalValue: 0, lastMonthDownloads: 12_494, lastMonthRaters: 1, lastMonthReviews: 8, activityScore: 38.95, finalScore: 45.72, category: "To'lov tashkiloti" },
  { name: "LIMON PAY", appId: "Limon pay", totalRaters: 40, rating5: 21, rating4: 8, rating3: 6, rating2: 3, rating1: 2, averageRating: 3.6, horizontalScore: 72, verticalScore: 0.04, verticalScorePercent: 0.79, volumeValue: 0, totalValue: 0, lastMonthDownloads: 12_213, lastMonthRaters: 0, lastMonthReviews: 2, activityScore: 29.21, finalScore: 34, category: "To'lov tashkiloti" },
  { name: "MILLIYPAY", appId: "MilliyPay", totalRaters: 71, rating5: 62, rating4: 5, rating3: 2, rating2: 1, rating1: 1, averageRating: 4.79, horizontalScore: 95.8, verticalScore: 0.07, verticalScorePercent: 1.4, volumeValue: 0, totalValue: 0, lastMonthDownloads: 12_590, lastMonthRaters: 0, lastMonthReviews: 7, activityScore: 37.58, finalScore: 44.93, category: "To'lov tashkiloti" },
  { name: "OSON", appId: "OSON - Transfers and Payments", totalRaters: 654, rating5: 329, rating4: 130, rating3: 98, rating2: 52, rating1: 45, averageRating: 3.77, horizontalScore: 75.4, verticalScore: 0.58, verticalScorePercent: 11.57, volumeValue: 0, totalValue: 0, lastMonthDownloads: 42_470, lastMonthRaters: 16, lastMonthReviews: 37, activityScore: 60.66, finalScore: 49.21, category: "To'lov tashkiloti" },
  { name: "PAYME", appId: "payme - to'lov va o'tkazmalar", totalRaters: 350_964, rating5: 326_399, rating4: 10_528, rating3: 3_509, rating2: 3_509, rating1: 7_019, averageRating: 4.86, horizontalScore: 97.2, verticalScore: 4.93, verticalScorePercent: 98.6, volumeValue: 0, totalValue: 0, lastMonthDownloads: 53_435, lastMonthRaters: 11_722, lastMonthReviews: 33, activityScore: 89.11, finalScore: 94.97, category: "To'lov tashkiloti" },
  { name: "PAYNET", appId: "Paynet — тўлов ва ўтказмалар", totalRaters: 9_382, rating5: 7_977, rating4: 750, rating3: 281, rating2: 187, rating1: 187, averageRating: 4.59, horizontalScore: 91.8, verticalScore: 3.26, verticalScorePercent: 65.23, volumeValue: 0, totalValue: 0, lastMonthDownloads: 144_244, lastMonthRaters: 207, lastMonthReviews: 61, activityScore: 83.33, finalScore: 80.12, category: "To'lov tashkiloti" },
  { name: "PAYWAY", appId: "PayWay удобные переводы по СНГ", totalRaters: 1_175, rating5: 1_000, rating4: 94, rating3: 35, rating2: 23, rating1: 23, averageRating: 4.73, horizontalScore: 94.6, verticalScore: 0.95, verticalScorePercent: 19.03, volumeValue: 0, totalValue: 0, lastMonthDownloads: 127_946, lastMonthRaters: 3, lastMonthReviews: 51, activityScore: 60.92, finalScore: 58.18, category: "To'lov tashkiloti" },
  { name: "PLUM", appId: "Plum", totalRaters: 529, rating5: 452, rating4: 42, rating3: 15, rating2: 10, rating1: 10, averageRating: 4.7, horizontalScore: 94, verticalScore: 0.48, verticalScorePercent: 9.57, volumeValue: 0, totalValue: 0, lastMonthDownloads: 159_694, lastMonthRaters: 1, lastMonthReviews: 2, activityScore: 38.21, finalScore: 47.26, category: "To'lov tashkiloti" },
  { name: "SELLO SUPERAPP", appId: "Sello SuperApp", totalRaters: 467, rating5: 398, rating4: 37, rating3: 14, rating2: 9, rating1: 9, averageRating: 4.52, horizontalScore: 90.4, verticalScore: 0.43, verticalScorePercent: 8.54, volumeValue: 0, totalValue: 0, lastMonthDownloads: 17_283, lastMonthRaters: 7, lastMonthReviews: 60, activityScore: 56.61, finalScore: 51.85, category: "To'lov tashkiloti" },
  { name: "TEZPAY", appId: "TezPay", totalRaters: 109, rating5: 94, rating4: 8, rating3: 3, rating2: 2, rating1: 2, averageRating: 4.61, horizontalScore: 92.2, verticalScore: 0.11, verticalScorePercent: 2.13, volumeValue: 0, totalValue: 0, lastMonthDownloads: 40_841, lastMonthRaters: 0, lastMonthReviews: 53, activityScore: 57.74, finalScore: 50.69, category: "To'lov tashkiloti" },
];

// ==================== MART ====================
const bankDataMar: BankData[] = [
  { name: "PAYME", appId: "Payme (Google Play)", totalRaters: 765_111, ratings: { five: 673_300, four: 38_255, three: 19_127, two: 15_302, one: 19_127 }, averageRating: 4.72, horizontalScore: 94.4, verticalScore: 4.97, verticalScorePercent: 99.35, volumeValue: 0, lastMonthDownloads: 505_904, lastMonthRaters: 17_262, lastMonthComments: 1_044, activityScore: 99.17, finalScore: 97.64, category: "To'lov tashkiloti" },
  { name: "CLICK", appId: "CLICK (Google Play)", totalRaters: 680_325, ratings: { five: 598_687, four: 34_016, three: 17_008, two: 13_606, one: 17_008 }, averageRating: 4.77, horizontalScore: 95.4, verticalScore: 4.96, verticalScorePercent: 99.27, volumeValue: 0, lastMonthDownloads: 191_606, lastMonthRaters: 13_770, lastMonthComments: 741, activityScore: 98.47, finalScore: 97.71, category: "To'lov tashkiloti" },
  { name: "ALIF", appId: "Alif Mobi (Google Play)", totalRaters: 290_477, ratings: { five: 255_623, four: 14_523, three: 7_261, two: 5_809, one: 7_261 }, averageRating: 4.74, horizontalScore: 94.8, verticalScore: 4.92, verticalScorePercent: 98.31, volumeValue: 0, lastMonthDownloads: 449_745, lastMonthRaters: 18_180, lastMonthComments: 259, activityScore: 98.21, finalScore: 97.11, category: "To'lov tashkiloti" },
  { name: "PAYNET", appId: "Paynet (Google Play)", totalRaters: 158_071, ratings: { five: 131_201, four: 12_645, three: 5_532, two: 3_951, one: 4_742 }, averageRating: 4.52, horizontalScore: 90.4, verticalScore: 4.85, verticalScorePercent: 96.93, volumeValue: 0, lastMonthDownloads: 183_333, lastMonthRaters: 15_950, lastMonthComments: 1_052, activityScore: 98.59, finalScore: 95.31, category: "To'lov tashkiloti" },
  { name: "BEEPUL", appId: "Beepul (Google Play)", totalRaters: 142_387, ratings: { five: 125_303, four: 7_119, three: 3_559, two: 2_847, one: 3_559 }, averageRating: 4.77, horizontalScore: 95.4, verticalScore: 4.83, verticalScorePercent: 96.61, volumeValue: 0, lastMonthDownloads: 553_298, lastMonthRaters: 4_665, lastMonthComments: 1_480, activityScore: 98.78, finalScore: 96.93, category: "To'lov tashkiloti" },
  { name: "OSON", appId: "Oson (Google Play)", totalRaters: 92_462, ratings: { five: 81_368, four: 4_623, three: 2_311, two: 1_849, one: 2_311 }, averageRating: 4.7, horizontalScore: 94, verticalScore: 4.74, verticalScorePercent: 94.87, volumeValue: 0, lastMonthDownloads: 42_540, lastMonthRaters: 3_970, lastMonthComments: 275, activityScore: 94.51, finalScore: 94.46, category: "To'lov tashkiloti" },
  { name: "ATTO", appId: "ATTO (Google Play)", totalRaters: 50_003, ratings: { five: 41_503, four: 4_000, three: 1_750, two: 1_250, one: 1_500 }, averageRating: 4.58, horizontalScore: 91.6, verticalScore: 4.55, verticalScorePercent: 90.91, volumeValue: 0, lastMonthDownloads: 100_752, lastMonthRaters: 739, lastMonthComments: 484, activityScore: 93.78, finalScore: 92.1, category: "To'lov tashkiloti" },
  { name: "TEZPAY", appId: "TezPay (Google Play)", totalRaters: 8_063, ratings: { five: 6_049, four: 967, three: 403, two: 322, one: 322 }, averageRating: 4.38, horizontalScore: 87.6, verticalScore: 3.09, verticalScorePercent: 61.72, volumeValue: 0, lastMonthDownloads: 35_812, lastMonthRaters: 25, lastMonthComments: 42, activityScore: 62.84, finalScore: 70.72, category: "To'lov tashkiloti" },
  { name: "MILLIYPAY", appId: "MilliyPay (Google Play)", totalRaters: 6_415, ratings: { five: 5_326, four: 513, three: 224, two: 160, one: 192 }, averageRating: 4.52, horizontalScore: 90.4, verticalScore: 2.81, verticalScorePercent: 56.2, volumeValue: 0, lastMonthDownloads: 40_101, lastMonthRaters: 245, lastMonthComments: 109, activityScore: 83.84, finalScore: 76.81, category: "To'lov tashkiloti" },
  { name: "PLUM", appId: "Plum Uzcard (Google Play)", totalRaters: 5_321, ratings: { five: 4_418, four: 425, three: 186, two: 133, one: 159 }, averageRating: 4.59, horizontalScore: 91.8, verticalScore: 2.58, verticalScorePercent: 51.56, volumeValue: 0, lastMonthDownloads: 25_227, lastMonthRaters: 166, lastMonthComments: 116, activityScore: 79.31, finalScore: 74.22, category: "To'lov tashkiloti" },
  { name: "PAYWAY", appId: "PayWay (Google Play)", totalRaters: 3_669, ratings: { five: 1_837, four: 733, three: 550, two: 293, one: 256 }, averageRating: 3.72, horizontalScore: 74.4, verticalScore: 2.12, verticalScorePercent: 42.32, volumeValue: 0, lastMonthDownloads: 40_417, lastMonthRaters: 256, lastMonthComments: 79, activityScore: 83.22, finalScore: 66.65, category: "To'lov tashkiloti" },
  { name: "SELLO SUPERAPP", appId: "Sello (Google Play)", totalRaters: 2_619, ratings: { five: 2_385, four: 91, three: 39, two: 39, one: 65 }, averageRating: 4.81, horizontalScore: 96.2, verticalScore: 1.72, verticalScorePercent: 34.37, volumeValue: 0, lastMonthDownloads: 19_782, lastMonthRaters: 179, lastMonthComments: 102, activityScore: 78.35, finalScore: 69.64, category: "To'lov tashkiloti" },
  { name: "APAY", appId: "A-Pay (Google Play)", totalRaters: 981, ratings: { five: 345, four: 196, three: 196, two: 117, one: 127 }, averageRating: 3.32, horizontalScore: 66.4, verticalScore: 0.82, verticalScorePercent: 16.4, volumeValue: 0, lastMonthDownloads: 15_542, lastMonthRaters: 1, lastMonthComments: 5, activityScore: 36.66, finalScore: 39.82, category: "To'lov tashkiloti" },
  { name: "LIMON PAY", appId: "Limon Pay (Google Play)", totalRaters: 375, ratings: { five: 188, four: 75, three: 56, two: 30, one: 26 }, averageRating: 3.88, horizontalScore: 77.6, verticalScore: 0.35, verticalScorePercent: 6.98, volumeValue: 0, lastMonthDownloads: 27_720, lastMonthRaters: 33, lastMonthComments: 16, activityScore: 57.02, finalScore: 47.2, category: "To'lov tashkiloti" },
  { name: "IWON", appId: "Iwon (Google Play)", totalRaters: 56, ratings: { five: 30, four: 11, three: 8, two: 4, one: 3 }, averageRating: 3.75, horizontalScore: 75, verticalScore: 0.06, verticalScorePercent: 1.11, volumeValue: 0, lastMonthDownloads: 19_211, lastMonthRaters: 39, lastMonthComments: 17, activityScore: 56.79, finalScore: 44.3, category: "To'lov tashkiloti" },
];

const appStoreDataMar: AppStoreBankData[] =  [
    { name: "SELLO SUPERAPP", appId: "Sello SuperApp", totalRaters: 467, rating5: 398, rating4: 37, rating3: 14, rating2: 9, rating1: 9, averageRating: 4.52, horizontalScore: 90.4, verticalScore: 0.43, verticalScorePercent: 8.54, volumeValue: 0, totalValue: 0, lastMonthDownloads: 17_283, lastMonthRaters: 7, lastMonthReviews: 60, activityScore: 56.61, finalScore: 51.85, category: "To'lov tashkiloti" },
  { name: "CLICK", appId: "Click Up (App Store)", totalRaters: 98_473, rating5: 91_582, rating4: 2_954, rating3: 984, rating2: 984, rating1: 1_969, averageRating: 4.83, horizontalScore: 96.6, verticalScore: 4.76, verticalScorePercent: 95.17, volumeValue: 0, totalValue: 0, lastMonthDownloads: 123_662, lastMonthRaters: 2_060, lastMonthReviews: 52, activityScore: 91.79, finalScore: 94.52, category: "To'lov tashkiloti" },
  { name: "OSON", appId: "Oson (App Store)", totalRaters: 659, rating5: 332, rating4: 131, rating3: 98, rating2: 52, rating1: 46, averageRating: 3.76, horizontalScore: 75.2, verticalScore: 0.58, verticalScorePercent: 11.65, volumeValue: 0, totalValue: 0, lastMonthDownloads: 83_013, lastMonthRaters: 17, lastMonthReviews: 22, activityScore: 59.2, finalScore: 48.68, category: "To'lov tashkiloti" },
  { name: "PAYME", appId: "Payme (App Store)", totalRaters: 352_494, rating5: 327_823, rating4: 10_574, rating3: 3_524, rating2: 3_524, rating1: 7_049, averageRating: 4.85, horizontalScore: 97, verticalScore: 4.93, verticalScorePercent: 98.6, volumeValue: 0, totalValue: 0, lastMonthDownloads: 97_739, lastMonthRaters: 9_735, lastMonthReviews: 43, activityScore: 91.75, finalScore: 95.78, category: "To'lov tashkiloti" },
  { name: "ALIF", appId: "Alif Mobi (App Store)", totalRaters: 42_139, rating5: 39_191, rating4: 1_264, rating3: 421, rating2: 421, rating1: 842, averageRating: 4.84, horizontalScore: 96.8, verticalScore: 4.47, verticalScorePercent: 89.39, volumeValue: 0, totalValue: 0, lastMonthDownloads: 75_036, lastMonthRaters: 585, lastMonthReviews: 43, activityScore: 86.76, finalScore: 90.98, category: "To'lov tashkiloti" },
  { name: "PLUM", appId: "Plum UZ (App Store)", totalRaters: 546, rating5: 467, rating4: 43, rating3: 16, rating2: 10, rating1: 10, averageRating: 4.68, horizontalScore: 93.6, verticalScore: 0.49, verticalScorePercent: 9.84, volumeValue: 0, totalValue: 0, lastMonthDownloads: 61_164, lastMonthRaters: 18, lastMonthReviews: 19, activityScore: 57.74, finalScore: 53.73, category: "To'lov tashkiloti" },
  { name: "ATTO", appId: "Atto (App Store)", totalRaters: 21_182, rating5: 18_007, rating4: 1_694, rating3: 635, rating2: 423, rating1: 423, averageRating: 4.76, horizontalScore: 95.2, verticalScore: 4.05, verticalScorePercent: 80.9, volumeValue: 0, totalValue: 0, lastMonthDownloads: 6_706, lastMonthRaters: 25, lastMonthReviews: 59, activityScore: 54.26, finalScore: 76.79, category: "To'lov tashkiloti" },
  { name: "IWON", appId: "Iwon (App Store)", totalRaters: 11, rating5: 11, rating4: 0, rating3: 0, rating2: 0, rating1: 0, averageRating: 4.91, horizontalScore: 98.2, verticalScore: 0.01, verticalScorePercent: 0.22, volumeValue: 0, totalValue: 0, lastMonthDownloads: 29_758, lastMonthRaters: 0, lastMonthReviews: 9, activityScore: 44.33, finalScore: 47.58, category: "To'lov tashkiloti" },
  { name: "APAY", appId: "A-Pay (App Store)", totalRaters: 60, rating5: 43, rating4: 9, rating3: 4, rating2: 2, rating1: 2, averageRating: 4.18, horizontalScore: 83.6, verticalScore: 0.06, verticalScorePercent: 1.19, volumeValue: 0, totalValue: 0, lastMonthDownloads: 23_527, lastMonthRaters: 1, lastMonthReviews: 3, activityScore: 35.51, finalScore: 40.1, category: "To'lov tashkiloti" },
  { name: "TEZPAY", appId: "TezPay (App Store)", totalRaters: 110, rating5: 95, rating4: 8, rating3: 3, rating2: 2, rating1: 2, averageRating: 4.61, horizontalScore: 92.2, verticalScore: 0.11, verticalScorePercent: 2.15, volumeValue: 0, totalValue: 0, lastMonthDownloads: 103_962, lastMonthRaters: 2, lastMonthReviews: 47, activityScore: 59.94, finalScore: 51.43, category: "To'lov tashkiloti" },
  { name: "PAYWAY", appId: "PayWay (App Store)", totalRaters: 1_176, rating5: 1_001, rating4: 94, rating3: 35, rating2: 23, rating1: 23, averageRating: 4.72, horizontalScore: 94.4, verticalScore: 0.95, verticalScorePercent: 19.04, volumeValue: 0, totalValue: 0, lastMonthDownloads: 79_392, lastMonthRaters: 33, lastMonthReviews: 47, activityScore: 67.11, finalScore: 60.18, category: "To'lov tashkiloti" },
  { name: "PAYNET", appId: "Paynet (App Store)", totalRaters: 9_508, rating5: 8_083, rating4: 760, rating3: 285, rating2: 190, rating1: 190, averageRating: 4.58, horizontalScore: 91.6, verticalScore: 3.28, verticalScorePercent: 65.54, volumeValue: 0, totalValue: 0, lastMonthDownloads: 199_517, lastMonthRaters: 295, lastMonthReviews: 4, activityScore: 66.94, finalScore: 74.69, category: "To'lov tashkiloti" },
  { name: "MILLIYPAY", appId: "MilliyPay (App Store)", totalRaters: 72, rating5: 63, rating4: 5, rating3: 2, rating2: 1, rating1: 1, averageRating: 4.79, horizontalScore: 95.8, verticalScore: 0.07, verticalScorePercent: 1.42, volumeValue: 0, totalValue: 0, lastMonthDownloads: 23_465, lastMonthRaters: 0, lastMonthReviews: 6, activityScore: 39.98, finalScore: 45.73, category: "To'lov tashkiloti" },
  { name: "LIMON PAY", appId: "Limon Pay (App Store)", totalRaters: 41, rating5: 22, rating4: 8, rating3: 6, rating2: 3, rating1: 2, averageRating: 3.63, horizontalScore: 72.6, verticalScore: 0.04, verticalScorePercent: 0.81, volumeValue: 0, totalValue: 0, lastMonthDownloads: 19_316, lastMonthRaters: 1, lastMonthReviews: 4, activityScore: 36.33, finalScore: 36.58, category: "To'lov tashkiloti" }, { name: "BEEPUL", appId: "Beepul (App Store)", totalRaters: 22_699, rating5: 21_114, rating4: 680, rating3: 226, rating2: 226, rating1: 453, averageRating: 4.82, horizontalScore: 96.4, verticalScore: 4.1, verticalScorePercent: 81.95, volumeValue: 0, totalValue: 0, lastMonthDownloads: 88_527, lastMonthRaters: 892, lastMonthReviews: 44, activityScore: 88.68, finalScore: 89.01, category: "To'lov tashkiloti" },
];

// Monthly data store
const monthlyGPData: Record<MonthKey, BankData[]> = {
  february: bankDataFeb,
  march: bankDataMar,
};

const monthlyASData: Record<MonthKey, AppStoreBankData[]> = {
  february: appStoreDataFeb,
  march: appStoreDataMar,
};

// Backward-compatible exports (default to latest month)
export const bankData = bankDataMar;
export const appStoreBankData = appStoreDataMar;

export function getGPData(month: MonthKey): BankData[] {
  return monthlyGPData[month];
}

export function getASData(month: MonthKey): AppStoreBankData[] {
  return monthlyASData[month];
}

// Helper to compute combined scores
export interface CombinedBankScore {
  name: string;
  category: string;
  gpScore: number;
  asScore: number;
  activityScore: number;
  finalScore: number;
  gpData: BankData | undefined;
  asData: AppStoreBankData | undefined;
}

export function getCombinedScores(month: MonthKey = "march"): CombinedBankScore[] {
  const gpData = getGPData(month);
  const asData = getASData(month);

  const allNames = new Set([
    ...gpData.map(b => b.name),
    ...asData.map(b => b.name),
  ]);

  return Array.from(allNames).map(name => {
    const gp = gpData.find(b => b.name === name);
    const as_ = asData.find(b => b.name === name);

    const gpScore = gp
      ? (gp.horizontalScore + gp.verticalScorePercent + gp.activityScore) / 3
      : 0;
    const asScore = as_
      ? (as_.horizontalScore + as_.verticalScorePercent + as_.activityScore) / 3
      : 0;

    const gpActivity = gp?.activityScore ?? 0;
    const asActivity = as_?.activityScore ?? 0;
    const activityCount = (gp ? 1 : 0) + (as_ ? 1 : 0);
    const activityScore = activityCount > 0 ? (gpActivity + asActivity) / activityCount : 0;

    const scores = [gpScore, asScore, activityScore].filter((_, i) => {
      if (i === 0) return !!gp;
      if (i === 1) return !!as_;
      return activityCount > 0;
    });
    const finalScore = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / 3 : 0;

    return {
      name,
      category: gp?.category || as_?.category || "",
      gpScore: Math.round(gpScore * 100) / 100,
      asScore: Math.round(asScore * 100) / 100,
      activityScore: Math.round(activityScore * 100) / 100,
      finalScore: Math.round(finalScore * 100) / 100,
      gpData: gp,
      asData: as_,
    };
  })
  .sort((a, b) => b.finalScore - a.finalScore);
}
