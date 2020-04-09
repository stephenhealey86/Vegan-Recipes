import { SpoonacularRecipeResult } from './spoonacular-recipe-result';

export interface SpoonacularRecipeSearch {
    results: Array<SpoonacularRecipeResult>;
    baseUri: string;
    offset: number;
    number: number;
    totalResults: number;
    processingTimeMs: number;
    expires: Date;
    isStale: boolean;
}
