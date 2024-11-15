import React, { Fragment } from 'react'

const blockComponents = {
  // archive: ArchiveBlock,
  // content: ContentBlock,
  // cta: CallToActionBlock,
  // formBlock: FormBlock,
  // mediaBlock: MediaBlock,
}

export const RenderBlocks: React.FC<{
  // blocks: Page['layout'][0][]
  blocks: any
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
