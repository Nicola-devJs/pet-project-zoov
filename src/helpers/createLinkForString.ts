export function createLinkForString(
   currentString: string,
   majorString: string
): string | undefined {
   if (!majorString.includes(currentString)) {
      return
   }

   return majorString.replace(currentString, '')
}
