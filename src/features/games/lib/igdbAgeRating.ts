type ExternalImage = {
  title: string;
  url: string;
};

export default function igdbAgeRating(rating: number) {
  const ageRatings: ExternalImage[] = [
    {
      title: "PEGI - 3",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/PEGI_3.svg",
    },
    {
      title: "PEGI - 7",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/29/PEGI_7.svg",
    },
    {
      title: "PEGI - 12",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/44/PEGI_12.svg",
    },
    {
      title: "PEGI - 16",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/PEGI_16.svg",
    },
    {
      title: "PEGI - 18",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/75/PEGI_18.svg",
    },
    {
      title: "ESRB - Rating Pending",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/45/ESRB_2013_Rating_Pending.svg",
    },
    {
      title: "ESRB - Early Childhood",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/05/ESRB_2013_Early_Childhood.svg",
    },
    {
      title: "ESRB - Everyone",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/ESRB_2013_Everyone.svg",
    },
    {
      title: "ESRB - Everyone 10+",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/70/ESRB_2013_Everyone_10%2B.svg",
    },
    {
      title: "ESRB - Teen",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/ESRB_2013_Teen.svg",
    },
    {
      title: "ESRB - Mature",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/ESRB_2013_Mature.svg",
    },
    {
      title: "ESRB - Adults Only",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e2/ESRB_2013_Adults_Only_18%2B.svg",
    },
    {
      title: "CERO - A",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/CERO_A.svg",
    },
    {
      title: "CERO - B",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/CERO_B.svg",
    },
    {
      title: "CERO - C",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/CERO_C.svg",
    },
    {
      title: "CERO - D",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/ac/CERO_D.svg",
    },
    {
      title: "CERO - Z",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/47/CERO_Z.svg",
    },
    {
      title: "USK - 0",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/73/USK_0.svg",
    },
    {
      title: "USK - 6",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/de/USK_6.svg",
    },
    {
      title: "USK - 12",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c6/USK_12.svg",
    },
    {
      title: "USK - 16",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/USK_16.svg",
    },
    {
      title: "USK - 18",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/USK_18.svg",
    },
    {
      title: "GRAC - All",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/GRAC_All_%28%EC%A0%84%EC%B2%B4%EC%9D%B4%EC%9A%A9%EA%B0%80%29.svg",
    },
    {
      title: "GRAC - 12",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a4/GRAC_12_%2812%EC%84%B8%EC%9D%B4%EC%9A%A9%EA%B0%80%29.svg",
    },
    {
      title: "GRAC - 15",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/7e/GRAC_15_%2815%EC%84%B8%EC%9D%B4%EC%9A%A9%EA%B0%80%29.svg",
    },
    {
      title: "GRAC - 18",
      url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/GRAC_18_%2818%EC%B2%AD%EC%86%8C%EB%85%84%EC%9D%B4%EC%9A%A9%EB%B6%88%EA%B0%80%29.svg",
    },
    {
      title: "GRAC - Test",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/46/GRAC_Test_%28%EC%8B%9C%ED%97%98%EC%9A%A9%29.svg",
    },
    {
      title: "ClassInd - L",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/22/DJCTQ_-_L.svg",
    },
    {
      title: "ClassInd - 10",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/DJCTQ_-_10.svg",
    },
    {
      title: "ClassInd - 12",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/69/DJCTQ_-_12.svg",
    },
    {
      title: "ClassInd - 14",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/DJCTQ_-_14.svg",
    },
    {
      title: "ClassInd - 16",
      url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/DJCTQ_-_16.svg",
    },
    {
      title: "ClassInd - 18",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/DJCTQ_-_18.svg",
    },
    {
      title: "ACB - General",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Australian_Classification_General_%28G%29.svg",
    },
    {
      title: "ACB - Parental Guidance",
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Australian_Classification_Parental_Guidance_%28PG%29.svg",
    },
    {
      title: "ACB - Mature",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Australian_Classification_Mature_%28M%29.svg",
    },
    {
      title: "ACB - Mature 15",
      url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Australian_Classification_Mature_15%2B_%28MA_15%2B%29.svg",
    },
    {
      title: "ACB - Restricted 18",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Australian_Classification_Restricted_18%2B_%28R_18%2B%29.svg",
    },
    {
      title: "ACB - Refused Classification",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Australian_Classification_Refused_Classification_%28RC%29.svg",
    },
  ];
  return ageRatings[rating - 1];
}
