export const gramsToText = (grams: number[]) => {
   return grams.map((g: number) => g + 'г').join(' / ')
}
