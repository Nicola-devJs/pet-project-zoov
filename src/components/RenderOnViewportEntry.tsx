import React, { Suspense, useRef } from 'react'
import { Skeleton } from './Skeleton'
import useFirstViewportEntry from '../hook/useFirstViewportEntry'

interface RenderOnViewportEntryProps {
   children: React.ReactElement
   id?: string
}

export const RenderOnViewportEntry: React.FC<RenderOnViewportEntryProps> = ({
   children,
   id,
}) => {
   const refNode = useRef<HTMLDivElement>(null)
   const options = {
      threshold: 0.1,
      root: null,
      rootMargin: '0px',
   }
   const entered = useFirstViewportEntry(refNode, options)

   return (
      <div ref={refNode} style={{ minHeight: '100vh' }} id={id}>
         {entered && <Suspense fallback={<Skeleton />}>{children}</Suspense>}
      </div>
   )
}
