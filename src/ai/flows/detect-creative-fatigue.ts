'use server';
/**
 * @fileOverview This file defines a Genkit flow for detecting creative fatigue in ad creatives.
 *
 * - detectCreativeFatigue - A function that analyzes ad creative performance data to detect fatigue.
 * - DetectCreativeFatigueInput - The input type for the detectCreativeFatigue function.
 * - DetectCreativeFatigueOutput - The output type for the detectCreativeFatigue function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const DetectCreativeFatigueInputSchema = z.object({
  creativeId: z.string().describe('The ID of the ad creative to analyze.'),
  ctrTrend: z.number().describe('The trend of the click-through rate (CTR) over time.  Negative values indicate a decline.'),
  cpaTrend: z.number().describe('The trend of the cost per action (CPA) over time.  Positive values indicate an increase.'),
  cpmTrend: z.number().describe('The trend of the cost per mille (CPM) over time. Positive values indicate an increase.'),
  spendTrend: z.number().describe('The trend of the amount spent on the ad creative over time. Positive values indicate an increase.'),
  roasTrend: z.number().describe('The trend of the return on ad spend (ROAS) over time. Negative values indicate a decline.'),
});
export type DetectCreativeFatigueInput = z.infer<typeof DetectCreativeFatigueInputSchema>;

const DetectCreativeFatigueOutputSchema = z.object({
  isFatigued: z.boolean().describe('Whether the ad creative is likely experiencing fatigue.'),
  reason: z.string().describe('The reason for the fatigue detection, explaining the performance decline.'),
});
export type DetectCreativeFatigueOutput = z.infer<typeof DetectCreativeFatigueOutputSchema>;

export async function detectCreativeFatigue(input: DetectCreativeFatigueInput): Promise<DetectCreativeFatigueOutput> {
  return detectCreativeFatigueFlow(input);
}

const prompt = ai.definePrompt({
  name: 'detectCreativeFatiguePrompt',
  input: {
    schema: z.object({
      creativeId: z.string().describe('The ID of the ad creative to analyze.'),
      ctrTrend: z.number().describe('The trend of the click-through rate (CTR) over time.  Negative values indicate a decline.'),
      cpaTrend: z.number().describe('The trend of the cost per action (CPA) over time.  Positive values indicate an increase.'),
      cpmTrend: z.number().describe('The trend of the cost per mille (CPM) over time. Positive values indicate an increase.'),
      spendTrend: z.number().describe('The trend of the amount spent on the ad creative over time. Positive values indicate an increase.'),
      roasTrend: z.number().describe('The trend of the return on ad spend (ROAS) over time. Negative values indicate a decline.'),
    }),
  },
  output: {
    schema: z.object({
      isFatigued: z.boolean().describe('Whether the ad creative is likely experiencing fatigue.'),
      reason: z.string().describe('The reason for the fatigue detection, explaining the performance decline.'),
    }),
  },
  prompt: `You are an expert in advertising analytics, specializing in detecting creative fatigue.

  Analyze the performance trends of the ad creative with the following trends:

  CTR Trend: {{{ctrTrend}}}
  CPA Trend: {{{cpaTrend}}}
  CPM Trend: {{{cpmTrend}}}
  Spend Trend: {{{spendTrend}}}
  ROAS Trend: {{{roasTrend}}}

  Based on these trends, determine if the ad creative is experiencing fatigue.  Explain your reasoning.
`,
});

const detectCreativeFatigueFlow = ai.defineFlow<
  typeof DetectCreativeFatigueInputSchema,
  typeof DetectCreativeFatigueOutputSchema
>(
  {
    name: 'detectCreativeFatigueFlow',
    inputSchema: DetectCreativeFatigueInputSchema,
    outputSchema: DetectCreativeFatigueOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
