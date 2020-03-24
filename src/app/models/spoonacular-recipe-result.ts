export interface SpoonacularRecipeResult {
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    image: string;
    imageUrls: Array<string>;
}
