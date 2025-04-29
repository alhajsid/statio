/**
 * Represents an Ad Creative from Meta Ads.
 */
export interface AdCreative {
  /**
   * The ID of the ad creative.
   */
  id: string;
  /**
   * The name of the ad creative.
   */
  name: string;
  /**
   * The URL of the image or video associated with the ad creative.
   */
  thumbnailUrl: string;
  /**
   * The ID of the associated ad account.
   */
  adAccountId: string;
}

/**
 * Represents performance metrics for an Ad Creative.
 */
export interface AdCreativePerformance {
  /**
   * The ID of the ad creative.
   */
  creativeId: string;
  /**
   * Click-through rate.
   */
  ctr: number;
  /**
   * Cost per action.
   */
  cpa: number;
  /**
   * Cost per mille (1000 impressions).
   */
  cpm: number;
  /**
   * Amount spent on the ad creative.
   */
  spend: number;
  /**
   * Return on ad spend.
   */
  roas: number;
}

interface MetaCampaign {
  campaignName: string;
  impressions: number;
}

const META_CLIENT_ID = "1376640670216320"; // Replace with your actual Meta Client ID
const META_CLIENT_SECRET = "95c8fdea8872df690cb4dd6f678189cb"; // Replace with your actual Meta Client Secret
const META_REDIRECT_URI = "http://localhost:3000/api/meta/callback"; // Replace with your redirect URI

export const getMetaAnalytics = async (): Promise<MetaCampaign[]> => {
  // Check if we already have an access token
  let accessToken = localStorage.getItem("metaAccessToken");
  if (!accessToken) {
    // If not, start the OAuth flow
    const authorizationUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${META_CLIENT_ID}&redirect_uri=${META_REDIRECT_URI}&scope=ads_management,read_insights,business_management&response_type=code`;
    window.location.href = authorizationUrl;
    return [];
  } else {
    // fetch data
    try {
      const response = await fetch(
        `https://graph.facebook.com/v18.0/me/adcampaigns?fields=name,insights{impressions}&access_token=${accessToken}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const campaignData: MetaCampaign[] = data.data.map((campaign: any) => ({
        campaignName: campaign.name,
        impressions: campaign.insights?.data[0]?.impressions || 0,
      }));

      return campaignData;
    } catch (error) {
      console.error("Error fetching Meta Ads data:", error);
      return [];
    }
  }
};